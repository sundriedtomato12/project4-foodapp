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

    stall_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stalls',
        key: 'id',
      },
    },
    created_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },
    updated_at: {
      allowNull: false,
      type: DataTypes.DATE,
    },

  }, { underscored: true });
}
