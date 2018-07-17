/*
 * @Author: he@whaleblue.design
 * @Date: 2018-03-02 11:19:32
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-17 23:02:58
 * @content what is the content of this file. */

require('app-module-path').addPath(__dirname);
import fs = require("fs");
import { config } from "config/config";
import { init, DB } from "common/db";
import cache from "common/cache";

process.on('unhandledRejection', (reason: any, p: PromiseLike<any>) => {
    console.error("unhandledRejection", reason);
});
process.on('uncaughtException', function (err) {
    console.error('uncaughtException==>', err.stack ? err.stack : err);
});

/* init DB, import table models. */
init(config.mysql.url, config.mysql.debug);
import "sqlModel/index";
// DB.sync({ force: false });

/* inject redis server. */
cache.init(config.redis.url);

/* other job */
import "./other";

import app from "./http";
const http = require("http");

let PORT = config.port;
let server = http.createServer(app.callback());
server.on('listening', function () {
    if (!/^\d+$/.test(`${PORT}`)) {
        fs.chmodSync(`${PORT}`, '777')
    }
});

server.on('error', (err: Error) => {
    throw err;
})

server.listen(PORT, () => {
    console.log("http server running ", PORT);
});
