/*
 * @Author: Mr.He 
 * @Date: 2018-07-17 20:30:19 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 20:48:05
 * @content what is the content of this file. */

import * as schedule from "node-schedule";
import "./task"

schedule.scheduleJob({ /* hour: 7, minute: 30*/ second: 1 }, (fireDate) => {
    console.log('This job was supposed to run at ' + fireDate + ', but actually ran at ' + new Date());
});