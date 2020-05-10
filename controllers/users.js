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
exports.getUsers = async (req, res) => {
    try {
        const UserData = await Users.users();

        res.status(200).json(UserData)
        // console.log(res)

        
    } catch (err) {
        res.status(500).json(`No users found`);

    }
};

exports.getUserById = async (req, res) => {
    try {
        const {firebase_id} = req.params;
        const userData = await Users.userById(firebase_id);
        if (!userData) {
            res.status(404).json(`That user could not be found`);
        } else {
            const userCart = await Cart.getCartById(firebase_id);
            console.log(userCart, 'user cart')
            res.status(200).json([userData, userCart]);
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

// //TODO: ADD BETTER ERROR HANDLING, WILL NEED TO CHECK IF USER EXISTS FIRST
exports.addUser = async (req, res) => {
    try {
        
        const {email, firebase_id, first_name, last_name, address, city, state, zip, phone} = req.body;
        console.log(req.body, 'req.body for register')
        if (!email || !firebase_id || !first_name || !last_name || !address || !city || !state || !zip || !phone  ) {
            res.status(400).json(`Please enter all input fields`);
        } else {
            const newUser = await Users.addUser(req.body);
            const cart = await Cart.addCart(firebase_id);
            console.log('cart', cart)
            res.status(201).json(newUser);
            console.log(newUser)
        // }
    } }catch(err) {
        res.status(500).json(`There was an error adding you information`);
        console.log(`error from addUser: ${err}`)
    }
};

exports.addToCart = async (req, res) => {
    try {
        //get all cart items for users cart
        //loop through all cart items
        //if cartItem[i].product_id === cartItem[i].product_id + 1
        //increase that cartItem's quantity by 1
        //else add to cart
        const cart_id = req.params.id; //CART_ID IS THE USER'S FIREBASE_ID
        const products_id = req.body.products_id;
        const product = await Cart.addToCart(products_id, cart_id);
        res.status(200).json(product)
    } catch (err) {
        res.status(500).json(`Error adding product to cart: ${err}`);
        console.log('error from add to cart', err)
    }
};

exports.getCart = async (req, res, next) => {
    try {
        const id = req.params.id
        const cartItem = await Cart.getCartItems(id)
        let updatedTotal = 0
        const price = cartItem.forEach(element => {
            return updatedTotal += element.price 
        });
        const total = Math.ceil(updatedTotal * 100) / 100
        console.log('total: $',total)
        res.status(200).json([cartItem, total])
        console.log(cartItem, 'cart type')
    } catch (err) {
        res.status(500).json(err)
        console.log(err, 'error from get cart')
    }
    // try {
    //     // const id = req.params.id
    //     const cart = await Cart.getCartById(req.params.id)
    //     res.status(200).json(cart)
    // } catch (err) {
    //     res.status(500).json({message: `error getting vendors cart`})
    //     console.log(err, 'error from get vendor cart')
    // }
}
// exports.registerOrLogin = async (req, res, next) => {
//     try {
//       console.log("Test")
//       const {user} = req.body
//       const firebase_id = req.body.uid
//     //   console.log("req dot user: ", req.user);
//       const registeredUser = await Users.registerOrLogin( user);
//       res.status(201).json(registeredUser);
//     } catch (error) {
//       console.log(error);
//     }
//   };

