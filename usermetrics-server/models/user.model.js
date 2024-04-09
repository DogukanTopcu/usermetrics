import { INTEGER, DATE, TEXT, BOOLEAN, DataTypes } from "sequelize";
import sequelize from "../configs/sequelize.js";

const User = sequelize.define("User", {
    userId: {type: INTEGER, primaryKey: true, autoIncrement: true},
    
    name: {type: TEXT, allowNull: false},
    company: {type: TEXT, allowNull: true},
    email: {type: DataTypes.STRING(50), unique: true, allowNull: false},
    password: {type: TEXT, allowNull: false},

    phoneNumber: {type: DataTypes.STRING(15), unique: true, allowNull: true},

    membershipDate: {type: DATE, defaultValue: new Date()},
    birthday: {type: DATE, allowNull: true},

    isActiveNow: {type: BOOLEAN, defaultValue: false},

    secureKey: {type: TEXT, allowNull: false, defaultValue: false},
    image: {type: TEXT, allowNull: true}
});

export default User;