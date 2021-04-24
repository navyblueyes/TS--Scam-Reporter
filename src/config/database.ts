const SequelizeLib = require('sequelize');

const sequelizeInit = new SequelizeLib('scam-check', 'my-db-user', 'db-p4ss', {
  dialect: 'sqlite',
  storage: './database.sqlite',
});

module.exports = sequelizeInit;
