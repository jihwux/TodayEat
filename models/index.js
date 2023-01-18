const Sequelize = require("sequelize");
const env = process.env.NODE_ENV || "development";
// const env = process.env.NODE_ENV || "production";
const config = require(__dirname + "/../config/config")[env];
const db = {};

const sequelize = new Sequelize(
  config.database,
  config.username,
  config.password,
  config
);

db.sequelize = sequelize;
db.Sequelize = Sequelize;
db.User = require("./user")(sequelize, Sequelize);
db.Foodsave = require("./foodsave")(sequelize, Sequelize);

db.User.hasMany(db.Foodsave);
db.Foodsave.belongsTo(db.User);

module.exports = db;
