/*
 * @Author: Mr.He 
 * @Date: 2018-07-13 23:53:15 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-13 23:59:08
 * @content what is the content of this file. */


import Router = require("koa-router");

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
    ctx.body = { "msg": "post. ok nice." }
});

export default router;