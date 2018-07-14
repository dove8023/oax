/*
 * @Author: Mr.He 
 * @Date: 2018-07-14 22:40:03 
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-14 22:49:20
 * @content what is the content of this file. */

const path = require("path");

require('ts-node').register({ fast: true });
require('app-module-path').addPath(path.resolve(__dirname, "../"));

require("./main")