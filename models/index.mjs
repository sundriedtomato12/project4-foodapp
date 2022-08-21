import { Sequelize } from 'sequelize';
import url from 'url';
import allConfig from '../config/config.js';

import categoryModel from './category.mjs';
import itemModel from './item.mjs';
import reviewModel from './review.mjs';
import stallModel from './stall.mjs';
import townModel from './town.mjs';
import userModel from './user.mjs';

const env = process.env.NODE_ENV || 'development';

const config = allConfig[env];

const db = {};

let sequelize;

if (env === 'production') {
  // break apart the Heroku database url and rebuild the configs we need

  const { DATABASE_URL } = process.env;
  const dbUrl = url.parse(DATABASE_URL);
  const username = dbUrl.auth.substr(0, dbUrl.auth.indexOf(':'));
  const password = dbUrl.auth.substr(dbUrl.auth.indexOf(':') + 1, dbUrl.auth.length);
  const dbName = dbUrl.path.slice(1);

  const host = dbUrl.hostname;
  const { port } = dbUrl;

  config.host = host;
  config.port = port;

  sequelize = new Sequelize(dbName, username, password, config);
} else {
  sequelize = new Sequelize(config.database, config.username, config.password, config);
}

db.Category = categoryModel(sequelize, Sequelize.DataTypes);
db.Item = itemModel(sequelize, Sequelize.DataTypes);
db.Review = reviewModel(sequelize, Sequelize.DataTypes);
db.Stall = stallModel(sequelize, Sequelize.DataTypes);
db.Town = townModel(sequelize, Sequelize.DataTypes);
db.User = userModel(sequelize, Sequelize.DataTypes);

// establish model relationships (one to many etc)

db.Stall.belongsTo(db.Category);
db.Category.hasMany(db.Stall);

db.Stall.belongsTo(db.Town);
db.Town.hasMany(db.Stall);

// should this be many to many
db.Stall.belongsTo(db.User);
db.User.hasMany(db.Stall);

db.Review.belongsTo(db.User);
db.User.hasMany(db.Review);

db.Review.belongsTo(db.Stall);
db.Stall.hasMany(db.Review);

db.Item.belongsTo(db.Stall);
db.Stall.hasMany(db.Item);

db.sequelize = sequelize;
db.Sequelize = Sequelize;

export default db;
