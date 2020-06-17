const db = require('./../dbconfig');

users = () => {
    return db('users').select(
      'firebase_id', 
      'email', 
      'first_name', 
      'last_name', 
      'address',
      'city',
      'state',
      'zip',
      'phone',
      'admin',
      )
};

// userById = (firebase_id) => {
//     return db('users').where({ 'firebase_id': firebase_id }).first();
//   };

addUser = (user) => {
    return db('users').insert(user)
};

editUser = (user, id) => {
    return db('users').where({firebase_id: id}).update(user) 
};

deleteUser = (id) => {
    return db('users').where({'firebase_id': id}).delete()
};


userById = (firebase_id) => {
    return db("users")
      .where({ 'firebase_id': firebase_id })
      .first();
  };

  async function registerOrLogin(user) {
    try {
      // console.log("User:", user);
      const loggedInUser = await db("users")
        .where({ firebase_id: user.firebase_id })
        .first();
      console.log("loggedInUser: ", loggedInUser);
      if (!!loggedInUser) {
        return loggedInUser;
      } else {
        const [id] = await db("users").insert(user, "id");
        console.log("user id:", id);
        const signedUpUser = await db("users")
          .where({ id: id })
          .first();
        console.log("signed up user:", signedUpUser);
        return signedUpUser;
      }
    } catch (error) {
      console.log(error);
    }
  }
  
module.exports = {
    users,
    userById,
    addUser,
    editUser,
    deleteUser,
    registerOrLogin,
   
}