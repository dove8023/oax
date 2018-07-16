/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-13 23:53:15
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-15 23:05:10
 * @content what is the content of this file. */


import Router = require("koa-router");
import { bodyParamsCheck } from "common/utils";
import * as uuid from "uuid";
import cache from "common/cache";
const config = require("config/config.json");
const captcha = require("trek-captcha");
import Models from "sqlModel";
import * as v from "validator";

let router = new Router({
    prefix: '/api/v1'
});

router.get("/users/:id", async (ctx) => {
    let { id } = ctx.params;
    let result = await Models.users.findById(id);
    if (!result) {
        return ctx.error(404)
    }

    return ctx.success(result);
});


router.get("/users", async (ctx) => {
    let { page = 0, size = 20 } = ctx.request.query;
    let result = await Models.users.findAndCountAll({
        order: [["created_at", "desc"]],
        offset: page * size,
        limit: size
    });
    ctx.success(result);
});


router.post("/users", async (ctx) => {
    let paramsCheck: { [index: string]: string } = bodyParamsCheck(ctx, [
        {
            key: "twtterName",
            msg: "Twtter Name required"
        }, {
            key: "radditName",
            msg: "Raddit Name required"
        },
        {
            key: "facebookName",
            msg: "Facebook Name required"
        }, {
            key: "firstName",
            msg: "First Name required"
        }, {
            key: "lastName",
            msg: "Last Name required"
        }, {
            key: "country",
            msg: "Country required"
        }, {
            key: "code",
            msg: "Verification code required"
        }, {
            key: "codeId",
            msg: "Verification code id required"
        }, {
            key: "email",
            msg: "Email required"
        }
    ]);
    if (!paramsCheck) {
        return;
    }

    // is email
    if (!v.isEmail(paramsCheck.email)) {
        return ctx.error(500, "Email is in wrong format");
    }

    // address check
    let { address } = ctx.request.body;
    if (!address || !Array.isArray(address) || address.length < 1 || address.length > 5) {
        return ctx.error(500, "Address array is either empty or length should be within 1 to 5");
    }

    /* ============= Verification Code ============ */
    let { code, codeId } = ctx.request.body;
    let codeData = await cache.read(codeId);
    if (!codeData) {
        return ctx.error(101);
    }

    if (codeData.code != code) {
        await cache.del(codeId);
        return ctx.error(106)
    }

    await cache.del(codeId);
    /* ============= email check ============ */
    let emailUser = await Models.users.findOne({
        where: { email: ctx.vals.email }
    });
    if (emailUser) {
        return ctx.error(110);
    }

    let result = await Models.users.create({
        id: uuid.v1(),
        ...paramsCheck,
        address
    });

    ctx.success(result)
});

/* Get captcha id */
router.get("/captchaid", async (ctx) => {
    let id = uuid.v1();
    await cache.write(id, { code: "", count: 0 }, config.CaptchaTime);
    ctx.success({
        codeId: id
    });
});


/* get captcha  */
router.get("/captchaimg/:id", async (ctx) => {
    let { id } = ctx.params;
    let code = await cache.read(id);
    if (!code) {
        return ctx.error(101);
    }
    if (code.count != 0) {
        return ctx.error(102)
    }

    ctx.type = "image/gif";
    let { token, buffer } = await captcha();
    await cache.write(id, { code: token, count: 1 }, config.CaptchaTime);
    ctx.body = buffer;
});

export default router;
