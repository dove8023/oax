/*
 * @Author: he@whaleblue.design
 * @Date: 2018-06-18 09:40:43
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-13 23:19:53
 * @content what is the content of this file. */


import { Context } from 'koa';
import errorCode from "./error";
import {config}from "config/config";

export async function response(ctx: Context, next: Function) {
    ctx.success = function (data: any) {
        ctx.body = {
            code: 0,
            msg: "ok",
            data
        }
    }

    ctx.error = function (code: number, msg?: string) {
        ctx.body = {
            code: config.appID + code,
            msg: msg || errorCode[code],
            data: null
        }
    }

    await next();
}
