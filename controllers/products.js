const Products = require('../models/products');

//TO HANDLE MULTIPLE USERS IN CART RUN A FOR EACH CARTITEM MAKE A STRIPE API CALL FRO
//CARTITEM.STRIPID
exports.getProducts = async (req, res) => {
    try {
        const productData = await Products.products();
        console.log(`product data: ${productData}`)
        res.status(200).json(productData);
    } catch (err) {
        res.status(500).json(`No products found`);
        console.log(err)
    }
};

exports.getProductById = async (req, res) => {
    try {
        const {id} = req.params
        const productData = await Products.productById(id)
        if(!productData) {
            res.status(404).json(`That product cannot be found`)
        } else {
            res.status(200).json(productData);
        }
    } catch (err) {
        res.status(500).json(`That product cannot be found`);
        console.log(err, 'error from product by id')
    }
};