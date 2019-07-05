const Product = require('../models/product');

module.exports.getIndexProduct = (req, res) => {
    Product.findByPk(req.params.id).then((product) => {
        res.json(product)
    })    
}