import React, {useContext} from 'react';
import { auth} from './../../firebaseConfig';
import { NavLink, withRouter } from 'react-router-dom';
import {UserContext} from '../../Context/usersContext'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import {Header, NavWrapper, LinkContainer, Logo, PageNav, PageNavLinks,MobileLinks, MobileNav} from './../../GlobalStyles/styles';

const Nav= (props) => {
    const [isloggedIn] = useContext(UserContext);
    const [userProfile] = useContext(UserContext);

    const logout = () => {
        auth.signOut();
        localStorage.clear();
        props.history.push("/");
      };


      console.log('props', props)
    return (
        <Header>
            <NavWrapper endNav>
                <LinkContainer>
                
                <NavLink className='link' activeClassName='activeRoute' exact to='/signin'>
                    {isloggedIn ? <button onClick={logout}>Sign Out</button> : 'Sign In'}
                </NavLink>
                <span >or</span>
                <NavLink className='link' activeClassName='activeRoute' exact to={isloggedIn ? `/profile/${userProfile.firebase_id}/settings` : '/register'}>
                {isloggedIn ? 'Account' : 'Create An Account'}
                </NavLink>
                <NavLink exact to='/cart'>
                    <FontAwesomeIcon className='icon' icon={faShoppingCart}/>
                </NavLink>
                </LinkContainer>
            </NavWrapper>
            <Logo>
                
            </Logo>

            <PageNav mobile>
                {/* <MobileLinks> */}
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/earrings'> 
                        earrings
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/necklaces'> 
                        necklaces
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/bracelets'> 
                        bracelets
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/rings'> 
                        rings
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/guypieces'> 
                        guy pieces
                    </NavLink>
                {/* </MobileLinks> */}

                {/* <MobileLinks bottom> */}
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/earringssets'> 
                        earrings sets
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/chokers'> 
                        chokers
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/hairclips'> 
                        hairclips
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/anklets'> 
                        anklets
                    </NavLink>
                {/* </MobileLinks> */}
            </PageNav>

            {/* MOBILE NAV */}
            <MobileNav>
            <PageNav >
                <MobileLinks>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/earrings'> 
                        earrings
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/necklaces'> 
                        necklaces
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/bracelets'> 
                        bracelets
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/rings'> 
                        rings
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/guypieces'> 
                        guy pieces
                    </NavLink>
                </MobileLinks>

                <MobileLinks bottom>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/earringssets'> 
                        earrings sets
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/chokers'> 
                        chokers
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/hairclips'> 
                        hairclips
                    </NavLink>
                    <NavLink className='link' activeClassName='activeRoute'  exact to='/anklets'> 
                        anklets
                    </NavLink>
                </MobileLinks>
            </PageNav>
            </MobileNav>
        </Header>    
    )
};

export default withRouter(Nav);