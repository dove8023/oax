/*
 * @Author: he@whaleblue.design
 * @Date: 2018-06-18 09:44:44
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:22:51
 * @content what is the content of this file. */



let errorCode: { [index: string]: any } = {
    "101": "Verification codeId does not exist",
    "102": "Verification codeId expires，please refresh code",

    "106": "Verification code is not correct",
    "107": "Verification code expires",

    "110": "Email has been registered",
    "500": "Parameter is wrong",
    "404": "Resources is not found"
}

export default errorCode;
