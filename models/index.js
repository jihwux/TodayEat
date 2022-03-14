const Sequelize = require("sequelize");
// const env = process.env.NODE_ENV || "development";
const env = process.env.NODE_ENV || "production";
const config = require("../config/config")[env];
const db = {};

// const sequelize = new Sequelize(
//   config.database, config.username, config.password, config,
// );
let sequelize = null;
if (process.env.DATABASE_URL) {
  sequelize = new Sequelize(process.env.DATABASE_URL, {
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
    // logging: true, //false
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

// db.User.belongsToMany(db.Foodsave, {
//   foreignKey: 'foodsid',
//   as: 'foods',
//   // through : 'food'
// });
// db.User.belongsToMany(db.User, {
//   foreignKey: 'followingId',
//   as: 'Followers',
//   through: 'Follow',
// });
// db.User.belongsToMany(db.User, {
//   foreignKey: 'followerId',
//   as: 'Followings',
//   through: 'Follow',

// });

module.exports = db;

// const Sequelize = require('sequelize');
// const env = process.env.NODE_ENV || 'development';
// const config = require('../config/config')[env];
// const db = {};

// const sequelize = new Sequelize(
//   config.database, config.username, config.password, config,
// );

// db.sequelize = sequelize;
// db.Sequelize = Sequelize;
// db.User = require('./user')(sequelize, Sequelize);
// db.Post = require('./post')(sequelize, Sequelize);
// db.Hashtag = require('./hashtag')(sequelize, Sequelize);

// db.User.hasMany(db.Post);
// db.Post.belongsTo(db.User);
// db.Post.belongsToMany(db.Hashtag, { through: 'PostHashtag' });
// db.Hashtag.belongsToMany(db.Post, { through: 'PostHashtag' });
// db.User.belongsToMany(db.User, {
//   foreignKey: 'followingId',
//   as: 'Followers',
//   through: 'Follow',
// });
// db.User.belongsToMany(db.User, {
//   foreignKey: 'followerId',
//   as: 'Followings',
//   through: 'Follow',
// });

// module.exports = db;
