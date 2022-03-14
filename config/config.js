require("dotenv").config();

module.exports = {
  development: {
    username: "hwan",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "randfood",
    host: "127.0.0.1",
    dialect: "postgres",
    operatorsAliases: "false",
  },
  production: {
    type: "mysql",
    database: "heroku_933e0f01e3d9aab",
    username: "b8eb2711b3efec",
    password: "8b62bb99",
    port: 3306,
    host: "us-cdbr-east-05.cleardb.net",
    dialect: "mysql",
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false,
      },
    },
    // protocol: "postgres",
  },
  // production: {
  //   use_env_variable: "DATABASE_URL",
  // },
};
