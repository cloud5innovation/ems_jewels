const db = require('../dbconfig.js');

getCartById = id => {
    return db("cart")
      .where({ firebase_id: id })
      .first();
  };

async function addCart(firebaseId) {
    try {
      let addedCart = {
        firebase_id: firebaseId
      };
      const [id] = await db("cart")
        .insert(addedCart)
        .returning("id");
      return getCartById(id);
    } catch (err) {
      console.log(err);
    }
  }


getCart = id => {
    return db("cart")
      .innerJoin("vendor", "cart.firebase_id", "vendor.firebase_id")
      .select("vendor.contact_fullname")
      .where({ firebase_id: id });
  };

getCartItems = id => {
    return db("cart_item")
      .innerJoin("products", "cart_item.products_id", "products.id")
      .innerJoin("cart", "cart_item.cart_id", "cart.firebase_id")
      .select([
        "cart_item.id",
        "products_id",
        "products.title",
        "products.description",
        "products.price",
        "products.image_url",
        "cart.firebase_id",
        "cart.id"
      ])
      .where({ cart_id: id });
  };

  addToCart = (products_id, cart_id) => {
    let addedItem = {
      products_id,
      cart_id
    };
  
    console.log("added item", addedItem);
    return db("cart_item").insert(addedItem);
  };
  module.exports = {
      getCartById,
      addCart,
      getCart,
      addToCart,
      getCartItems
  }