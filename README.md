# oax project

## how to build
```js
    config.ts
    npm install
    npm run build
```

## how to test
```js
    npx mocha test --exit
```
# API 
### Retrieve Captcha ID codeID
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


<<<<<<< HEAD
### 获取 验证码图片
=======
### Retrieve captcha
>>>>>>> 4d35167a0e6555dbda1e81226b0e9cd9983d5d90
`GET /api/v1/captchaimg/:id`


**Parameters:**

| Name | Type | Mandatory | Description |
| ---- | ---- | --------- | ----------- |
<<<<<<< HEAD
| 图片验证码ID | String | YES       | /:id        |

**Response:**
```js
// 获取到的是一张gif图片
=======
| codeID | String | YES       | /:id        |

**Response:**
```js
// response is a gif  
>>>>>>> 4d35167a0e6555dbda1e81226b0e9cd9983d5d90
// <img src="http://localhost/api/v1/captchaimg/codeId">
```


<<<<<<< HEAD
### 创建users
=======
### create users
>>>>>>> 4d35167a0e6555dbda1e81226b0e9cd9983d5d90
`POST /api/v1/users`


**Parameters:**

| Name | Type | Mandatory | Description |
| ---- | ---- | --------- | ----------- |
<<<<<<< HEAD
| code   | String | YES       | 用户输入code   |
| codeId | String | YES       | 接口返回codeId |
| ...    | String | YES       | 其它标准参数   |

**Response:**
```js
=======
| code   | String | YES       | captcha code   |
| codeId | String | YES       | captcha codeId |
| ...    | String | YES       | other user parameters   |

**Successful Response:**
```json
>>>>>>> 4d35167a0e6555dbda1e81226b0e9cd9983d5d90
    {
        code: 0,
        msg: "ok",
        data: {

        }
    }
<<<<<<< HEAD
```
=======
```

**Failed Response**
```json
 {
        code: 100101,
        msg: "something wrong happened",
        data: {

        }
    }

```
>>>>>>> 4d35167a0e6555dbda1e81226b0e9cd9983d5d90
