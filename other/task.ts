/*
 * @Author: Mr.He 
 * @Date: 2018-07-17 20:42:10 
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-17 23:43:09
 * @content what is the content of this file. */


import Models from "../sqlModel";
import * as moment from "moment";
import { Parser } from "json2csv";
import * as fs from "fs";
import mail from "./mail";

export async function getRegisterUser() {
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

    transToCsv(users)
}

function transToCsv(data) {
    const fields = ["id", "twtterName", "radditName", "facebookName", "firstName", "lastName", "email", "country", "address"];

    const json2csvParser = new Parser({ fields });
    const csv = json2csvParser.parse(data);


    /*  let writeStream = fs.createWriteStream(__dirname + "/text.csv");
     writeStream.write(csv); */

    // send email
    mail(csv);
}