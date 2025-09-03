const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Worker = sequelize.define('Worker', {
  skills: { type: DataTypes.TEXT },
  availability: { type: DataTypes.BOOLEAN, defaultValue: true },
  rating: { type: DataTypes.DECIMAL(2,1), defaultValue: 0.0 }
}, { timestamps: false });

Worker.belongsTo(User, { foreignKey: 'user_id', onDelete: 'CASCADE' });

module.exports = Worker;
