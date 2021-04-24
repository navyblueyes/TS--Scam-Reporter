const SequelizeLibr = require('sequelize');
const DBconfig = require('../config/database');

const Model = SequelizeLibr.Model;

class User extends Model {}

User.init(
  {
    username: {
      type: SequelizeLibr.STRING,
    },
    email: {
      type: SequelizeLibr.STRING,
    },
    password: {
      type: SequelizeLibr.STRING,
    },
  },
  {
    DBconfig,
    modelName: 'user',
  }
);
