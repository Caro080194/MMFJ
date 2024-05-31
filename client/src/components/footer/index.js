import styled from "styled-components";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <FooterContainer>
              <p>© 2024 Caroline Le Ny</p>
              <LinkButton to={"/terms-of-use"}>Terms of Use</LinkButton>
        </FooterContainer>
    );
};

export default Footer;

const FooterContainer = styled.div`
    background-color: var(--secondary-color);
    display: flex;
    justify-content: space-around;
    align-items: center; 
    bottom: 0;
    width: 100vw;
    height: 60px;
    color: var(--fith-color);
`;

const LinkButton = styled(Link)`
    margin: 0;
    border: none;
    cursor: pointer;
    text-decoration: none;
    color: var(--fith-color);
    &:hover {
        color: var(--fourth-color);
    }
`;