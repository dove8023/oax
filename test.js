const fs = require("fs");
const captcha = require("trek-captcha")

async function run() {
    const { token, buffer } = await captcha();
    console.log(token, buffer);

    fs.createWriteStream("a.gif").on("finish", () => {
        console.log(token)
    }).end(buffer);

}


run();