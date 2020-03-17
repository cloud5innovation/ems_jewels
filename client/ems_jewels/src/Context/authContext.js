import React, { useEffect, useState } from "react";
import axios from 'axios';
import firebase from './../firebaseConfig';

export const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
  // const Store = ({ children }) => {
    const [currentUser, setCurrentUser] = useState(null);
    // const [marketProfile, setMarketProfile] = useState(null);
  
  
    
    useEffect(() => {
      firebase.auth().onAuthStateChanged(setCurrentUser)
    }, []);
  
    return (
      <AuthContext.Provider
        value={{
          currentUser,
       
        }}
      >
        {/* <MarketContext.Provider value={[marketProfile, setMarketProfile]}>
        <VendorContext.Provider value={[vendorProfile, setVendorProfile]}> */}
          {children}
        {/* </VendorContext.Provider>
        </MarketContext.Provider> */}
      </AuthContext.Provider>
    );
  };
  
  // export default Store;
// export const AuthProvider = ({ children }) => {
//       const [User, setUser] = useState(null);
//       useEffect(() => {
//         firebase.auth().onAuthStateChanged((user) => {
//             if(user) {
//                 return firebase.auth().currentUser.getIdToken()
//                 .then(idToken => {
//                     console.log(idToken, 'idtoken')
//                     setUser(user)
//                 })
//                 .catch(err => {
//                     console.log(err.message)
//                 })
//             }
//         });
//       }, []);
    
//       return (
//         <AuthContext.Provider
//           value={{
//             User
//           }}
//         >
//             {children}
//         </AuthContext.Provider>
//       );
//     };

// import React, { useEffect, useState } from "react";
// import firebase from './../firebaseConfig';

// export const AuthContext = React.createContext();

// export const AuthProvider = ({ children }) => {
//       const [User, setUser] = useState(null);
//       useEffect(() => {
//         firebase.auth().onAuthStateChanged((user) => {
//             if(user) {
//                 return firebase.auth().currentUser.getIdToken()
//                 .then(idToken => {
//                   localStorage.setItem('token', idToken)
//                     console.log(idToken, 'idtoken')
//                     setUser(user)
//                 })
//                 .catch(err => {
//                     console.log(err.message)
//                 })
//             }
//         });
//       }, []);
//     console.log(User)
//       return (
//         <AuthContext.Provider
//           value={{
//             User
//           }}
//         >
//             {children}
//         </AuthContext.Provider>
//       );
//     };