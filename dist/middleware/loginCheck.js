"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-06-02 18:03:36
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:23:28
 * @content:
 */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const cache_1 = require("common/cache");
let session = require('continuation-local-storage').createNamespace("session");
let allowCrossUrls = ["/open", "/favicon.ico"];
function LoginCheck(ctx, next) {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let url = ctx.url;
        let urlCheck = allowCrossUrls.some((value) => {
            return url.indexOf(value) > -1;
        });
        if (urlCheck) {
            return next();
        }
        let { token } = ctx.header;
        if (!token) {
            return ctx.error(100);
        }
        let loginInfo = yield cache_1.default.read(token);
        if (!loginInfo) {
            return ctx.error(101);
        }
        return new Promise((resolve, reject) => {
            session.run(() => tslib_1.__awaiter(this, void 0, void 0, function* () {
                session.set("session", loginInfo);
                resolve(next());
            }));
        });
    });
}
exports.LoginCheck = LoginCheck;
/*
await Auth.loginCheck(ctx);
    return new Promise((resolve, reject) => {
        session.run(async () => {
            if (Object.keys(ctx.state).length) {
                session.set("session", ctx.state.session);
            }
            resolve(next());
        });
    }); */
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibG9naW5DaGVjay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL21pZGRsZXdhcmUvbG9naW5DaGVjay50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7OztHQU1HOzs7QUFHSCx3Q0FBaUM7QUFDakMsSUFBSSxPQUFPLEdBQUcsT0FBTyxDQUFDLDRCQUE0QixDQUFDLENBQUMsZUFBZSxDQUFDLFNBQVMsQ0FBQyxDQUFDO0FBRy9FLElBQUksY0FBYyxHQUFHLENBQUMsT0FBTyxFQUFFLGNBQWMsQ0FBQyxDQUFDO0FBRy9DLG9CQUFpQyxHQUFnQixFQUFFLElBQWM7O1FBQzdELElBQUksR0FBRyxHQUFHLEdBQUcsQ0FBQyxHQUFHLENBQUM7UUFDbEIsSUFBSSxRQUFRLEdBQUcsY0FBYyxDQUFDLElBQUksQ0FBQyxDQUFDLEtBQUs7WUFDckMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUM7UUFDbkMsQ0FBQyxDQUFDLENBQUM7UUFDSCxFQUFFLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ1gsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO1FBQ2xCLENBQUM7UUFFRCxJQUFJLEVBQUUsS0FBSyxFQUFFLEdBQUcsR0FBRyxDQUFDLE1BQU0sQ0FBQztRQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7WUFDVCxNQUFNLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsSUFBSSxTQUFTLEdBQUcsTUFBTSxlQUFLLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ3hDLEVBQUUsQ0FBQyxDQUFDLENBQUMsU0FBUyxDQUFDLENBQUMsQ0FBQztZQUNiLE1BQU0sQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxDQUFBO1FBQ3pCLENBQUM7UUFFRCxNQUFNLENBQUMsSUFBSSxPQUFPLENBQUMsQ0FBQyxPQUFPLEVBQUUsTUFBTTtZQUMvQixPQUFPLENBQUMsR0FBRyxDQUFDO2dCQUNSLE9BQU8sQ0FBQyxHQUFHLENBQUMsU0FBUyxFQUFFLFNBQVMsQ0FBQyxDQUFDO2dCQUNsQyxPQUFPLENBQUMsSUFBSSxFQUFFLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUEsQ0FBQyxDQUFBO1FBQ04sQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0NBQUE7QUF4QkQsZ0NBd0JDO0FBRUQ7Ozs7Ozs7OztVQVNVIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ25cbiAqIEBEYXRlOiAyMDE4LTA2LTAyIDE4OjAzOjM2XG4gKiBATGFzdCBNb2RpZmllZCBieTogTXIuSGVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDctMTcgMjI6MjM6MjhcbiAqIEBjb250ZW50OlxuICovXG5cbmltcG9ydCAqIGFzIEtvYSBmcm9tIFwia29hXCI7XG5pbXBvcnQgY2FjaGUgZnJvbSBcImNvbW1vbi9jYWNoZVwiO1xubGV0IHNlc3Npb24gPSByZXF1aXJlKCdjb250aW51YXRpb24tbG9jYWwtc3RvcmFnZScpLmNyZWF0ZU5hbWVzcGFjZShcInNlc3Npb25cIik7XG5cblxubGV0IGFsbG93Q3Jvc3NVcmxzID0gW1wiL29wZW5cIiwgXCIvZmF2aWNvbi5pY29cIl07XG5cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIExvZ2luQ2hlY2soY3R4OiBLb2EuQ29udGV4dCwgbmV4dDogRnVuY3Rpb24pOiBQcm9taXNlPGFueT4ge1xuICAgIGxldCB1cmwgPSBjdHgudXJsO1xuICAgIGxldCB1cmxDaGVjayA9IGFsbG93Q3Jvc3NVcmxzLnNvbWUoKHZhbHVlKSA9PiB7XG4gICAgICAgIHJldHVybiB1cmwuaW5kZXhPZih2YWx1ZSkgPiAtMTtcbiAgICB9KTtcbiAgICBpZiAodXJsQ2hlY2spIHtcbiAgICAgICAgcmV0dXJuIG5leHQoKTtcbiAgICB9XG5cbiAgICBsZXQgeyB0b2tlbiB9ID0gY3R4LmhlYWRlcjtcbiAgICBpZiAoIXRva2VuKSB7XG4gICAgICAgIHJldHVybiBjdHguZXJyb3IoMTAwKTtcbiAgICB9XG4gICAgbGV0IGxvZ2luSW5mbyA9IGF3YWl0IGNhY2hlLnJlYWQodG9rZW4pO1xuICAgIGlmICghbG9naW5JbmZvKSB7XG4gICAgICAgIHJldHVybiBjdHguZXJyb3IoMTAxKVxuICAgIH1cblxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgIHNlc3Npb24ucnVuKGFzeW5jICgpID0+IHtcbiAgICAgICAgICAgIHNlc3Npb24uc2V0KFwic2Vzc2lvblwiLCBsb2dpbkluZm8pO1xuICAgICAgICAgICAgcmVzb2x2ZShuZXh0KCkpO1xuICAgICAgICB9KVxuICAgIH0pXG59XG5cbi8qXG5hd2FpdCBBdXRoLmxvZ2luQ2hlY2soY3R4KTtcbiAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICBzZXNzaW9uLnJ1bihhc3luYyAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoT2JqZWN0LmtleXMoY3R4LnN0YXRlKS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzZXNzaW9uLnNldChcInNlc3Npb25cIiwgY3R4LnN0YXRlLnNlc3Npb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzb2x2ZShuZXh0KCkpO1xuICAgICAgICB9KTtcbiAgICB9KTsgKi9cbiJdfQ==