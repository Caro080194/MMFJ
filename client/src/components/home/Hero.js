import React from 'react';
import styled from 'styled-components';

const Hero = () => {
    return (
        <HeroContainer>
            <HeroImage src="/assets/hero.jpg" alt="hero" />
            <HeroText>
                <HeroTittle>Motion Mind Fitness Journey</HeroTittle>
                <HeroTextContent>Motion in Mind, Strength in Spirit</HeroTextContent>
            </HeroText>
        </HeroContainer>
    );
}

export default Hero;

// Styled components for Hero section
const HeroContainer = styled.div`
    position: relative;
    text-align: center;
    margin-top: 10%;
    //style for tablet
    @media (min-width: 551px) and (max-width: 879px) {
        margin-top: 15%;
      }
    //style for phone
    @media only screen and (max-width: 550px) {
        margin-top: 20%;
      } 
`;

const HeroImage = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        width: 70%;
      }
    //style for tablet
    @media (min-width: 551px) and (max-width: 879px) {
        width: 55%;
      }
    //style for phone
    @media only screen and (max-width: 550px) {
        width: 65%;
      } 
`;

const HeroText = styled.div`
    position: absolute;
    top: 25%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        width: 50%;
        padding: 10px;
      }
    //style for tablet
    @media (min-width: 300px) and (max-width: 879px) {
        width: 35%;
        padding: 5px;
      }
    //style for phone
    @media only screen and (max-width: 550px) {
        width: 45%;
        padding: 5px;
      }
`;

const HeroTittle = styled.h1`
    color: var(--primary-color);
    font-size: 3rem; 
    margin-bottom: 10px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 1.8rem; 
        margin-bottom: 5px;
      }
    //style for tablet
    @media (min-width: 300px) and (max-width: 879px) {
        font-size: 0.9rem; 
        margin-bottom: 2px;
      }  
    //style for phone
    @media only screen and (max-width: 550px) {
        font-size: 0.7rem; 
        margin-bottom: 2px;
      }
`;
const HeroTextContent = styled.h2`
    color: var(--primary-color);
    font-size: 2rem;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 0.9rem;
      }
    //style for tablet
    @media (min-width: 551px) and (max-width: 879px) {
        font-size: 0.5rem; 
      }  
      //style for phone
      @media only screen and (max-width: 550px) {
        font-size: 0.5rem; 
        }
`;

