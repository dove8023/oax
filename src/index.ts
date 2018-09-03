/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-13 23:53:15
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:26:24
 * @content what is the content of this file. */


import Router = require("koa-router");
import { bodyParamsCheck } from "common/utils";
import * as uuid from "uuid";
import cache from "common/cache";
import { config } from "config/config";
const captcha = require("trek-captcha");
// import Models from "sqlModel";
import * as v from "validator";

let router = new Router();


router.post("/hy", async (ctx) => {
    console.log(ctx.request.body)
    ctx.success({
        code: 0,
        msg: "hello"
    })
})

export default router;
