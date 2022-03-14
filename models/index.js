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
    username: "ofujtwlefqkpqp",
    password:
      "92dc7c4dd831cbe67a8a8e4a9615990f1428033fadc1163ff7ebe76d977c80ba",
    native: true, //2021 5월에 추가: pg-native를 npm으로 설치해야함
    protocol: "postgres",
    port: 5432,
    database: "dfcib1vn0j6hhl",
    host: "ec2-44-194-167-63.compute-1.amazonaws.com",
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
