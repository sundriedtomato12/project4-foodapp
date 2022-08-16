export default function townModel(sequelize, DataTypes) {
  return sequelize.define('town', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    townName: {
      type: DataTypes.STRING,
    },

  }, { underscored: true });
}
