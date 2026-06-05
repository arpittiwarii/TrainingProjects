const { Sequelize } = require("sequelize")

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  dialect: "postgres",
  replication: {
    read: [
      { host: process.env.DB_SLAVE_HOST, port: 5432 },
      // Add more slaves here for load balancing
    ],
    write: {
      host: process.env.DB_MASTER_HOST,
      port: 5432,
    },
  },
  pool: {
    max: 20,     // max connections per pool
    min: 2,
    acquire: 30000,
    idle: 10000,
  },
  logging: process.env.NODE_ENV === "development" ? console.log : false,
})

module.exports = sequelize
