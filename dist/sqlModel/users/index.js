"use strict";
/*
 * @Author: he@whaleblue.design
 * @Date: 2018-03-28 10:31:11
 * @Last Modified by: Mr.He
 * @Last Modified time: 2018-07-17 22:24:04
 * @content what is the content of this file. */
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize = require("sequelize");
const db_1 = require("common/db");
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
    },
    checkMarketing: {
        type: sequelize.BOOLEAN,
        allowNull: true,
    },
};
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
};
exports.default = db_1.DB.define('users', columns, options);
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcWxNb2RlbC91c2Vycy9pbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7Ozs7O2dEQUtnRDs7QUFHaEQsdUNBQXdDO0FBQ3hDLGtDQUErQjtBQUUvQixJQUFJLE9BQU8sR0FBRztJQUNWLEVBQUUsRUFBRTtRQUNBLElBQUksRUFBRSxTQUFTLENBQUMsSUFBSTtRQUNwQixVQUFVLEVBQUUsSUFBSTtLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELFVBQVUsRUFBRTtRQUNSLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELFlBQVksRUFBRTtRQUNWLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELFNBQVMsRUFBRTtRQUNQLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELFFBQVEsRUFBRTtRQUNOLElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixTQUFTLEVBQUUsS0FBSztLQUNuQjtJQUNELEtBQUssRUFBRTtRQUNILElBQUksRUFBRSxTQUFTLENBQUMsTUFBTTtRQUN0QixNQUFNLEVBQUUsSUFBSTtRQUNaLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxNQUFNO1FBQ3RCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsT0FBTyxFQUFFO1FBQ0wsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3BCLFNBQVMsRUFBRSxLQUFLO0tBQ25CO0lBQ0QsVUFBVSxFQUFFO1FBQ1IsSUFBSSxFQUFFLFNBQVMsQ0FBQyxJQUFJO1FBQ3BCLFNBQVMsRUFBRSxJQUFJO0tBQ2xCO0lBQ0QsY0FBYyxFQUFFO1FBQ1osSUFBSSxFQUFFLFNBQVMsQ0FBQyxPQUFPO1FBQ3ZCLFNBQVMsRUFBRSxJQUFJO0tBQ2xCO0NBQ0osQ0FBQTtBQUVELElBQUksT0FBTyxHQUFHO0lBQ1YsT0FBTyxFQUFFO1FBQ0w7WUFDSSxJQUFJLEVBQUUsT0FBTztZQUNiLE1BQU0sRUFBRSxDQUFDLE9BQU8sQ0FBQztTQUNwQjtLQUNKO0lBQ0QsV0FBVyxFQUFFLElBQUk7SUFDakIsVUFBVSxFQUFFLElBQUk7SUFDaEIsU0FBUyxFQUFFLE9BQU87Q0FDckIsQ0FBQTtBQUNELGtCQUFlLE9BQUUsQ0FBQyxNQUFNLENBQUMsT0FBTyxFQUFFLE9BQU8sRUFBRSxPQUFPLENBQUMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBAQXV0aG9yOiBoZUB3aGFsZWJsdWUuZGVzaWduXG4gKiBARGF0ZTogMjAxOC0wMy0yOCAxMDozMToxMVxuICogQExhc3QgTW9kaWZpZWQgYnk6IE1yLkhlXG4gKiBATGFzdCBNb2RpZmllZCB0aW1lOiAyMDE4LTA3LTE3IDIyOjI0OjA0XG4gKiBAY29udGVudCB3aGF0IGlzIHRoZSBjb250ZW50IG9mIHRoaXMgZmlsZS4gKi9cblxuXG5pbXBvcnQgc2VxdWVsaXplID0gcmVxdWlyZShcInNlcXVlbGl6ZVwiKTtcbmltcG9ydCB7IERCIH0gZnJvbSBcImNvbW1vbi9kYlwiO1xuXG5sZXQgY29sdW1ucyA9IHtcbiAgICBpZDoge1xuICAgICAgICB0eXBlOiBzZXF1ZWxpemUuVVVJRCxcbiAgICAgICAgcHJpbWFyeUtleTogdHJ1ZSxcbiAgICB9LFxuICAgIHR3dHRlck5hbWU6IHtcbiAgICAgICAgdHlwZTogc2VxdWVsaXplLlNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIHJhZGRpdE5hbWU6IHtcbiAgICAgICAgdHlwZTogc2VxdWVsaXplLlNUUklORyxcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGZhY2Vib29rTmFtZToge1xuICAgICAgICB0eXBlOiBzZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgZmlyc3ROYW1lOiB7XG4gICAgICAgIHR5cGU6IHNlcXVlbGl6ZS5TVFJJTkcsXG4gICAgICAgIGFsbG93TnVsbDogZmFsc2UsXG4gICAgfSxcbiAgICBsYXN0TmFtZToge1xuICAgICAgICB0eXBlOiBzZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgZW1haWw6IHtcbiAgICAgICAgdHlwZTogc2VxdWVsaXplLlNUUklORyxcbiAgICAgICAgdW5pcXVlOiB0cnVlLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgY291bnRyeToge1xuICAgICAgICB0eXBlOiBzZXF1ZWxpemUuU1RSSU5HLFxuICAgICAgICBhbGxvd051bGw6IGZhbHNlLFxuICAgIH0sXG4gICAgYWRkcmVzczoge1xuICAgICAgICB0eXBlOiBzZXF1ZWxpemUuSlNPTixcbiAgICAgICAgYWxsb3dOdWxsOiBmYWxzZSxcbiAgICB9LFxuICAgIGRlbGV0ZWRfYXQ6IHtcbiAgICAgICAgdHlwZTogc2VxdWVsaXplLkRBVEUsXG4gICAgICAgIGFsbG93TnVsbDogdHJ1ZSxcbiAgICB9LFxuICAgIGNoZWNrTWFya2V0aW5nOiB7XG4gICAgICAgIHR5cGU6IHNlcXVlbGl6ZS5CT09MRUFOLFxuICAgICAgICBhbGxvd051bGw6IHRydWUsXG4gICAgfSxcbn1cblxubGV0IG9wdGlvbnMgPSB7XG4gICAgaW5kZXhlczogW1xuICAgICAgICB7XG4gICAgICAgICAgICBuYW1lOiBcImVtYWlsXCIsXG4gICAgICAgICAgICBmaWVsZHM6IFsnZW1haWwnXVxuICAgICAgICB9XG4gICAgXSxcbiAgICB1bmRlcnNjb3JlZDogdHJ1ZSxcbiAgICB0aW1lc3RhbXBzOiB0cnVlLFxuICAgIHRhYmxlTmFtZTogJ3VzZXJzJ1xufVxuZXhwb3J0IGRlZmF1bHQgREIuZGVmaW5lKCd1c2VycycsIGNvbHVtbnMsIG9wdGlvbnMpO1xuIl19