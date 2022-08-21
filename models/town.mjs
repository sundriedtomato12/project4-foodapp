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
    photo: {
      type: DataTypes.STRING,
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updatedAt: {
      allowNull: false,
      type: DataTypes.DATE,
    },

  }, { underscored: true });
}
