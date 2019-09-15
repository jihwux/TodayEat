module.exports = (sequelize, DataTypes) => (
  sequelize.define('foodsave', {
    food: {
      type: DataTypes.STRING(30),
      allowNull: false,
    },    
  }, {
    timestamps: true,
    paranoid: true,
  })
);
