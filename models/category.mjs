export default function categoryModel(sequelize, DataTypes) {
  return sequelize.define('category', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    category_name: {
      type: DataTypes.STRING,
    },

  }, { underscored: true });
}
