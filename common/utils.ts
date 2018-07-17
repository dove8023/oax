/*
 * @Author: he@whaleblue.design
 * @Date: 2018-03-21 16:46:54
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:22:28
 * @content what is the content of this file. */

import path = require("path");
import fs = require("fs");

export function loadTest(dir: string, callback?: Function): void {
    let files = fs.readdirSync(dir);
    for (let f of files) {
        let fullPath = path.join(dir, f);
        let stat = fs.statSync(fullPath);

        if (stat.isDirectory()) {
            loadTest(fullPath, callback);
        } else {
            let p = fullPath.replace(/\.(ts|js)$/, "");
            let g = require(p);

            if (callback) {
                callback(g);
            }
        }
    }
}

export function bodyParamsCheck(ctx, params: { key: string, msg: string }[]) {
    let result = {};
    for (let item of params) {
        let val = ctx.request.body[item.key];
        if (!val || typeof val != "string") {
            ctx.error(500, item.msg)
            return false;
        }
        result[item.key] = val;
    }

    return result;
}
