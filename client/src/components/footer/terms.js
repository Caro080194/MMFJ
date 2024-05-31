import styled from "styled-components";
import Navbar from "../Navbar";

const TermOfUse = () => {
    return (
        <>
            <Navbar />
            <TermsContainer>
                <TermsTitle>Terms of Use</TermsTitle>
                <TermsText>
                    Welcome to Motion Mind Fitness Journey!<br />
                    By accessing and using Motion Mind Fitness Journey, you agree to comply with and be bound
                    by the following terms and conditions of use. Please read these terms carefully before using our website.
                </TermsText>
                <TermsTitle>1. Acceptance of Terms</TermsTitle>
                <TermsText>
                    By accessing or using Motion Mind Fitness Journey, you agree to be legally bound by these Terms of Use.
                    If you do not agree with any of these terms, you are prohibited from using or accessing this site.
                </TermsText>
                <TermsTitle>2. Use of Content</TermsTitle>
                <TermsText>
                    Motion Mind Fitness Journey provides workout videos for preworkout and post workout routines.
                    Users are permitted to access and view these videos without the need for registration.<br />
                    Registered users gain access to additional features such as tracking their workout progress.
                    By signing up, users agree to provide accurate and truthful information for their accounts.<br />
                    Motion Mind Fitness Journey stores user data for the purpose of providing tracking features.
                    We are committed to protecting user privacy and do not share user data with third parties without consent, except as required by law.
                </TermsText>
                <TermsTitle>3. Intellectual Property Rights</TermsTitle>
                <TermsText>
                    The content provided on Motion Mind Fitness Journey, including workout videos, text,
                    graphics, logos, and images, are the property of Motion Mind Fitness Journey.<br />
                    Any use, reproduction, or distribution of the content without prior written permission from Motion Mind Fitness Journey
                    is strictly prohibited.<br />
                    Motion Mind Fitness Journey may use CrossFit information for the purpose of providing workout content.
                    However, we do not claim ownership of any CrossFit trademarks, logos, or copyrighted material.
                </TermsText>
                <TermsTitle>4. Limitation of Liability</TermsTitle>
                <TermsText>
                    Motion Mind Fitness Journey is provided on an "as-is" and "as-available" basis.
                    We make no warranties, expressed or implied, regarding the accuracy, completeness, or reliability of the content.
                    Users acknowledge that the use of Motion Mind Fitness Journey is at their own risk.
                    We shall not be liable for any damages arising from the use of this website.
                </TermsText>
                <TermsTitle>5. Changes to Terms</TermsTitle>
                <TermsText>
                    Motion Mind Fitness Journey reserves the right to modify these Terms of Use at any time
                    without prior notice. It is the responsibility of users to review these terms periodically for changes.
                </TermsText>
            </TermsContainer>
        </>
    );
};

export default TermOfUse;

const TermsContainer = styled.div`
    position: relative;
    text-align: center;
    margin: 10% 25%;
    //style for tablet
    @media (min-width: 551px) and (max-width: 879px) {
       margin-top: 15%;
      }
    //style for phone
    @media only screen and (max-width: 550px) {
       margin-top: 20%;
    } 
`;

const TermsTitle = styled.h1`
    font-size: 2.5rem;
    color: var(--secondary-color);
    margin-bottom: 2rem;
    
    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
      font-size: 2rem;
      margin-bottom: 1.5rem;
    }
    //style for tablet/phone
    @media (min-width: 300px) and (max-width: 879px) {
      font-size: 1rem;
      margin-bottom: 1rem;
    }
`;

const TermsText = styled.p`
    line-height: 1.8;
    font-size: 1.3rem;
    
    //style for laptop
    @media (min-width: 880px) and (max-width: 1200px) {
      font-size: 1rem;
      line-height: 1.8;
    }
    //style for tablet/phone
    @media (min-width: 300px) and (max-width: 879px) {
      font-size: 0.8rem;
      line-height: 1.3;
    }
`;