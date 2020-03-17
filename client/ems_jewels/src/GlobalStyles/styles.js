import styled from 'styled-components';

const goldColor = '#F4D212';
const purpleColor = '#AA65FF';
const whiteColor = '#FFFF';
const fontColor = '#354248';
const lightyellowColor = '#FEFCEE';
const lightGrayColor = '#999';

const smrtphn = '370px'; 
const tablet = '600px';
const laptop = '1440px';

export const Wrapper = styled.main`
    margin-top: 2rem;
    height: ${props => props.carousel ? '200px' : null};
    display: flex;
    flex-direction: ${props => props.column ? 'column' : null};
    align-items: center;
    /* border: 1px solid black; */
    
`;

export const Header = styled.header`


    /* border: 1px solid red; */
`;

export const ContentArea = styled.section`
    display: flex;
    flex-direction: ${props => props.horizontal ? null : 'column'};
    align-items: center;
    justify-content: ${props => props.horizontal ? 'space-around' : null};
    margin: 3rem 1rem;
    /* margin-bottom: 2rem; */
    width: ${props => props.horizontal ? '80%' : null};
    border: 1px solid green;
    @media only screen and (max-width: ${smrtphn}) {
        width: 90%;
        display: flex;
        flex-direction: ${props => props.reverse ? 'column-reverse' : 'column'};
        margin: ${props => props.about ? '2rem auto' : null};
        /* border: 1px solid black; */
    }

    svg {
        width: 50%;
        border: 1px solid red;
    }
   
`;

export const NavWrapper = styled.nav`
    display: flex;
    justify-content: ${props => props.endNav ? 'flex-end': null};
    background-color: ${props => props.endNav ? `${purpleColor}` : 'none'};
    height: 7vh;
    font-weight: 700;
    font-size: 1rem;
    box-sizing: border-box;
    border-bottom: ${props => props.endNav ? `5px solid ${goldColor}` : 'none'};
    @media only screen and (max-width: ${tablet}) {
        height: 9vh;
    }
    

`;

export const LinkContainer = styled.ul`
    display: flex;
    justify-content:space-around;
    margin: auto 1.5rem auto 0;
    align-items: center;
    width: 20%;
     /* border: 1px solid red; */
     .link {
        color: ${whiteColor};
       text-decoration: none;
        cursor: pointer;
            &:hover {
                color: ${goldColor}
            }
    }
    
    span {
        color: ${goldColor};
    }

    .icon {
    color: ${whiteColor};
    }
    @media only screen and (max-width: ${tablet}) {
        width: 60%;
    }
`;

export const Logo = styled.h1`
    background-color: ${lightyellowColor};
    height: 250px;;
    border-radius: 50%;
    width: 15%;
    text-align: center;
    margin: 3rem auto 0 auto;
    border: 1px solid pink;
`;

export const PageNav = styled.nav`
    display: flex;
    justify-content: space-around;
    margin: 3rem auto 0 auto;
    width: 90%;
    /* border: 1px solid red; */
    .link {
        text-decoration: none;
        color: ${fontColor};
        text-transform: uppercase;
        font-size: .8rem;
        font-weight: 550;

        border-bottom: 1.2px solid transparent; /*CHANGED BORDER BOTTOM TO TRANSPARENT TO PREVENT ELEMENT FROM  MOVING */
        &:hover {
                color: ${purpleColor};
                border-bottom: .1rem solid ${purpleColor};
            }

    }

    @media only screen and (max-width: ${tablet}) {
       display: ${props => props.mobile ? 'none' : 'flex'};
       flex-direction: column;

       .link {
           font-size: 1rem;
       }
    }
`;

export const PageNavLinks = styled.ul`
    /* color: ${fontColor}; */
    border: 1px solid pink;
   
`;

export const MobileLinks = styled.section`
/* display: none; */
     @media only screen and (max-width: ${tablet}) {
         display: flex;
         flex-direction: row;
         justify-content: space-around;
         align-items: center;
        border: 1px solid black;
        margin-bottom: 1.5rem;
        width: ${props => props.bottom ? '90%' : '100%'};
        margin: ${props => props.bottom ? '0 auto' : null};
    }
`;

export const Left = styled.section`
     @media only screen and (max-width: ${tablet}) {
         display: flex;
         flex-direction: row;
         justify-content: space-around;
         align-items: center;
        border: 1px solid black;
        width: 90%;
        margin: 0 auto;
    }
`;

export const MobileNav = styled.section`
    display: none;
    @media only screen and (max-width: ${tablet}) {
        display: block;
    }
`;

export const DarkTitle = styled.h2`
    color: ${fontColor};
    text-align: left;
    align-self: flex-start;
    margin-top: 3rem;
    border: 1px solid orange;
`;
export {
    whiteColor, 
    goldColor,
    purpleColor,
    fontColor,
    lightyellowColor,
    lightGrayColor
}

