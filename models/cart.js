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
  };


getCart = id => {
    return db("cart")
      .innerJoin("vendor", "cart.firebase_id", "vendor.firebase_id")
      .select("vendor.contact_fullname")
      .where({ firebase_id: id });
  };

// getCartItems = id => {
//     return db("cart_item")
//       .innerJoin("products", "cart_item.products_id", "products.id")
//       .innerJoin("cart", "cart_item.cart_id", "cart.firebase_id")
//       .select([
//         "cart_item.id",
//         "products_id",
//         "products.title",
//         "products.description",
//         "products.price",
//         "products.image_url",
//         "cart_item.quantity",
//         "cart.firebase_id",
//         "cart.id"
//       ])
//       .where({ cart_id: id });
//   };

getCartItems = id => {
  return db("cart_item")
    .innerJoin("products", "cart_item.products_id", "products.id")
    .innerJoin("users", "cart_item.firebase_id", "users.firebase_id")
    .select(
      "cart_item.id",
      "cart_item.products_id",
      "products.title",
      "products.description",
      "cart_item.price",
      "products.image_url",
      "cart_item.quantity",
      "users.firebase_id",
    )
    .where({ "cart_item.firebase_id": id });
};

  // addToCart = (product_id, firebase_id) => {
  //   let addedItem = {
  //     product_id,
  //     firebase_id
  //   };
  
  //   console.log("added item", addedItem);
  //   return db("cart").insert(addedItem);
  // };

  addToCart = (products_id, quantity, firebase_id, price) => {
    let addedItem = {
      products_id,
      quantity,
      firebase_id,
      price
    };
  
    console.log("added item", addedItem.price);
    return db("cart_item").insert(addedItem);
  };

  // removeFromCart = (id, cart_id) => {
  //   let deletedItem = {
  //     products_id,
  //     cart_id
  //   };
  //   console.log("deleted item", deletedItem);
  //   return db("cart_item")
  //     .where({ "product.id": id, cart_id: cart_id })
  //     .delete();
  // };

  removeFromCart = (id) => {
    return db("cart_item").where({ id }).delete();
  };

  editCart = (id, updates) => {
    console.log("updates model", updates)

    return db("cart_item").where({ id }).update(updates);
  };

  module.exports = {
      getCartById,
      addCart,
      getCart,
      addToCart,
      getCartItems,
      removeFromCart,
      editCart,
  }