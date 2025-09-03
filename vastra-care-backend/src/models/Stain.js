const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Order = require('./Order');

const Stain = sequelize.define('Stain', {
  stain_type: { type: DataTypes.STRING(100) },
  severity: { type: DataTypes.STRING(50) }
}, { timestamps: true, createdAt: 'detected_at', updatedAt: false });

Stain.belongsTo(Order, { foreignKey: 'order_id', onDelete: 'CASCADE' });

module.exports = Stain;
