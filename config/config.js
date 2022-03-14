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
    username: "ofujtwlefqkpqp",
    password:
      "92dc7c4dd831cbe67a8a8e4a9615990f1428033fadc1163ff7ebe76d977c80ba",
    dialect: "postgres",
    // native: true, //2021 5월에 추가: pg-native를 npm으로 설치해야함
    protocol: "postgres",
    port: 5432,
    database: "dfcib1vn0j6hhl",
    host: "ec2-44-194-167-63.compute-1.amazonaws.com",
    ssl: {
      require: true,

      rejectUnauthorized: false,
    },
    // logging: true, //false
  },
  // production: {
  //   use_env_variable: "DATABASE_URL",
  // },
};
