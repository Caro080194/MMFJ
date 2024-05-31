import Navbar from '../Navbar';
import Footer from '../footer';
import { LinkButton, CardContainer, CardsContainer, MainContainer } from '../StyledComponents';

//Component for the homepage of post workout, allowed the user to choose between by movement or body area 
const PostWorkout = () => {

  return (
    <>
      <Navbar />
      <MainContainer>
        <h1>Choose how you want to stretch ...</h1>
        <CardsContainer>
        <CardContainer>
          <img src='./assets/body2.jpg' alt='stretch girl' />
          <LinkButton to={"/post-workout/bodyArea"}>By Body Area</LinkButton>
        </CardContainer>
        <CardContainer>
          <img src='./assets/movement2.jpg' alt='snatch girl' />
          <LinkButton to={"/post-workout/movement"}>By Movement</LinkButton>
        </CardContainer>
        </CardsContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default PostWorkout;



