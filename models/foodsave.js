module.exports = (sequelize, DataTypes) => (
  sequelize.define('foodsave', {
    food: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    moment : {
      type: DataTypes.STRING(30),
      allowNull: true,

    } 
  }, {
    timestamps: true,
    paranoid: true,
    charset: 'utf8',
    collate: 'utf8_general_ci',
  })
);
