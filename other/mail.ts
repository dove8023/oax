/*
 * @Author: he@whaleblue.design 
 * @Date: 2018-07-17 22:47:44 
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-17 23:37:34
 * @content what is the content of this file. */


var api_key = 'key-ff01039322bcd8316ac41488b0bb060c';
var DOMAIN = 'https://api.mailgun.net/v3/2f91e852d52f1c456d6a9038c42be40a.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });
import { config } from "config/config";

export default function (csvData: any) {
    var data = {
        from: 'me@samples.mailgun.org',
        to: `${config.emailAddress},postmaster@api.mailgun.net/v3/2f91e852d52f1c456d6a9038c42be40a.mailgun.org`,
        subject: 'Hello',
        text: csvData
    };
    mailgun.messages().send(data, function (error, body) {
        console.log(2222222, error)
        console.log(11111111, body);
    });
}   