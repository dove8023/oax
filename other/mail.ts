/*
 * @Author: he@whaleblue.design 
 * @Date: 2018-07-17 22:47:44 
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-17 22:56:47
 * @content what is the content of this file. */


var mailgun = require("mailgun-js");
var api_key = 'key-ff01039322bcd8316ac41488b0bb060c';
var DOMAIN = 'smtp.mailgun.org';
var mailgun = require('mailgun-js')({ apiKey: api_key, domain: DOMAIN });

var data = {
    from: '616082046@qq.com',
    to: 'hexisen1991@gmail.com, postmaster@sandboxfca7461afbd94d52be402718193e3c98.mailgun.org',
    subject: 'Hello',
    text: 'Testing some Mailgun awesomness!'
};

mailgun.messages().send(data, function (error, body) {
    console.log(body);
});
