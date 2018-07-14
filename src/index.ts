/*
 * @Author: Mr.He 
 * @Date: 2018-07-13 23:53:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-14 09:15:31
 * @content what is the content of this file. */


import Router = require("koa-router");
import { bodyParamsCheck } from "../common/utils";

let router = new Router({
    prefix: '/api/v1'
});

router.get("/users/:id", (ctx) => {
    ctx.body = { "msg": "get ." }
});


router.get("/users", (ctx) => {
    ctx.body = { "msg": "find. ok nice." }
});


router.post("/users", (ctx) => {
    // bodyParamsCheck(ctx, [
    //     {
    //         key: "twtterName",
    //         msg: "twtterName required"
    //     }, {
    //         key: "radditName",
    //         msg: "radditName required"
    //     }, {
    //         key: "facebookName",
    //         msg: "facebookName required"
    //     }, {
    //         key: "firstName",
    //         msg: "firstName required"
    //     }, {
    //         key: "lastName",
    //         msg: "lastName required"
    //     }, {
    //         key: "country",
    //         msg: "country required"
    //     }
    // ]);

    ctx.validateBody('email')
        .required("email required")
        .isString()
        .trim()
        .isEmail('Invalid email format')

    ctx.validateBody('address')
        .required("address required")
        .isArray()
        .isLength(1, 5)



    ctx.body = { "msg": ctx.vals.twtterName }
});

/* 验证码图片 */
router.get("/validateimg", (ctx) => {

})

export default router;