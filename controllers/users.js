const Users = require('../models/users');
const Cart = require('./../models/cart');
//404 Not Found
//400 Bad request 
//TODO: ADD BEST PRACTICES FOR ERROR HANDLING

// REVAMP: THIS IS FOR A STAND ALONE ECOMMERCE STORE
//A USER SHOULD BE TO LOGIN/REGISTER
//CHOSE A PRODUCT AND ADD TO CART 
//DELETE CART ITEMS
//PAY FOR ITEMS
//WRITE REVIEWS
//FAVORITE/ADD TO WISHLIST


exports.getUserById = async (req, res) => {
    try {
        const {firebase_id} = req.params;
        const userData = await Users.userById(firebase_id);
        if (!userData) {
            res.status(404).json(`That user could not be found`);
        } else {
            const cartItem = await Cart.getCartItems(firebase_id)
            let updatedTotal = 0
            const price = cartItem.forEach(element => {
                return updatedTotal += element.price 
            });
            console.log('total: $',updatedTotal)

            const total = Math.ceil(updatedTotal * 100) / 100
            // const userCart = await Cart.getCartById(firebase_id);
            // console.log(userCart, 'user cart')
            res.status(200).json({userData, cartItem, total});
        }
    } catch(err) {
        res.status(500).json(`A user by that ID was not found`);
        console.log('get by id error', err)
    }
};

exports.editUser = async (req, res) => {
    try {
        const updatedUser = req.body;
        const {id} = req.params;
        const user = await Users.editUser(updatedUser, id);
        if (!user || !id) {
            res.status(404).json(`User information was not updated`);
        } else {
            res.status(201).json(user);
        }
      } catch (error) {
        res.status(500).json({ message: `Error updating user: ${error}` });     
     }
};


// //TODO: ADD BETTER ERROR HANDLING, WILL NEED TO CHECK IF USER EXISTS FIRST
exports.addUser = async (req, res) => {
    try {
        
        const {email, firebase_id, first_name, last_name} = req.body;
        console.log(req.body, 'req.body for register')
        if (!email || !firebase_id || !first_name || !last_name) {
            res.status(400).json(`Please enter all input fields`);
        } else {
            const newUser = await Users.addUser(req.body);
            const cart = await Cart.addCart(firebase_id);
            console.log('cart', cart)
            res.status(201).json({message: `Welcome ${first_name}`});
            console.log(newUser)
        // }
    } }catch(err) {
        res.status(500).json(`There was an error adding you information`);
        console.log(`error from addUser: ${err}`)
    }
};

// exports.addToCart = async (req, res) => {
//     try {
//         //get all cart items for users cart
//         //loop through all cart items
//         //if cartItem[i].product_id === cartItem[i].product_id + 1
//         //increase that cartItem's quantity by 1
//         //else add to cart
//         const cart_id = req.params.id; //CART_ID IS THE USER'S FIREBASE_ID
//         const products_id = req.body.product_id;
//         const product = await Cart.addToCart(products_id, cart_id);
//         res.status(200).json(`Product has been added to your cart`)
//     } catch (err) {
//         res.status(500).json(`Error adding product to cart: ${err}`);
//         console.log('error from add to cart', err)
//     }
// };

exports.addToCart = async (req, res) => {
    try {
        //get all cart items for users cart
        //loop through all cart items
        //if cartItem[i].product_id === cartItem[i].product_id + 1
        //increase that cartItem's quantity by 1
        //else add to cart
        //const firebase_id = req.params.id; //CART_ID IS THE USER'S FIREBASE_ID
        const {products_id, quantity, firebase_id, price} = req.body;
        console.log("price new price", price)
        if(!products_id || !quantity || !firebase_id || !price) {
            res.status(400).json({message: `Provide a product to add to cart`})
        } else {
            const newProduct = await Cart.addToCart(products_id, quantity, firebase_id, price);
            // const newCart = await Cart.getCartItems(firebase_id)
            res.status(201).json({message: `Product has been added to your cart`})
            // res.status(201).json(newCart)

        }
    } catch (err) {
        res.status(500).json({message: `Error adding product to cart`, err});
        console.log('error from add to cart', err)
    }
};

exports.getCart = async (req, res, next) => {
    try {
        const id = req.params.id
       
        if (!id) {
            res.status(400).json({message: `Please login to view cart`})

        } else {
            const cartItem = await Cart.getCartItems(id)
            let updatedTotal = 0
            const price = cartItem.forEach(element => {
                return updatedTotal += element.price 
            });
            const total = Math.ceil(updatedTotal * 100) / 100
            console.log('total: $',total)
            res.status(200).json({cartItem, total})
            console.log(total, 'cart type')
        }
    } catch (err) {
        res.status(500).json(err)
        console.log(err, 'error from get cart')
    }
};

// exports.removeFromCart = async (req, res, next) => {
//     try{
//         console.log(req.query, "query params")

//         const cart_id = req.params;
//         const products_id = req.query.prod;
//         // let productId = req.body.stalls_id;
//         // console.log(ree.log(req.body, 'deletedStall')
//         const removedProduct = await Cart.removeFromCart(products_id, cart_id)
//         res.status(201).json({message: `Your products has been added`})
//         } catch (err) {
//             res.status(500).json(`error removing product`)
//             console.log(err, 'error from removing cart')
//         }
// };

exports.removeFromCart = async (req, res, next) => {
    try{
        const { id } = req.params;
        console.log(id, 'removed item')
        if (!id) {
            res.status(404).json({message: `Provide an item to be deleted from cart`})
        } else {
            const removedProduct = await Cart.removeFromCart(id)
            res.status(204).json({message: `Your item has been deleted`})
        }
        } catch (err) {
            res.status(500).json(`error removing product`)
            console.log(err, 'error from removing cart')
        }
};

exports.deleteUser = async (req, res) => {
    try {
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`User not deleted`);
        } else {
            const deletedUser = await Users.deleteUser(id);
            res.status(200).json(`User has been deleted`);
        }
    } catch(err) {
        res.status(500).json(`error deleting user`);
    }
};

exports.editCart = async (req, res) => {
    try {
        const updates = req.body;
        console.log("updates", updates)
        const {id} = req.params;
        if (!id) {
            res.status(404).json(`Procide an item to be updates`);
        } else {
            const user = await Cart.editCart(id, updates);
            res.status(204).json({message: `Your cart has been updated`});
        }
      } catch (error) {
        res.status(500).json({ message: `Error updating cart: ${error}` });     
     }
};

exports.checkout = async (req, res, next) => {
    try {
        const {token, amt, stripe_account, email, address, desc} = req.body
  
        console.log("request body:", req.body);
        console.log("Checkout amt", amt);
        const paymentIntent = await stripe.paymentIntents.create({
            amount: amt,
            currency: 'usd',
            receipt_email: email,
            shipping: address,
            description: desc,
            // Verify your integration in this guide by including this parameter
            metadata: {integration_check: 'accept_a_payment'},
          });
        // const charge = await stripe.charges.create(
        //             {
        //               amount: amt * 100,
        //               currency: "usd",
        //             //   customer: customer.id,
        //               receipt_email: token.email,
        //               description: `Purchased stalls`,
        //               application_fee_amount: 150,
        //               source: token.id
        //             },
        //             {
        //             stripe_account: stripe_account
        //             }
        //           );
        console.log('Charge', {charge})
        res.status(201).json(charge)

    } catch (err) {
        res.status(500).json(err)
        console.log('error from pay', err)
    }
};