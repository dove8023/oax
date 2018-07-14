# oax project

## 构建过程
```js
    npm install
    npm run build

    /* 配置 config/config.json */
    
```



# API 接口部分
### 获取 图片验证码ID codeID
`GET /api/v1/captchaid`


**Parameters:**

| Name | Type | Mandatory | Description |
| ---- | ---- | --------- | ----------- |

**Response:**
```js
{
    "code": 0,
    "msg": "ok",
    "data": {
        codeId: string
    }
}
```


### 获取 验证码图片
`GET /api/v1/captchaimg/:id`


**Parameters:**

| Name         | Type   | Mandatory | Description |
| ------------ | ------ | --------- | ----------- |
| 图片验证码ID | String | YES       | /:id        |

**Response:**
```js
// 获取到的是一张gif图片
// <img src="http://localhost/api/v1/captchaimg/codeId">
```


### 创建users
`POST /api/v1/users`


**Parameters:**

| Name   | Type   | Mandatory | Description    |
| ------ | ------ | --------- | -------------- |
| code   | String | YES       | 用户输入code   |
| codeId | String | YES       | 接口返回codeId |
| ...    | String | YES       | 其它标准参数   |

**Response:**
```js
    {
        code: 0,
        msg: "ok",
        data: {

        }
    }
```