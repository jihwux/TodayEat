const Sequelize = require("sequelize");
// const env = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV || "production";
const config = require("../config/config")[env];
const db = {};

// const sequelize = new Sequelize(   config.database, config.username,
// config.password, config, );
let sequelize = null;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
    // type: "mysql",
    database: "yw82vvgqbn05tb77",
    username: "h1f1dl1qr9z5jt9r",
    password: "by1prn1403oiyurc",
    // port: 3306,
    host: "uyu7j8yohcwo35j3.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",
    dialect: "mysql",
    dialectOptions: { ssl: { require: true, rejectUnauthorized: false } },
  });
} else {
  sequelize = new Sequelize(
    config.database,
    config.username,
    config.password,
    config
  );
}

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user")(sequelize, Sequelize);
db.Foodsave = require("./foodsave")(sequelize, Sequelize);

db.User.hasMany(db.Foodsave);
db.Foodsave.belongsTo(db.User);

module.exports = db;
