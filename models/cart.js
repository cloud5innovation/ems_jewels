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
      .innerJoin("stall", "cart_item.stalls_id", "stall.id")
      .innerJoin("market", "stall.market_id", "market.firebase_id")
      .innerJoin("cart", "cart_item.cart_id", "cart.firebase_id")
      .select([
        "cart_item.id",
        "stalls_id",
        "stall.price",
        "stall.size",
        "stall.market_id",
        "cart.firebase_id",
        "cart.id",
        "market.stripeAccountId",
        "market.market_name",
      ])
      .where({ cart_id: id });
  };
  module.exports = {
      getCartById,
      addCart,
      getCart
  }