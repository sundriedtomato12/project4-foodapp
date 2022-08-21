export default function townModel(sequelize, DataTypes) {
  return sequelize.define('town', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    town_name: {
      type: DataTypes.STRING,
    },
    photo: {
      type: DataTypes.STRING,
    },

  }, { underscored: true });
}
