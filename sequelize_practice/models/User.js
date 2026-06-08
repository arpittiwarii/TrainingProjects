import { DataTypes } from "sequelize"
import { sequelize } from "../config/db.js"

const User = sequelize.define("Users",{
    id:{
        type:DataTypes.INTEGER,
        primaryKey:true,
        autoIncrement:true
    },
    name:{
        type:DataTypes.TEXT,
        allowNull:false,
    },
    email:{
        type:DataTypes.TEXT,
        unique:true,
        validate:{
            isEmail:true
        }
    },
    mobile:{
        type:DataTypes.STRING,
        allowNull:false,
    },
    isActive:{
        type:DataTypes.STRING,
        defaultValue:"active"
    }
},{
    timestamps:true,
    paranoid:true
})

export default User;
