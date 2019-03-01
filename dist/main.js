"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-03-02 11:19:32
 * @Last Modified by: Mr.He
 * @Last Modified time: 2019-02-28 22:31:05
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
require('app-module-path').addPath(__dirname);
const fs = require("fs");
const config_1 = require("config/config");
// import { init, DB } from "common/db";
// import cache from "common/cache";
process.on('unhandledRejection', (reason, p) => {
    console.error("unhandledRejection", reason);
});
process.on('uncaughtException', function (err) {
    console.error('uncaughtException==>', err.stack ? err.stack : err);
});
/* init DB, import table models. */
// init(config.mysql.url, config.mysql.debug);
// import "sqlModel/index";
// DB.sync({ force: false });
/* inject redis server. */
// cache.init(config.redis.url);
/* other job */
// import "./other";
const http_1 = require("./http");
const http = require("http");
let PORT = config_1.config.port;
let server = http.createServer(http_1.default.callback());
server.on('listening', function () {
    if (!/^\d+$/.test(`${PORT}`)) {
        fs.chmodSync(`${PORT}`, '777');
    }
});
server.on('error', (err) => {
    throw err;
});
server.listen(PORT, () => {
    console.log("http server running ", PORT);
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL21haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztnREFLZ0Q7O0FBRWhELE9BQU8sQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxTQUFTLENBQUMsQ0FBQztBQUM5Qyx5QkFBMEI7QUFDMUIsMENBQXVDO0FBQ3ZDLHdDQUF3QztBQUN4QyxvQ0FBb0M7QUFFcEMsT0FBTyxDQUFDLEVBQUUsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDLE1BQVcsRUFBRSxDQUFtQjtJQUM5RCxPQUFPLENBQUMsS0FBSyxDQUFDLG9CQUFvQixFQUFFLE1BQU0sQ0FBQyxDQUFDO0FBQ2hELENBQUMsQ0FBQyxDQUFDO0FBQ0gsT0FBTyxDQUFDLEVBQUUsQ0FBQyxtQkFBbUIsRUFBRSxVQUFVLEdBQUc7SUFDekMsT0FBTyxDQUFDLEtBQUssQ0FBQyxzQkFBc0IsRUFBRSxHQUFHLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDLENBQUM7QUFDdkUsQ0FBQyxDQUFDLENBQUM7QUFFSCxtQ0FBbUM7QUFDbkMsOENBQThDO0FBQzlDLDJCQUEyQjtBQUMzQiw2QkFBNkI7QUFFN0IsMEJBQTBCO0FBQzFCLGdDQUFnQztBQUVoQyxlQUFlO0FBQ2Ysb0JBQW9CO0FBRXBCLGlDQUF5QjtBQUN6QixNQUFNLElBQUksR0FBRyxPQUFPLENBQUMsTUFBTSxDQUFDLENBQUM7QUFFN0IsSUFBSSxJQUFJLEdBQUcsZUFBTSxDQUFDLElBQUksQ0FBQztBQUN2QixJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDLGNBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO0FBQy9DLE1BQU0sQ0FBQyxFQUFFLENBQUMsV0FBVyxFQUFFO0lBQ25CLEVBQUUsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLElBQUksRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzNCLEVBQUUsQ0FBQyxTQUFTLENBQUMsR0FBRyxJQUFJLEVBQUUsRUFBRSxLQUFLLENBQUMsQ0FBQTtJQUNsQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxNQUFNLENBQUMsRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDLEdBQVU7SUFDMUIsTUFBTSxHQUFHLENBQUM7QUFDZCxDQUFDLENBQUMsQ0FBQTtBQUVGLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxFQUFFO0lBQ2hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsc0JBQXNCLEVBQUUsSUFBSSxDQUFDLENBQUM7QUFDOUMsQ0FBQyxDQUFDLENBQUMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogQEF1dGhvcjogaGVAd2hhbGVibHVlLmRlc2lnblxuICogQERhdGU6IDIwMTgtMDMtMDIgMTE6MTk6MzJcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiBNci5IZVxuICogQExhc3QgTW9kaWZpZWQgdGltZTogMjAxOS0wMi0yOCAyMjozMTowNVxuICogQGNvbnRlbnQgd2hhdCBpcyB0aGUgY29udGVudCBvZiB0aGlzIGZpbGUuICovXG5cbnJlcXVpcmUoJ2FwcC1tb2R1bGUtcGF0aCcpLmFkZFBhdGgoX19kaXJuYW1lKTtcbmltcG9ydCBmcyA9IHJlcXVpcmUoXCJmc1wiKTtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJjb25maWcvY29uZmlnXCI7XG4vLyBpbXBvcnQgeyBpbml0LCBEQiB9IGZyb20gXCJjb21tb24vZGJcIjtcbi8vIGltcG9ydCBjYWNoZSBmcm9tIFwiY29tbW9uL2NhY2hlXCI7XG5cbnByb2Nlc3Mub24oJ3VuaGFuZGxlZFJlamVjdGlvbicsIChyZWFzb246IGFueSwgcDogUHJvbWlzZUxpa2U8YW55PikgPT4ge1xuICAgIGNvbnNvbGUuZXJyb3IoXCJ1bmhhbmRsZWRSZWplY3Rpb25cIiwgcmVhc29uKTtcbn0pO1xucHJvY2Vzcy5vbigndW5jYXVnaHRFeGNlcHRpb24nLCBmdW5jdGlvbiAoZXJyKSB7XG4gICAgY29uc29sZS5lcnJvcigndW5jYXVnaHRFeGNlcHRpb249PT4nLCBlcnIuc3RhY2sgPyBlcnIuc3RhY2sgOiBlcnIpO1xufSk7XG5cbi8qIGluaXQgREIsIGltcG9ydCB0YWJsZSBtb2RlbHMuICovXG4vLyBpbml0KGNvbmZpZy5teXNxbC51cmwsIGNvbmZpZy5teXNxbC5kZWJ1Zyk7XG4vLyBpbXBvcnQgXCJzcWxNb2RlbC9pbmRleFwiO1xuLy8gREIuc3luYyh7IGZvcmNlOiBmYWxzZSB9KTtcblxuLyogaW5qZWN0IHJlZGlzIHNlcnZlci4gKi9cbi8vIGNhY2hlLmluaXQoY29uZmlnLnJlZGlzLnVybCk7XG5cbi8qIG90aGVyIGpvYiAqL1xuLy8gaW1wb3J0IFwiLi9vdGhlclwiO1xuXG5pbXBvcnQgYXBwIGZyb20gXCIuL2h0dHBcIjtcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiaHR0cFwiKTtcblxubGV0IFBPUlQgPSBjb25maWcucG9ydDtcbmxldCBzZXJ2ZXIgPSBodHRwLmNyZWF0ZVNlcnZlcihhcHAuY2FsbGJhY2soKSk7XG5zZXJ2ZXIub24oJ2xpc3RlbmluZycsIGZ1bmN0aW9uICgpIHtcbiAgICBpZiAoIS9eXFxkKyQvLnRlc3QoYCR7UE9SVH1gKSkge1xuICAgICAgICBmcy5jaG1vZFN5bmMoYCR7UE9SVH1gLCAnNzc3JylcbiAgICB9XG59KTtcblxuc2VydmVyLm9uKCdlcnJvcicsIChlcnI6IEVycm9yKSA9PiB7XG4gICAgdGhyb3cgZXJyO1xufSlcblxuc2VydmVyLmxpc3RlbihQT1JULCAoKSA9PiB7XG4gICAgY29uc29sZS5sb2coXCJodHRwIHNlcnZlciBydW5uaW5nIFwiLCBQT1JUKTtcbn0pO1xuIl19