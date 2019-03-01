"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-17 23:48:10
 * @Last Modified by:   he@whaleblue.design
 * @Last Modified time: 2018-07-17 23:48:10
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const tslib_1 = require("tslib");
const sqlModel_1 = require("../sqlModel");
const moment = require("moment");
const json2csv_1 = require("json2csv");
const mail_1 = require("./mail");
function getRegisterUser() {
    return tslib_1.__awaiter(this, void 0, void 0, function* () {
        let startTime = moment().add(-1, 'day').startOf("day").format();
        let endTime = moment().startOf("day").format();
        let users = yield sqlModel_1.default.users.findAll({
            where: {
                created_at: {
                    $gte: startTime,
                    $lte: endTime
                }
            }
        });
        transToCsv(users);
    });
}
exports.getRegisterUser = getRegisterUser;
function transToCsv(data) {
    const fields = ["id", "twtterName", "radditName", "facebookName", "firstName", "lastName", "email", "country", "address"];
    const json2csvParser = new json2csv_1.Parser({ fields });
    const csv = json2csvParser.parse(data);
    /*  let writeStream = fs.createWriteStream(__dirname + "/text.csv");
     writeStream.write(csv); */
    // send email
    mail_1.default(csv);
}
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFzay5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL290aGVyL3Rhc2sudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBOzs7OztnREFLZ0Q7OztBQUloRCwwQ0FBaUM7QUFDakMsaUNBQWlDO0FBQ2pDLHVDQUFrQztBQUVsQyxpQ0FBMEI7QUFFMUI7O1FBQ0ksSUFBSSxTQUFTLEdBQUcsTUFBTSxFQUFFLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxFQUFFLEtBQUssQ0FBQyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoRSxJQUFJLE9BQU8sR0FBRyxNQUFNLEVBQUUsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDL0MsSUFBSSxLQUFLLEdBQUcsTUFBTSxrQkFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLENBQUM7WUFDbkMsS0FBSyxFQUFFO2dCQUNILFVBQVUsRUFBRTtvQkFDUixJQUFJLEVBQUUsU0FBUztvQkFDZixJQUFJLEVBQUUsT0FBTztpQkFDaEI7YUFDSjtTQUNKLENBQUMsQ0FBQztRQUVILFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQTtJQUNyQixDQUFDO0NBQUE7QUFiRCwwQ0FhQztBQUVELG9CQUFvQixJQUFJO0lBQ3BCLE1BQU0sTUFBTSxHQUFHLENBQUMsSUFBSSxFQUFFLFlBQVksRUFBRSxZQUFZLEVBQUUsY0FBYyxFQUFFLFdBQVcsRUFBRSxVQUFVLEVBQUUsT0FBTyxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztJQUUxSCxNQUFNLGNBQWMsR0FBRyxJQUFJLGlCQUFNLENBQUMsRUFBRSxNQUFNLEVBQUUsQ0FBQyxDQUFDO0lBQzlDLE1BQU0sR0FBRyxHQUFHLGNBQWMsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLENBQUM7SUFHdkM7K0JBQzJCO0lBRTNCLGFBQWE7SUFDYixjQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7QUFDZCxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ24gXG4gKiBARGF0ZTogMjAxOC0wNy0xNyAyMzo0ODoxMCBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGhlQHdoYWxlYmx1ZS5kZXNpZ24gXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTE3IDIzOjQ4OjEwIFxuICogQGNvbnRlbnQgd2hhdCBpcyB0aGUgY29udGVudCBvZiB0aGlzIGZpbGUuICovXG5cblxuXG5pbXBvcnQgTW9kZWxzIGZyb20gXCIuLi9zcWxNb2RlbFwiO1xuaW1wb3J0ICogYXMgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCB7IFBhcnNlciB9IGZyb20gXCJqc29uMmNzdlwiO1xuaW1wb3J0ICogYXMgZnMgZnJvbSBcImZzXCI7XG5pbXBvcnQgbWFpbCBmcm9tIFwiLi9tYWlsXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWdpc3RlclVzZXIoKSB7XG4gICAgbGV0IHN0YXJ0VGltZSA9IG1vbWVudCgpLmFkZCgtMSwgJ2RheScpLnN0YXJ0T2YoXCJkYXlcIikuZm9ybWF0KCk7XG4gICAgbGV0IGVuZFRpbWUgPSBtb21lbnQoKS5zdGFydE9mKFwiZGF5XCIpLmZvcm1hdCgpO1xuICAgIGxldCB1c2VycyA9IGF3YWl0IE1vZGVscy51c2Vycy5maW5kQWxsKHtcbiAgICAgICAgd2hlcmU6IHtcbiAgICAgICAgICAgIGNyZWF0ZWRfYXQ6IHtcbiAgICAgICAgICAgICAgICAkZ3RlOiBzdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgJGx0ZTogZW5kVGltZVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICB0cmFuc1RvQ3N2KHVzZXJzKVxufVxuXG5mdW5jdGlvbiB0cmFuc1RvQ3N2KGRhdGEpIHtcbiAgICBjb25zdCBmaWVsZHMgPSBbXCJpZFwiLCBcInR3dHRlck5hbWVcIiwgXCJyYWRkaXROYW1lXCIsIFwiZmFjZWJvb2tOYW1lXCIsIFwiZmlyc3ROYW1lXCIsIFwibGFzdE5hbWVcIiwgXCJlbWFpbFwiLCBcImNvdW50cnlcIiwgXCJhZGRyZXNzXCJdO1xuXG4gICAgY29uc3QganNvbjJjc3ZQYXJzZXIgPSBuZXcgUGFyc2VyKHsgZmllbGRzIH0pO1xuICAgIGNvbnN0IGNzdiA9IGpzb24yY3N2UGFyc2VyLnBhcnNlKGRhdGEpO1xuXG5cbiAgICAvKiAgbGV0IHdyaXRlU3RyZWFtID0gZnMuY3JlYXRlV3JpdGVTdHJlYW0oX19kaXJuYW1lICsgXCIvdGV4dC5jc3ZcIik7XG4gICAgIHdyaXRlU3RyZWFtLndyaXRlKGNzdik7ICovXG5cbiAgICAvLyBzZW5kIGVtYWlsXG4gICAgbWFpbChjc3YpO1xufSJdfQ==