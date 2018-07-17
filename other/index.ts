/*
 * @Author: he@whaleblue.design 
 * @Date: 2018-07-17 22:46:56 
 * @Last Modified by:   he@whaleblue.design 
 * @Last Modified time: 2018-07-17 22:46:56 
 * @content what is the content of this file. */

import * as schedule from "node-schedule";
import "./task"

schedule.scheduleJob({ /* hour: 7, minute: 30*/ second: 1 }, (fireDate) => {
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});