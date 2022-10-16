const { Sequelize } = require("sequelize");
require('dotenv').config();

const db = new Sequelize({
  logging: false,
  database: process.env.DATABASE_NAME,
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  host: process.env.DATABASE_HOST,
  port: process.env.DATABASE_PORT,
  dialect: "postgres",
});

module.exports = { db };