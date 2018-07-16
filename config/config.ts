export let config = {
    "appID": "100",
    "appName": "oax-address",
    "mysql": {
        "url": `mysql://${process.env.MYSQL_USER}:${process.env.MYSQL_PASS}@${process.env.MYSQL_HOST}:3306/oax-address`,
        "debug": false
    },
    "redis": {
        "url": `redis://${process.env.REDIS_HOST}:16379`
    },
    "CaptchaTime": 1800,
    "cluster": 4,
    "port": 3000
}

