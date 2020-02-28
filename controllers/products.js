const Products = require('../models/products');

//TO HANDLE MULTIPLE USERS IN CART RUN A FOR EACH CARTITEM MAKE A STRIPE API CALL FRO
//CARTITEM.STRIPID
exports.getProducts = async (req, res) => {
    try {
        const productData = await Products.products();
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

exports.addProducts = async (req, res) => {
        try {
            // const product = {
            //     title: req.body.title,
            //     price: req.body.price,
            //     description: req.body.description,
            //     image_url: req.body.image_url,
            // }
            // console.log(product);
            const productData = await Products.addProduct(req.body);
           
        if (!req.body.title || !req.body.price || !req.body.description || !req.body.image_url) {
            res.status(404).json({message: `Please enter all required fields`})
        } else {
            res.status(201).json('Product added')
        }
    } catch (err) {
        res.status(500).json(`Product not added`);
        console.log(err, 'error from product by id')
    }
}

exports.editProduct = async (req, res, next) => {
    const id  = req.params.id.toString();
    const updatedProduct = req.body;
    try {
        const productData = await Products.editProduct(id, req.body)
        res.status(200).json(`Your product was edited`)
    } catch (err) {
        res.status(500).json(err)
        console.log(err, 'error from edit');
    }
};

exports.deleteProduct = async (req, res, next) => {
    const { id } = req.params;
    // products.productById(id)
    try {
        const productData = await Products.deleteProduct(req.params.id)
        if (productData) {
            res.status(204).json(`product deleted`)
        } else {
            res.status(404).json({message: `There was an error, product not deleted`})
        }
    } catch (err) {
        res.status(500).json(`That product does not exist`)
    }
};