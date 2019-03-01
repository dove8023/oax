"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-01-22 17:40:12
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:23:54
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const path = require("path");
const utils_1 = require("common/utils");
let Models = {};
utils_1.loadTest(path.join(__dirname, "./"), (model) => {
    if (model.default && model.default.name) {
        Models[model.default.name] = model.default;
    }
});
exports.default = Models;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9zcWxNb2RlbC9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O2dEQUtnRDs7QUFFaEQsNkJBQTZCO0FBQzdCLHdDQUF3QztBQUV4QyxJQUFJLE1BQU0sR0FBNkIsRUFBRSxDQUFDO0FBRTFDLGdCQUFRLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsSUFBSSxDQUFDLEVBQUUsQ0FBQyxLQUFVO0lBQzVDLEVBQUUsQ0FBQyxDQUFDLEtBQUssQ0FBQyxPQUFPLElBQUksS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLEtBQUssQ0FBQyxPQUFPLENBQUM7SUFDL0MsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsa0JBQWUsTUFBTSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ25cbiAqIEBEYXRlOiAyMDE4LTAxLTIyIDE3OjQwOjEyXG4gKiBATGFzdCBNb2RpZmllZCBieTogTXIuSGVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDctMTcgMjI6MjM6NTRcbiAqIEBjb250ZW50IHdoYXQgaXMgdGhlIGNvbnRlbnQgb2YgdGhpcyBmaWxlLiAqL1xuXG5pbXBvcnQgKiBhcyBwYXRoIGZyb20gXCJwYXRoXCI7XG5pbXBvcnQgeyBsb2FkVGVzdCB9IGZyb20gXCJjb21tb24vdXRpbHNcIjtcblxubGV0IE1vZGVsczogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge307XG5cbmxvYWRUZXN0KHBhdGguam9pbihfX2Rpcm5hbWUsIFwiLi9cIiksIChtb2RlbDogYW55KSA9PiB7XG4gICAgaWYgKG1vZGVsLmRlZmF1bHQgJiYgbW9kZWwuZGVmYXVsdC5uYW1lKSB7XG4gICAgICAgIE1vZGVsc1ttb2RlbC5kZWZhdWx0Lm5hbWVdID0gbW9kZWwuZGVmYXVsdDtcbiAgICB9XG59KTtcblxuZXhwb3J0IGRlZmF1bHQgTW9kZWxzO1xuIl19