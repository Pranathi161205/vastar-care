const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');
const Worker = require('./Worker');

const Order = sequelize.define('Order', {
  status: { type: DataTypes.STRING(50), defaultValue: 'pending' },
  pickup_date: { type: DataTypes.DATEONLY },
  delivery_date: { type: DataTypes.DATEONLY },
  total_price: { type: DataTypes.DECIMAL(10,2) }
}, { timestamps: true, createdAt: 'created_at', updatedAt: false });

Order.belongsTo(User, { foreignKey: 'customer_id', onDelete: 'CASCADE' });
Order.belongsTo(Worker, { foreignKey: 'worker_id', onDelete: 'SET NULL' });

module.exports = Order;
