import styled from "styled-components";

const Features = () => {
    return (
        <FeaturesContainer>
            <FeaturesImage src="/assets/feature.jpg" alt="features" />
            <FeaturesTitle>Want to take your fitness journey to another level?</FeaturesTitle>
            <FeaturesText>Sign up and have access to differents tools to help you reach the next level in your fitness journey</FeaturesText>
        </FeaturesContainer>
    )
}

export default Features;

const FeaturesContainer = styled.div`
    position: relative;
    text-align: center;
    margin: 10% 15%;
`;

const FeaturesImage = styled.img`
    display: block;
    margin: 0 auto;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        width: 75%;
      }
    //style for tablet
    @media (min-width: 300px) and (max-width: 879px) {
        width: 70%;
      }
`;
const FeaturesTitle = styled.h1`
    font-size: 2rem;
    color: var(--fourth-color);
    margin-bottom: 2rem;
    position: absolute;
    top: 5%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 10px;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 1.3rem;
        margin-bottom: 1.3rem;
        padding: 5px;
      }
    //style for tablet
    @media (min-width: 500px) and (max-width: 879px) {
        font-size: 0.9rem;
        margin-bottom: 1rem;
        padding: 2px;
        top: 10%;
        left: 65%;
      }
    //style for phone
    @media (min-width: 300px) and (max-width: 879px) {
        font-size: 0.7rem;
        margin-bottom: 1rem;
        padding: 2px;
        top: 15%;
        left: 65%;
      } 
`;

const FeaturesText = styled.p`
    line-height: 1.8;
    font-size: 1.5rem;
    color: var(--primary-color);
    width: 30%;
    position: absolute;
    top: 75%;
    left: 40%;
    transform: translate(-50%, -50%);
    z-index: 1;
    background-color: rgba(0, 0, 0, 0.5);
    padding: 20px;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 1.3rem;
        line-height: 1.5;
        padding: 10px;
      }
    //style for tablet
    @media (min-width: 500px) and (max-width: 879px) {
        font-size: 0.9rem;
        line-height: 1;
        padding: 5px;
      }
    //style for phone
    @media only screen and (max-width: 499px) {
        font-size: 0.7rem;
        line-height: 1;
        padding: 5px;
      } 
`;