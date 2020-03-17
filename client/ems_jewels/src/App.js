import React, {useState, useEffect, } from 'react';
import { Route, } from 'react-router-dom';
import Nav from './Containers/Nav/Nav';
import Form from './Components/Forms/Forms';
import HomePage from './Views/HomePage/Home';
import ProfilePage from './Views/Profile/Profile';
import { ContextProvider } from './Context/State';
import {AuthProvider} from './Context/authContext';
import {UserProvider} from './Context/usersContext';
import {ShopProvider} from './Context/shopContext';
import { storage, auth, googleProvider } from './firebaseConfig';
// import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import {usersReducer, } from './Store/Reducers/index';
import allActions from './Store/AllActions'
// import { getUsers } from './Store/Reducers/usersReducer';
import './App.css';

function App(props) {
  
  return (
    // <ContextProvider>

  
     <AuthProvider>
      <UserProvider> 
<ShopProvider>
  {/* <div className="App"> */}
        <Nav/>
    
        <Route exact path='/profile/:firebase_id' component={ProfilePage} />
        <Route exact path='/' component={HomePage} />
        <Route exact path='/register' component={Form}/>
        {/* <Form/> */}
        {/* </div> */}
        </ShopProvider>
  </UserProvider>
 
    {/* // </ContextProvider> */}
    </AuthProvider> 
  );
}

export default App