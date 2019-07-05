const Sequelize = require('sequelize');
const sequelize = require('../configs/sequelize'); // instance database form config

class Product extends Sequelize.Model {}
Product.init({
  name: Sequelize.STRING,
  price: Sequelize.INTEGER
}, { sequelize /* set database */, modelName: 'product' });

module.exports = Product;
