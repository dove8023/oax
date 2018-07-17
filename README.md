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


### Retrieve captcha
`GET /api/v1/captchaimg/:id`


**Parameters:**

| Name   | Type   | Mandatory | Description |
| ------ | ------ | --------- | ----------- |
| codeID | String | YES       | /:id        |

**Response:**
```js
// response is a gif  
// <img src="http://localhost/api/v1/captchaimg/codeId">
```


### create users
`POST /api/v1/users`


**Parameters:**

| Name   | Type   | Mandatory | Description           |
| ------ | ------ | --------- | --------------------- |
| code   | String | YES       | captcha code          |
| codeId | String | YES       | captcha codeId        |
| ...    | String | YES       | other user parameters |

**Successful Response:**
```json
    {
        code: 0,
        msg: "ok",
        data: {

        }
    }
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
