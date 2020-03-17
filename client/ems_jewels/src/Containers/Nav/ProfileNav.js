import React, {useContext} from 'react';
import { NavLink } from 'react-router-dom';
import {UserContext} from '../../Context/usersContext'
import {NavWrapper, } from './../../GlobalStyles/styles';
import {ProfileNavWrapper, ProfileLinkContainer, } from './page-nav-styles';

const ProfileNav = (props) => {
    const [userProfile, setUserProfile] = useContext(UserContext);
    console.log(userProfile, 'from page nav')
    // const { firebase_id } = props.match.params;
    return (
        <ProfileNavWrapper>
            <ProfileLinkContainer>
                <NavLink className='link' activeClassName='activeRoute' exact to='/'>
                    Home
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' exact to={`/profile/${userProfile.firebase_id}/settings`}>
                    Your Account
                </NavLink>
                <NavLink className='link' activeClassName='activeRoute' exact to={`/profile/orders/${userProfile.firebase_id}`}>
                    Your Orders
                </NavLink>
            </ProfileLinkContainer>
        </ProfileNavWrapper>
    )
};

export default ProfileNav