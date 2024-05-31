import { Link } from "react-router-dom";
import styled from "styled-components";
import { useMobileMenu } from "../hooks/useMobileMenu";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { LoggedInUserContext } from "./login/LoggedInUserContext";
import { useContext } from "react";

const Navbar = () => {
  // Get the state and functions from the useMobileMenu hook, will be used as props
  const { mobile, showmenu, toggleMenu } = useMobileMenu();

  // Get the state and functions from the LoggedInUserContext
  const { loggedInUser, logOut, isLogin } = useContext(LoggedInUserContext);

  // Get the first name of the logged-in user, or set it to an empty string if no user is logged in
  const name = loggedInUser ? loggedInUser.fname : "";

    return (
        //if mobile not true then render a certain layout. If user if login then render user page, general mobility and log out
        <NavContainer mobile={mobile} showmenu={showmenu}>
            {!mobile && (
                <>
                    <Logo to="/">
                        <img src="/assets/Nav_icon.png" alt="Logo" />
                    </Logo>
                    {!isLogin && (
                        <>
                            <NavLinks>
                                <LinkButton to="/pre-workout">Pre-workout</LinkButton>
                                <LinkButton to="/post-workout">Post-workout</LinkButton>
                            </NavLinks>
                            <NavLinks>
                                <LinkButton to="/signUp">Sign up</LinkButton>
                                <LinkButton to="/login">Login</LinkButton>
                            </NavLinks>
                        </>
                    )}
                    {isLogin && (
                        <>
                            <NavLinks>
                                <LinkButton to="/pre-workout">Pre-workout</LinkButton>
                                <LinkButton to="/post-workout">Post-workout</LinkButton>
                                <LinkButton to="/general-mobility">General Mobility</LinkButton>
                            </NavLinks>
                            <NavLinks>
                                <LinkButton to="/user-page">{name}</LinkButton>
                                <LinkButton to="/" onClick={logOut}>Log out</LinkButton>
                            </NavLinks>
                        </>
                    )}

                </>
            )}
            {mobile && (
                <>
                    <MenuIcon onClick={toggleMenu}>
                        <Logo to="/">
                            <img src="/assets/Nav_icon.png" alt="Logo" />
                        </Logo>
                        <FontAwesomeIcon icon={showmenu ? faTimes : faBars} size="2x" />
                    </MenuIcon>
                    {showmenu && (
                        <NavLinks showmenu={showmenu}>
                            <LinkButton to="/pre-workout">Pre-workout</LinkButton>
                            <LinkButton to="/post-workout">Post-workout</LinkButton>
                            {!isLogin && (
                                <>
                                    <LinkButton to="/signUp">Sign up</LinkButton>
                                    <LinkButton to="/login">Login</LinkButton>
                                </>
                            )}
                            {isLogin && (
                                <>
                                    <LinkButton to="/user-page">{name}</LinkButton>
                                    <LinkButton to="/" onClick={logOut}>Log out</LinkButton>
                                </>
                            )}
                        </NavLinks>
                    )}
                </>
            )}
        </NavContainer>
    );
};

export default Navbar;

const NavContainer = styled.nav`
    display: flex;
    position: fixed;
    margin: 0;
    padding: 10px 0;
    top: 0;
    justify-content: space-around;
    width: 100vw;
    align-items: center;
    background-color: var(--secondary-color);
    z-index: 1000;
    flex-direction: ${({ mobile }) => (mobile ? 'column' : 'row')};
    height: ${({ mobile, showmenu }) => (mobile && showmenu ? '100vh' : 'auto')};

    button {
        margin: 0;
        color: var(--fith-color);
        border: none;
        cursor: pointer;
        font-size: 1rem;
        background-color: transparent;
        &:hover {
            color: var(--fourth-color);
        }
    }
`;

const Logo = styled(Link)`
    background-color: transparent; 
    border: none;
    padding: 0;
    text-decoration: none;
`;

const NavLinks = styled.ul`
    list-style: none;
    display: flex;
    align-items: center;
    gap: 5rem;
    flex-direction: ${({ showmenu }) => (showmenu ? 'column' : 'row')};
    padding: ${({ showmenu }) => (showmenu ? '0' : 'auto')};
`;

const LinkButton = styled(Link)`
    margin: 0;
    color: var(--fith-color);
    border: none;
    cursor: pointer;
    text-decoration: none;
    &:hover {
        color: var(--fourth-color);
    }
`;

/* Phones style components */
const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    cursor: pointer;
    width: 90vw;
    margin-right: 7%;
`;
