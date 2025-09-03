const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Subscription = sequelize.define('Subscription', {
  plan_name: { type: DataTypes.STRING(100) },
  price: { type: DataTypes.DECIMAL(10,2) },
  start_date: { type: DataTypes.DATEONLY },
  end_date: { type: DataTypes.DATEONLY },
  status: { type: DataTypes.STRING(50), defaultValue: 'active' }
}, { timestamps: false });

Subscription.belongsTo(User, { foreignKey: 'customer_id', onDelete: 'CASCADE' });

module.exports = Subscription;
