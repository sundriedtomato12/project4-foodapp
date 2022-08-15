export default function reviewModel(sequelize, DataTypes) {
  return sequelize.define('review', {
    id: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
    stallId: {
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
