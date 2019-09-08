module.exports = (sequelize, DataTypes) => (
  sequelize.define('foodsave', {
    food: {
      type: DataTypes.STRING(30),
      allowNull: true,
    },
    // date: {
    //   type: DataTypes.date,
    //   allowNull: false,
    // },
  }, {
    timestamps: true,
    paranoid: true,
  })
);
