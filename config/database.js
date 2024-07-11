const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('biodata_db', 'root', '', {
  host: 'localhost',
  dialect: 'mysql',
});

module.exports = sequelize;
