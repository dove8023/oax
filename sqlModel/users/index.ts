/*
 * @Author: he@whaleblue.design
 * @Date: 2018-03-28 10:31:11
 * @Last Modified by: he@whaleblue.design
 * @Last Modified time: 2018-07-14 21:14:12
 * @content what is the content of this file. */


import sequelize = require("sequelize");
import { DB } from "common/db";

let columns = {
    id: {
        type: sequelize.UUID,
        primaryKey: true,
    },
    twtterName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    radditName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    facebookName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    firstName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    lastName: {
        type: sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: sequelize.STRING,
        unique: true,
        allowNull: false,
    },
    country: {
        type: sequelize.STRING,
        allowNull: false,
    },
    address: {
        type: sequelize.JSON,
        allowNull: false,
    },
    deleted_at: {
        type: sequelize.DATE,
        allowNull: true,
    }
}

let options = {
    indexes: [
        {
            name: "email",
            fields: ['email']
        }
    ],
    underscored: true,
    timestamps: true,
    tableName: 'users'
}
export default DB.define('users', columns, options);
