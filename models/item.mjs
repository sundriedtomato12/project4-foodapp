export default function itemModel(sequelize, DataTypes) {
  return sequelize.define('item', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },

    name: {
      type: DataTypes.STRING,
    },

    description: {
      type: DataTypes.STRING,
    },

    photo: {
      type: DataTypes.STRING,
    },

    stallId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stalls',
        key: 'id',
      },
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
