require("dotenv").config();

module.exports = {
  development: {
    username: "root",
    password: process.env.SEQUELIZE_PASSWORD,
    database: "randfood",
    host: "127.0.0.1",
    dialect: "mysql",
    operatorsAliases: "false",
  },
  production: {
    // type: "mysql",
    database: "yw82vvgqbn05tb77",
    username: "h1f1dl1qr9z5jt9r",
    password: "by1prn1403oiyurc",
    // port: 3306,
    host: "uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
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
