export default function reviewModel(sequelize, DataTypes) {
  return sequelize.define('review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    stall_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'stalls',
        key: 'id',
      },
    },
    comments: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL(10, 2),
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
