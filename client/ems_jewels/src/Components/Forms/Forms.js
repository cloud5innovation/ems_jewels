


  import React, {useEffect, useState, useContext} from 'react';
  import axios from './../../axiosInstance';
  import { UserContext } from './../../Context/usersContext';
  import { storage, auth, googleProvider } from './../../firebaseConfig';
  import { withRouter } from 'react-router-dom';
  
  const Form = (props) => {
    // const users = useSelector(state => state.allActions.);
  
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [first_name, setFirstName] = useState('');
    const [last_name, setLastName] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [stateInp, setStateInp] = useState('');
    const [zip, setZip] = useState('');
    const [phone, setPhone] = useState('');
  
    const [isloggedIn, setLoggedIn] = useContext(UserContext)
   const createEmailPasswordAccount = () => {
      if (!email || !password) return;
      auth.createUserWithEmailAndPassword(email, password)
      .then((user) => {
          if (user) {
            
              const { uid, ma, email } = user;
              localStorage.setItem("token", ma);
              console.log("incoming user", ma);
              if (user.email) {
                setLoggedIn(true)
               
                const { email } = user;
                const userObj = {
                  email,
                  firebase_id: uid,
                  first_name,
                  last_name,
                  address,
                  city,
                  stateInp,
                  zip,
                  phone
                };
                axios
                .post(`/users/register`, { ...userObj })
                .then(res => {
                    if (res.status === 200) {
                      setLoggedIn(true)
                      props.history.push(`/profile/${userObj.firebase_id}`)
                    }
                })
                .catch(err => {
                    console.log(err);
                });
               
              }
            }
          })
      
      .catch(err => {
        console.log(err);
      });
    };
   
    const inputChangeHandler = e => {
      
      const { name, value } = e.target;
      setEmail({[e.target.name]: e.target.value})
      setPassword({[e.target.name]: e.target.value})
      setFirstName({[e.target.name]: e.target.value})
      setLastName({[e.target.name]: e.target.value})
      // this.setState({ [name]: value });
    };
  
  
    
  // const signUpWithEmailAndPassword = () => {
  //       auth
  //         .createUserWithEmailAndPassword(email, password)
  //         .then(({ user }) => {
  //           if (user) {
                
  //             const { uid, ma, email } = user;
  //             console.log("incoming user", user);
  //             localStorage.setItem("token", ma);
  //             localStorage.setItem("firebaseId", uid);
  //             if (user.email) {
  //               const { email } = user;
  //               console.log("emailuser", ma);
  //               const userObj = {
  //                 email,
  //                 firebase_id: uid,
  //                 first_name,
  //                 last_name,
  //               };
                
              
  //             }
  //           }
  //         })
  //         .catch(err => {
  //           console.log("err", err)
         
  //         });
  //     // }
  //   };
  
  const signUpWithEmailAndPassword = () => {
      auth
        .createUserWithEmailAndPassword(email, password)
        .then(({ user }) => {
          if (user) {
            const { uid, ma, email } = user;
            console.log("incoming user", user);
            localStorage.setItem("token", ma);
            localStorage.setItem('firebase_id', uid);
            if (user.email) {
              const { email } = user;
              console.log("emailuser", user);
              const userObj = {
                email,
                firebase_id: uid,
                first_name,
                last_name,
                address,
                city,
                state: stateInp,
                zip,
                phone
              };
              // axios.defaults.headers.common["Authorization"] = user.ma;
              axios
                .post("/users/register", { ...userObj })
                .then(res => {
                  console.log(res,'res from regoster')
                  if (res.status === 201) {
                    setLoggedIn(true)
                    props.history.push(`/profile/${userObj.firebase_id}`)
                  }
                 
                 
                })
                .catch(err => {
                  console.log(err);
                });
            }
          }
        })
        .catch(err => {
          console.log("err", err)
          
        });
    // }
  };
    const logout = () => {
      auth.signOut();
      localStorage.clear();
      props.history.push("/");
    };
  console.log(email, 'email')
      return (

      
        <div style={{border: '2rem solid red'}}>
            <div className="sign-up-wrapper">
      <div className="sign-up-left" />
      <div className="sign-up-right">
        
          
            
            <form
              
              onSubmit={e => e.preventDefault() && false}
            >
            
            <h2>
              Register Account
            </h2>
              
                <label htmlFor="email">Email Address</label>
                <input
                  className="input-field"
                  id="email"
                  name="email"
         
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                />
              
             
                <label htmlFor="password">Password</label>
                <input
                  className="input-field"
                  name="password"
                  type="password"
                  id="password"
             
                  value={password}
                  onChange={e => setPassword(e.target.value)}
                />
             
             <label htmlFor="password">First Name</label>
                <input
                  className="input-field"
                  name="fist-name"
                  type="text"
                  id="first-name"
                 
                  value={first_name}
                  onChange={e => setFirstName(e.target.value)}
                />
                
                <label htmlFor="last name">Last name</label>
                <input
                  className="input-field"
                  name="last name"
                  type="text"
                  id="last-name"
          
                  value={last_name}
                  onChange={e => setLastName(e.target.value)}
                />
   <label htmlFor="address">Address</label>
                <input
                  className="input-field"
                  name="address"
                  type="text"
                  id='address'
          
                  value={address}
                  onChange={e => setAddress(e.target.value)}
                />
                   <label htmlFor="city">City</label>
                <input
                  className="input-field"
                  name='city'
                  type="text"
                  id='city'
          
                  value={city}
                  onChange={e => setCity(e.target.value)}
                />
                    <label htmlFor="stateInp">State</label>
                <input
                  className="input-field"
                  name='stateInp'
                  type="text"
                  id='stateInp'
          
                  value={stateInp}
                  onChange={e => setStateInp(e.target.value)}
                />
                     <label htmlFor='zip'>Zip</label>
                <input
                  className="input-field"
                  name='zip'
                  type="text"
                  id='zip'
          
                  value={zip}
                  onChange={e => setZip(e.target.value)}
                />
                    <label htmlFor='phone'>Phone Number</label>
                <input
                  className="input-field"
                  name='phone'
                  type="text"
                  id='phone'
          
                  value={phone}
                  onChange={e => setPhone(e.target.value)}
                />
              <button
                type="submit"
               
                onClick={signUpWithEmailAndPassword}
                className='sign-up-button'
              >
                Register
              </button>
              <button
                type="submit"
               
                onClick={logout}
                className='sign-up-button'
              >
                log out
              </button>
             
            </form>
          
      </div>
    </div>
          
        </div>
        // <div style={{border: '1px solid red'}}>
        //   <form >
        //     <label htmlFor='email'>Email</label>
        //     <input
        //       id='email'
        //       name='email'
        //       type='text'
        //       value={email}
        //       onChange={(e) => setEmail(e.target.value)}
        //     />
        //      <label htmlFor='first_name'>Fist Name</label>
        //     <input
        //       id='first_name'
        //       name='first_name'
        //       type='text'
        //       value={first_name}
        //       onChange={(e) => setFirstName(e.target.value)}
        //     />
        //       <label htmlFor='last_name'>Last Name</label>
        //     <input
        //       id='last_name'
        //       name='last_name'
        //       type='text'
        //       value={last_name}
        //       onChange={(e) => setLastName(e.target.value)}
        //     />
        //       <label htmlFor='address'>Address</label>
        //     <input
        //       id='address'
        //       name='address'
        //       type='text'
        //       value={address}
        //       onChange={(e) => setAddress(e.target.value)}
        //     />
        //      <label htmlFor='city'>City</label>
        //     <input
        //       id='city'
        //       name='city'
        //       type='text'
        //       value={city}
        //       onChange={(e) => setCity(e.target.value)}
        //     />
        //      <label htmlFor='state'>State</label>
        //     <input
        //       id='state'
        //       name='state'
        //       type='text'
        //       value={stateInp}
        //       onChange={(e) => setStateInp(e.target.value)}
        //     />
        //       <label htmlFor='zip'>Zip</label>
        //     <input
        //       id='zip'
        //       name='zip'
        //       type='text'
        //       value={zip}
        //       onChange={(e) => setZip(e.target.value)}
        //     />
        //        <label htmlFor='phoneNumber'>Phone Number</label>
        //     <input
        //       id='phone'
        //       name='phone'
        //       type='text'
        //       value={phone}
        //       onChange={(e) => setPhone(e.target.value)}
        //     />
        //     <button onClick={signUpWithEmailAndPassword}>Register</button>
        //   </form>
        //   <button onClick={logout}>Log Out</button>
        // </div>
          // <AuthContext>
  
        
      //     <div style={{border: '2rem solid red'}}>
      //        <div style={{border: '2rem solid red'}}>
      //       <div className="sign-up-wrapper">
      // <div className="sign-up-left" />
      // <div className="sign-up-right">
        
          
          
  
            )}
            export default Form