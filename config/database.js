const { Sequelize } = require('sequelize');
require('dotenv').config();

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

const syncDatabase = async () => {
    try {
      await sequelize.sync({ force: false });
      console.log('Database synchronized');
    } catch (error) {
      console.error('Unable to synchronize the database:', error);
    }
  };
  
  syncDatabase();
  
  module.exports = sequelize;