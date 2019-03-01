"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-06-18 09:44:44
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:22:51
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
let errorCode = {
    "101": "Verification codeId does not exist",
    "102": "Verification codeId expires，please refresh code",
    "106": "Verification code is not correct",
    "107": "Verification code expires",
    "110": "Email has been registered",
    "500": "Parameter is wrong",
    "404": "Resources is not found"
};
exports.default = errorCode;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZXJyb3IuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9taWRkbGV3YXJlL2Vycm9yLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTs7Ozs7Z0RBS2dEOztBQUloRCxJQUFJLFNBQVMsR0FBNkI7SUFDdEMsS0FBSyxFQUFFLG9DQUFvQztJQUMzQyxLQUFLLEVBQUUsaURBQWlEO0lBRXhELEtBQUssRUFBRSxrQ0FBa0M7SUFDekMsS0FBSyxFQUFFLDJCQUEyQjtJQUVsQyxLQUFLLEVBQUUsMkJBQTJCO0lBQ2xDLEtBQUssRUFBRSxvQkFBb0I7SUFDM0IsS0FBSyxFQUFFLHdCQUF3QjtDQUNsQyxDQUFBO0FBRUQsa0JBQWUsU0FBUyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ25cbiAqIEBEYXRlOiAyMDE4LTA2LTE4IDA5OjQ0OjQ0XG4gKiBATGFzdCBNb2RpZmllZCBieTogTXIuSGVcbiAqIEBMYXN0IE1vZGlmaWVkIHRpbWU6IDIwMTgtMDctMTcgMjI6MjI6NTFcbiAqIEBjb250ZW50IHdoYXQgaXMgdGhlIGNvbnRlbnQgb2YgdGhpcyBmaWxlLiAqL1xuXG5cblxubGV0IGVycm9yQ29kZTogeyBbaW5kZXg6IHN0cmluZ106IGFueSB9ID0ge1xuICAgIFwiMTAxXCI6IFwiVmVyaWZpY2F0aW9uIGNvZGVJZCBkb2VzIG5vdCBleGlzdFwiLFxuICAgIFwiMTAyXCI6IFwiVmVyaWZpY2F0aW9uIGNvZGVJZCBleHBpcmVz77yMcGxlYXNlIHJlZnJlc2ggY29kZVwiLFxuXG4gICAgXCIxMDZcIjogXCJWZXJpZmljYXRpb24gY29kZSBpcyBub3QgY29ycmVjdFwiLFxuICAgIFwiMTA3XCI6IFwiVmVyaWZpY2F0aW9uIGNvZGUgZXhwaXJlc1wiLFxuXG4gICAgXCIxMTBcIjogXCJFbWFpbCBoYXMgYmVlbiByZWdpc3RlcmVkXCIsXG4gICAgXCI1MDBcIjogXCJQYXJhbWV0ZXIgaXMgd3JvbmdcIixcbiAgICBcIjQwNFwiOiBcIlJlc291cmNlcyBpcyBub3QgZm91bmRcIlxufVxuXG5leHBvcnQgZGVmYXVsdCBlcnJvckNvZGU7XG4iXX0=