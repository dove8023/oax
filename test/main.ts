/*
 * @Author: he@whaleblue.design
 * @Date: 2018-07-14 22:46:40
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-15 23:08:59
 * @content what is the content of this file. */

import fs = require("fs");
import {config}from "config/config";
import { init, DB } from "common/db";
import cache from "common/cache";
import * as _ from "lodash";

/* init DB, import table models. */
init(config.mysql.url, config.mysql.debug);
import "sqlModel/index";
DB.sync({ force: false });

/* inject redis server. */
cache.init(config.redis.url);

import app from "../http";
const superkoa = require('superkoa')
const bootup = superkoa(app);
const HTTP_OK = 200;
const HTTP_ERR = 500;


import * as assert from "assert";
describe('#the image captcha test', function () {

    let codeIdBody, codeIdData;
    before((async () => {
        let result = await bootup.get("/api/v1/captchaid").expect(HTTP_OK);
        codeIdBody = result.body;
        codeIdData = codeIdBody.data;
    }));

    it("get the code ID", (done) => {
        assert.equal(codeIdBody.code, 0);
        assert.ok(codeIdData.codeId);
        done();
    });

    it("get the captcha picture", async () => {
        let result = await bootup.get("/api/v1/captchaimg/" + codeIdData.codeId).expect(HTTP_OK);
        assert.equal(result.headers["content-type"], "image/gif");
    });
});



describe('#post user', function () {

    let codeId, code, data;
    before((async () => {
        let result = await bootup.get("/api/v1/captchaid").expect(HTTP_OK);
        codeId = result.body.data.codeId;
        let imgresult = await bootup.get("/api/v1/captchaimg/" + codeId).expect(HTTP_OK);
        assert.equal(imgresult.headers["content-type"], "image/gif");

        let redisCache = await cache.read(codeId);
        code = redisCache.code;

        data = {
            "email": Math.random() + "abc123@163.com",
            "address": ["dfdf", "dfdfdf", "dfdfdfjdljc", "aa", "b"],
            "twtterName": "ddf",
            "radditName": "dfdf",
            "facebookName": "ok",
            "firstName": "o122",
            "lastName": "last",
            "country": "country12",
            "code": code,
            "codeId": codeId
        }
    }));


    it("the params require check", async () => {

        let theData = _.cloneDeep(data);
        delete theData.twtterName;
        let result = await bootup.post("/api/v1/users")
            .send(theData)
            .expect(HTTP_OK);
        assert.notEqual(result.body.code, 0);
    });

    it("the params address check", async () => {
        let theData = _.cloneDeep(data);
        theData.address = [];
        let result = await bootup.post("/api/v1/users")
            .send(theData)
            .expect(HTTP_OK);
        assert.notEqual(result.body.code, 0);

        theData.address = ["1", "2", "3", "4", "5", "6"];
        let result2 = await bootup.post("/api/v1/users")
            .send(theData)
            .expect(HTTP_OK);
        assert.notEqual(result.body.code, 0);

    });

    it("the user create success", async () => {
        let result = await bootup.post("/api/v1/users")
            .send(data)
            .expect(HTTP_OK);
        assert.equal(result.body.code, 0);
    });

    it("the same code can't be post again.", async () => {
        data.email = "dfdfdfdfdfdfdfdf@qq.com";
        let result = await bootup.post("/api/v1/users")
            .send(data)
            .expect(HTTP_OK);

        assert.notEqual(result.body.code, 0);
    })
});
