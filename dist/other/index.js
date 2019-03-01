"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-17 22:46:56
 * @Last Modified by:   he@whaleblue.design
 * @Last Modified time: 2018-07-17 22:46:56
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const schedule = require("node-schedule");
const task_1 = require("./task");
schedule.scheduleJob({ /* hour: 7, minute: 30*/ second: 1 }, (fireDate) => {
    task_1.getRegisterUser();
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9vdGhlci9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O2dEQUtnRDs7QUFFaEQsMENBQTBDO0FBQzFDLGlDQUF3QztBQUV4QyxRQUFRLENBQUMsV0FBVyxDQUFDLEVBQUUsd0JBQXdCLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFLENBQUMsUUFBUTtJQUVsRSxzQkFBZSxFQUFFLENBQUM7SUFDbEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyxrQ0FBa0MsR0FBRyxRQUFRLEdBQUcsd0JBQXdCLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxDQUFDO0FBQ3ZHLENBQUMsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLypcbiAqIEBBdXRob3I6IGhlQHdoYWxlYmx1ZS5kZXNpZ24gXG4gKiBARGF0ZTogMjAxOC0wNy0xNyAyMjo0Njo1NiBcbiAqIEBMYXN0IE1vZGlmaWVkIGJ5OiAgIGhlQHdoYWxlYmx1ZS5kZXNpZ24gXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTE3IDIyOjQ2OjU2IFxuICogQGNvbnRlbnQgd2hhdCBpcyB0aGUgY29udGVudCBvZiB0aGlzIGZpbGUuICovXG5cbmltcG9ydCAqIGFzIHNjaGVkdWxlIGZyb20gXCJub2RlLXNjaGVkdWxlXCI7XG5pbXBvcnQgeyBnZXRSZWdpc3RlclVzZXIgfSBmcm9tIFwiLi90YXNrXCJcblxuc2NoZWR1bGUuc2NoZWR1bGVKb2IoeyAvKiBob3VyOiA3LCBtaW51dGU6IDMwKi8gc2Vjb25kOiAxIH0sIChmaXJlRGF0ZSkgPT4ge1xuXG4gICAgZ2V0UmVnaXN0ZXJVc2VyKCk7XG4gICAgY29uc29sZS5sb2coJ1RoaXMgam9iIHdhcyBzdXBwb3NlZCB0byBydW4gYXQgJyArIGZpcmVEYXRlICsgJywgYnV0IGFjdHVhbGx5IHJhbiBhdCAnICsgbmV3IERhdGUoKSk7XG59KTsiXX0=