import React, {useContext, useEffect, useState} from 'react';
import axios from '../../axiosInstance';
import { withRouter } from 'react-router-dom';
import { AuthContext } from '../../Context/authContext';
import { UserContext } from '../../Context/usersContext';
import ProfileNav from './../../Containers/Nav/ProfileNav';
import {Wrapper, DarkTitle, ContentArea, } from '../../GlobalStyles/styles';
const Profile = (props) => {


    const { currentUser} = useContext(AuthContext);
    const [userProfile, setUserProfile] = useContext(UserContext);
    const [isloggedIn, setLoggedIn] = useContext(UserContext)
    const { firebase_id } = props.match.params;
    console.log('is logged in', isloggedIn)
  

    useEffect(() => {
        axios
          .get(`/user/${firebase_id}`)
          .then(res => {
            setUserProfile(res.data);
          })
          .catch(err => {
            console.log(err.message);
          });
      }, []);
      console.log('user profile', userProfile)
    return (
      <Wrapper>
        <ContentArea style={{width: '100%'}}>
        <ProfileNav params={props.match.params}/>
        <DarkTitle>ORDERS</DarkTitle>
        </ContentArea>
       

      </Wrapper> 
    )
};

export default withRouter(Profile)