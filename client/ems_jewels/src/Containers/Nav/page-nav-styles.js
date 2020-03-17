import styled from 'styled-components';
import {whiteColor, goldColor, fontColor, lightGrayColor, purpleColor} from './../../GlobalStyles/styles';

export const ProfileNavWrapper = styled.nav`
    display: flex;
    font-size: .85rem;
    width: 100%;
    margin-top: 4rem;
    border: 1px solid orange;
    box-sizing: border-box;
    @media only screen and (max-width: 600px) {
        height: 9vh;
    }
    

`;

export const ProfileLinkContainer = styled.ul`
    display: flex;
    justify-content:space-around;
    width: 25%;
    font-weight: 400;
    border: 1px solid red;
     .link {
        color: ${lightGrayColor};
       text-decoration: none;
        cursor: pointer;
            &:hover {
                color: ${purpleColor};
            }
    }
    
    .activeRoute {
        color: ${purpleColor};
    }

    .icon {
    color: ${whiteColor};
    }
    @media only screen and (max-width: 600px) {
        width: 60%;
    }
`;