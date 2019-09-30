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
  })
);
