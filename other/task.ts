/*
 * @Author: Mr.He 
 * @Date: 2018-07-17 20:42:10 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 21:32:33
 * @content what is the content of this file. */


import Models from "../sqlModel";
import * as moment from "moment";
import { Parser } from "json2csv";
import * as fs from "fs";

let startTime = moment().add(-1, 'day').startOf("day");
console.log(startTime.format())


async function getRegisterUser() {
    let startTime = moment().add(-1, 'day').startOf("day").format();
    let endTime = moment().startOf("day").format();
    let users = await Models.users.findAll({
        where: {
            created_at: {
                $gte: startTime,
                $lte: endTime
            }
        }
    });
    // for (let item of users) {
    //     console.log(item.toJSON());

    // }

    transToCsv(users)
}

function transToCsv(data) {
    const fields = ["id", "twtterName", "radditName", "facebookName", "firstName", "lastName", "email", "country", "address"];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);


    console.log(csv);
    let writeStream = fs.createWriteStream(__dirname + "/text.csv");
    writeStream.write(csv);
    console.log(writeStream.path)
    // writeStream.
}


getRegisterUser()