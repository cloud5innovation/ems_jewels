import React, { useState, useEffect, useContext }  from 'react';
import axios from 'axios';
import { AuthContext } from './authContext';

// export const UserContext = React.createContext();


// export const UserProvider = ({children}) => {
  
  
//     return (
//         <UserContext.Provider 
//         value ={[userProfile, setUserProfile]}
//         // value ={userProfile}
//         >
//             {children}
//         </UserContext.Provider>
//     )
// }





// export const UserContext = React.createContext();



// export const UserProvider = ({children}) => {
//     
//     const [userProfile, setUserProfile] = useState({});



//     // const [UserProfile, setUserProfile] = useState(null);
    
//     return (
//         <UserContext.Provider value ={[UserProfile, setUserProfile]}>
//             {children}
//         </UserContext.Provider>
//     )
// 



export const UserContext = React.createContext({});


export const UserProvider = ({children}) => {
    const {currentUser} = useContext(AuthContext);

    const [userProfile, setUserProfile] = useState({});
    const [isloggedIn, setLoggedIn] = useState(false);
   
     useEffect(() => {
        if (currentUser) {
            setLoggedIn(true)
        }
        // console.log(delProduct)
      }, []);
    return (
        <UserContext.Provider value ={
            [userProfile, setUserProfile],
            [isloggedIn, setLoggedIn]
        }>
            {children}
        </UserContext.Provider>
    )
}