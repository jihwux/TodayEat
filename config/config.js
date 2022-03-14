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
    type: "postgres",
    database: "dfcib1vn0j6hhl",
    username: "ofujtwlefqkpqp",
    password:
      "92dc7c4dd831cbe67a8a8e4a9615990f1428033fadc1163ff7ebe76d977c80ba",
    port: 5432,
    host: "ec2-44-194-167-63.compute-1.amazonaws.com",
    dialect: "postgres",
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
