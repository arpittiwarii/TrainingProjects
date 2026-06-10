import Sequelize from "sequelize"
import dotenv from "dotenv"
dotenv.config();

// export const sequelize =await new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME,`${process.env.DB_PASSWORD}`,{
//     host:process.env.DB_HOST,
//     dialect:"postgres",
//     port:process.env.DB_PORT
// });`
export const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD,{
    host:process.env.DB_HOST,
    dialect:"postgres",
    port:process.env.DB_PORT
});

export const connectDB = async()=>{
        try{
            await sequelize.authenticate()
            console.log("Database connected")
        }
        catch(err){
            console.log(err)
        }
}
// how we can put Promise.all here
// module.exports={sequelize,connectDB}