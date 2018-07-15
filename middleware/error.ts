/*
 * @Author: Mr.He 
 * @Date: 2018-06-18 09:44:44 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-15 22:44:51
 * @content what is the content of this file. */



let errorCode: { [index: string]: any } = {
    "101": "codeId 不存在",
    "102": "codeId 已过期，请重新请求 codeId",

    "106": "code 不正确",
    "107": "code 已过期",

    "110": "email 已注册",
    "500": "请求参数错误",
    "404": "资源不存在"
}

export default errorCode;