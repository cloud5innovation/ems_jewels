import React, {useState, useEffect, } from 'react';
// import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux'
import {usersReducer, } from './Store/Reducers/index';
import allActions from './Store/AllActions'
// import { getUsers } from './Store/Reducers/usersReducer';
import './App.css';

function App(props) {
  // const [users, setUsers] = useState([]);
  const Allusers = useSelector(state => state.users);
  // const users = useSelector(state => state.allActions.);

const dispatch = useDispatch();
  useEffect(() => {
    dispatch(allActions.userActions.getUsers())
  }, [])
  // console.log(Object.values(Allusers, ).)
  //  console.log(Allusers.first_name, 'state')
const usersArray = Object.values(Allusers)
console.log(usersArray[0])
  return (
    <div className="App">
      in app
      {/* {Allusers} */}
      {/* {usersArray.map(user  => <h3>
        {user.first_name}
      </h3>)} */}
      
   {usersArray[0].map( user => 
    <h3>
      {user.first_name}
    </h3>)}
      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

// export default connect (
//   mapStateToProps, 
//   {getUsers}
// )(App);

export default App