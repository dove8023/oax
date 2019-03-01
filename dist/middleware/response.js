"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-06-18 09:40:43
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:23:44
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const error_1 = require("./error");
const config_1 = require("config/config");
function response(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        ctx.success = function (data) {
            ctx.body = {
                code: 0,
                msg: "ok",
                data
            };
        };
        ctx.error = function (code, msg) {
            ctx.body = {
                code: config_1.config.appID + code,
                msg: msg || error_1.default[code],
                data: null
            };
        };
        yield next();
    });
}
exports.response = response;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVzcG9uc2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9taWRkbGV3YXJlL3Jlc3BvbnNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Z0RBS2dEOzs7QUFJaEQsbUNBQWdDO0FBQ2hDLDBDQUF1QztBQUV2QyxrQkFBK0IsR0FBWSxFQUFFLElBQWM7O1FBQ3ZELEdBQUcsQ0FBQyxPQUFPLEdBQUcsVUFBVSxJQUFTO1lBQzdCLEdBQUcsQ0FBQyxJQUFJLEdBQUc7Z0JBQ1AsSUFBSSxFQUFFLENBQUM7Z0JBQ1AsR0FBRyxFQUFFLElBQUk7Z0JBQ1QsSUFBSTthQUNQLENBQUE7UUFDTCxDQUFDLENBQUE7UUFFRCxHQUFHLENBQUMsS0FBSyxHQUFHLFVBQVUsSUFBWSxFQUFFLEdBQVk7WUFDNUMsR0FBRyxDQUFDLElBQUksR0FBRztnQkFDUCxJQUFJLEVBQUUsZUFBTSxDQUFDLEtBQUssR0FBRyxJQUFJO2dCQUN6QixHQUFHLEVBQUUsR0FBRyxJQUFJLGVBQVMsQ0FBQyxJQUFJLENBQUM7Z0JBQzNCLElBQUksRUFBRSxJQUFJO2FBQ2IsQ0FBQTtRQUNMLENBQUMsQ0FBQTtRQUVELE1BQU0sSUFBSSxFQUFFLENBQUM7SUFDakIsQ0FBQztDQUFBO0FBbEJELDRCQWtCQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBoZUB3aGFsZWJsdWUuZGVzaWduXG4gKiBARGF0ZTogMjAxOC0wNi0xOCAwOTo0MDo0M1xuICogQExhc3QgTW9kaWZpZWQgYnk6IE1yLkhlXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTE3IDIyOjIzOjQ0XG4gKiBAY29udGVudCB3aGF0IGlzIHRoZSBjb250ZW50IG9mIHRoaXMgZmlsZS4gKi9cblxuXG5pbXBvcnQgeyBDb250ZXh0IH0gZnJvbSAna29hJztcbmltcG9ydCBlcnJvckNvZGUgZnJvbSBcIi4vZXJyb3JcIjtcbmltcG9ydCB7IGNvbmZpZyB9IGZyb20gXCJjb25maWcvY29uZmlnXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiByZXNwb25zZShjdHg6IENvbnRleHQsIG5leHQ6IEZ1bmN0aW9uKSB7XG4gICAgY3R4LnN1Y2Nlc3MgPSBmdW5jdGlvbiAoZGF0YTogYW55KSB7XG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgY29kZTogMCxcbiAgICAgICAgICAgIG1zZzogXCJva1wiLFxuICAgICAgICAgICAgZGF0YVxuICAgICAgICB9XG4gICAgfVxuXG4gICAgY3R4LmVycm9yID0gZnVuY3Rpb24gKGNvZGU6IG51bWJlciwgbXNnPzogc3RyaW5nKSB7XG4gICAgICAgIGN0eC5ib2R5ID0ge1xuICAgICAgICAgICAgY29kZTogY29uZmlnLmFwcElEICsgY29kZSxcbiAgICAgICAgICAgIG1zZzogbXNnIHx8IGVycm9yQ29kZVtjb2RlXSxcbiAgICAgICAgICAgIGRhdGE6IG51bGxcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IG5leHQoKTtcbn1cbiJdfQ==