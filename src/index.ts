/*
 * @Author: Mr.He 
 * @Date: 2018-07-13 23:53:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-14 17:45:48
 * @content what is the content of this file. */


import Router = require("koa-router");
import { bodyParamsCheck } from "../common/utils";
const captcha = require("trek-captcha");


let router = new Router({
    prefix: '/api/v1'
});

router.get("/users/:id", (ctx) => {
    ctx.body = { "msg": "get ." }
});


// router.get("/users", (ctx) => {
//     ctx.body = { "msg": "find. ok nice." }
// });


router.get("/users", (ctx) => {
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

    // ctx.validateBody('email')
    //     .required("email required")
    //     .isString()
    //     .trim()
    //     .isEmail('Invalid email format')

    // ctx.validateBody('address')
    //     .required("address required")
    //     .isArray()
    //     .isLength(1, 5)



    ctx.body = { "msg": "ctx.vals.twtterName " }
});

/* 验证码图片 */
router.get("/validateimg", async (ctx) => {
    ctx.type = "image/gif";
    let { token, buffer } = await captcha();
    // console.log(ctx.cookie)
    ctx.cookies.set(
        'codeId',
        token,
        {
            // domain: "/",  // 写cookie所在的域名
            // path: "/api",       // 写cookie所在的路径
            maxAge: 1000 * 30, // cookie有效时长 ms
            // expires: new Date('2018-07-15'),  // cookie失效时间
            httpOnly: false,  // 是否只用于http请求中获取
            overwrite: false  // 是否允许重写
        }
    )
    ctx.body = buffer;
})

export default router;