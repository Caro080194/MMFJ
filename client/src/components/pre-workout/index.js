import Navbar from '../Navbar';
import Footer from '../footer';
import { LinkButton, CardContainer, CardsContainer, MainContainer } from '../StyledComponents';

//Component for the homepage of pre workout, allowed the user to choose between by movement or body area 
const PreWorkout = () => {

  return (
    <>
      <Navbar />
      <MainContainer>
        <h1>Choose how you want to warm up ...</h1>
        <CardsContainer>
        <CardContainer>
          <img src='./assets/body.jpg' alt='stretch girl' />
          <LinkButton to={"/pre-workout/bodyArea"}>By Body Area</LinkButton>
        </CardContainer>
        <CardContainer>
          <img src='./assets/movement.jpg' alt='snatch girl' />
          <LinkButton to={"/pre-workout/movement"}>By Movement</LinkButton>
        </CardContainer>
        </CardsContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default PreWorkout;

