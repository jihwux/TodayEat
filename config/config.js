require("dotenv").config();

module.exports = {
  development: {
    database: "randfood",
    username: process.env.SEQUELIZE_USER,
    password: process.env.SEQUELIZE_PASSWORD,
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "false",
  },
  production: {
    // type: "mysql",
    database: process.env.SEQUELIZE_HEROKU_DATABASE,
    username: process.env.SEQUELIZE_HEROKU_USER,
    password: process.env.SEQUELIZE_HEROKU_PASSWORD,
    host: process.env.SEQUELIZE_HEROKU_HOST,
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
  },
  // production: {
  //   use_env_variable: "DATABASE_URL",
  // },
};
