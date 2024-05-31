import Navbar from '../Navbar';
import Footer from '../footer';
import { LinkButton, CardContainer, CardsContainer, MainContainer } from '../StyledComponents';

//Component for the homepage of general mobility, allowed the user to choose between by morning or night 
const GeneralMobility = () => {

    return (
        <>
        <Navbar/>
        <MainContainer>
            <h1>Choose according to your need ...</h1>
            <CardsContainer>
                <CardContainer>
                    <img src='./assets/morning.png' alt='sunrise'/>
                    <LinkButton to={"/general-mobility/morning"}>Morning</LinkButton>
                </CardContainer>
                <CardContainer>
                    <img src='./assets/night.png' alt='sunset'/>
                    <LinkButton to={"/general-mobility/night"}>Night</LinkButton>
                </CardContainer>
            </CardsContainer>
        </MainContainer>
        <Footer/>
        </>
    );
};

export default GeneralMobility;