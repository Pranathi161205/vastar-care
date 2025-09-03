const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Reminder = sequelize.define('Reminder', {
  message: { type: DataTypes.TEXT },
  reminder_time: { type: DataTypes.DATE },
  status: { type: DataTypes.STRING(50), defaultValue: 'pending' }
}, { timestamps: false });

Reminder.belongsTo(User, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

module.exports = Reminder;
