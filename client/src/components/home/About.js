import styled from "styled-components";

const About = () => {
    return (
        <AboutContainer>
            <AboutTitle>Welcome to Motion Mind Fitness Journey</AboutTitle>
            <AboutText>
                Our dedicated platform is designed to revolutionize your crossfit workout by prioritizing mobility and stretch routines. Whether you're aiming to improve flexibility, prevent injuries, or enhance recovery, we've got you covered.
                <br />
                <br />
                Explore our curated collection of pre-workout and post-workout videos, meticulously crafted to target key muscle groups, improve joint mobility, and optimize your overall performance. From dynamic stretches to targeted mobility drills, each video is designed to help you unlock your body's full potential and achieve peak physical condition.
                <br />
                <br />
                Join us on a journey of self-discovery and transformation as we delve into the transformative benefits of mobility and stretch training. Embrace the power of movement, elevate your fitness game, and unlock a world of possibilities with Motion Mind Fitness Journey.
            </AboutText>
        </AboutContainer>
    )
}

export default About;

// Styled components for the About section

const AboutContainer = styled.div`
    position: relative;
    text-align: center;
    margin: 10% 15%;
    background-color: #F2EFE5;
    padding: 2rem;
    border-radius: 5px;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        padding: 1rem;
      }
    //style for tablet/phone
    @media (min-width: 300px) and (max-width: 879px) {
        padding: 0.5rem;
    }
`;

const AboutTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 2rem;

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 2rem;
        margin-bottom: 1.5rem;
      }
    //style for tablet/mobile
    @media (max-width: 879px) {
        font-size: 1rem;
        margin-bottom: 1rem;
      }
`;

const AboutText = styled.p`
    line-height: 1.8;
    font-size: 1.5rem;
    color: var(--third-color);

    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
        font-size: 1rem;
        line-height: 1.8;
      }
    //style for tablet/mobile
    @media (max-width: 879px) {
        font-size: 0.8rem;
        line-height: 1.3;
      }
`;
