"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-13 23:53:15
 * @Last Modified by: Mr.He
 * @Last Modified time: 2019-02-28 22:35:22
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const Router = require("koa-router");
const captcha = require("trek-captcha");
let router = new Router();
router.get("/hy", (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    ctx.success({
        code: 0,
        msg: "hello",
        data: "good man"
    });
}));
router.get("/hello", (ctx) => tslib_1.__awaiter(this, void 0, void 0, function* () {
    console.log(ctx.request.body);
    ctx.success({
        code: 0,
        msg: "hello, api hello",
        data: "good man, good man."
    });
}));
exports.default = router;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcmMvaW5kZXgudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztnREFLZ0Q7OztBQUdoRCxxQ0FBc0M7QUFLdEMsTUFBTSxPQUFPLEdBQUcsT0FBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO0FBSXhDLElBQUksTUFBTSxHQUFHLElBQUksTUFBTSxFQUFFLENBQUM7QUFHMUIsTUFBTSxDQUFDLEdBQUcsQ0FBQyxLQUFLLEVBQUUsQ0FBTyxHQUFHO0lBQ3hCLE9BQU8sQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQTtJQUM3QixHQUFHLENBQUMsT0FBTyxDQUFDO1FBQ1IsSUFBSSxFQUFFLENBQUM7UUFDUCxHQUFHLEVBQUUsT0FBTztRQUNaLElBQUksRUFBRSxVQUFVO0tBQ25CLENBQUMsQ0FBQTtBQUNOLENBQUMsQ0FBQSxDQUFDLENBQUE7QUFFRixNQUFNLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRSxDQUFPLEdBQUc7SUFDM0IsT0FBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFBO0lBQzdCLEdBQUcsQ0FBQyxPQUFPLENBQUM7UUFDUixJQUFJLEVBQUUsQ0FBQztRQUNQLEdBQUcsRUFBRSxrQkFBa0I7UUFDdkIsSUFBSSxFQUFFLHFCQUFxQjtLQUM5QixDQUFDLENBQUE7QUFDTixDQUFDLENBQUEsQ0FBQyxDQUFBO0FBRUYsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ25cbiAqIEBEYXRlOiAyMDE4LTA3LTEzIDIzOjUzOjE1XG4gKiBATGFzdCBNb2RpZmllZCBieTogTXIuSGVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTktMDItMjggMjI6MzU6MjJcbiAqIEBjb250ZW50IHdoYXQgaXMgdGhlIGNvbnRlbnQgb2YgdGhpcyBmaWxlLiAqL1xuXG5cbmltcG9ydCBSb3V0ZXIgPSByZXF1aXJlKFwia29hLXJvdXRlclwiKTtcbmltcG9ydCB7IGJvZHlQYXJhbXNDaGVjayB9IGZyb20gXCJjb21tb24vdXRpbHNcIjtcbmltcG9ydCAqIGFzIHV1aWQgZnJvbSBcInV1aWRcIjtcbmltcG9ydCBjYWNoZSBmcm9tIFwiY29tbW9uL2NhY2hlXCI7XG5pbXBvcnQgeyBjb25maWcgfSBmcm9tIFwiY29uZmlnL2NvbmZpZ1wiO1xuY29uc3QgY2FwdGNoYSA9IHJlcXVpcmUoXCJ0cmVrLWNhcHRjaGFcIik7XG4vLyBpbXBvcnQgTW9kZWxzIGZyb20gXCJzcWxNb2RlbFwiO1xuaW1wb3J0ICogYXMgdiBmcm9tIFwidmFsaWRhdG9yXCI7XG5cbmxldCByb3V0ZXIgPSBuZXcgUm91dGVyKCk7XG5cblxucm91dGVyLmdldChcIi9oeVwiLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc29sZS5sb2coY3R4LnJlcXVlc3QuYm9keSlcbiAgICBjdHguc3VjY2Vzcyh7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIG1zZzogXCJoZWxsb1wiLFxuICAgICAgICBkYXRhOiBcImdvb2QgbWFuXCJcbiAgICB9KVxufSlcblxucm91dGVyLmdldChcIi9oZWxsb1wiLCBhc3luYyAoY3R4KSA9PiB7XG4gICAgY29uc29sZS5sb2coY3R4LnJlcXVlc3QuYm9keSlcbiAgICBjdHguc3VjY2Vzcyh7XG4gICAgICAgIGNvZGU6IDAsXG4gICAgICAgIG1zZzogXCJoZWxsbywgYXBpIGhlbGxvXCIsXG4gICAgICAgIGRhdGE6IFwiZ29vZCBtYW4sIGdvb2QgbWFuLlwiXG4gICAgfSlcbn0pXG5cbmV4cG9ydCBkZWZhdWx0IHJvdXRlcjtcbiJdfQ==