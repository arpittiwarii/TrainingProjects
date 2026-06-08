import Sequelize from "sequelize"
import dotenv from "dotenv"
dotenv.config()

export const sequelize = new Sequelize("practice", // database name
  "postgres",           // username
  "root",      // password
  {
    host: "localhost",
    dialect: "postgres",
    port: 5432
  }
);
export const connectDB = async ()=>{
    try{
        await sequelize.authenticate();
        await sequelize.sync({alter:true})
        console.log("Database Connected.")
    }
    catch(err){
        console.log("error in database connection : ",err?.message)
    }
}



