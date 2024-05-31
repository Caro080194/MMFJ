import styled from "styled-components";
import { Link } from 'react-router-dom';

//Styled components for pre-workout/post-workout/general-mobility body-area/movement/morning/night

const PageContainer = styled.div`
  margin: 6% 4%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;

  //style for big laptop
  @media (min-width: 1031px) and (max-width: 1450px) {
    margin: 8% 2%;
    justify-content: space-evenly;
  }

  //style for small laptop/big tablet
  @media (min-width: 880px) and (max-width: 1030px) {
    margin: 10% 2%;
    justify-content: space-evenly;
  }
  //style for small tablet
  @media (min-width: 500px) and (max-width: 879px) {
    margin: 15% 2%;
    justify-content: space-evenly;
  }
  //style for mobile
  @media (max-width: 499px) {
    margin: 25% 2%;
    justify-content: space-evenly;
  }
`;

const FilterMenuContainer = styled.div`
  background-color: var(--secondary-color);
  width: 15%;
  height: 20%;
  margin: 2% 0;
  border-radius: 5px;
  padding: 10px;

  h2 {
    margin: 10%;
    color: var(--primary-color);
  }

  //style for laptop
  @media (min-width: 880px) and (max-width: 1450px) {
    h2{
      font-size: 1rem;
    }
    margin: 2% 2%;
    width: 25%;
  }
  //style for tablet/phone
  @media (max-width: 879px) {
    h2{
      font-size: 1rem;
    }
    margin: 2% 2%;
    width: 35%;
  }
`;

const FilterOption = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  input {
    margin-right: 8px;
  }

  label {
    color: var(--fith-color);
    margin-left: 15px;
    font-size: 1.2rem;
  }
  //style for laptop
  @media (min-width: 880px) and (max-width: 1450px) {
    label {
      font-size: 1rem;
    }
  }
  //style for tablet
  @media (min-width: 441px) and (max-width: 879px) {
    label {
      font-size: 0.9rem;
    }
  }
  //style for mobile
  @media (max-width: 440px) {
    label {
      font-size: 0.7rem;
    }
    margin-bottom: 5px;
  }
`;

const Checkbox = styled.input`
  appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid #ccc;
  border-radius: 3px;
  outline: none;
  cursor: pointer;
  position: relative;
  background-color: var(--primary-color);
  margin: 15px;

  &:checked {
    background-color: var(--fourth-color);
    border: 1px solid var(--primary-color);
  }

  &:checked::after {
    content: '\u2713'; 
    font-size: 24px; 
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  //style for mobile
  @media (max-width: 440px) {
    width: 16px;
    height: 16px;
  }
`;

const VideosContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 85%;
  justify-content: space-between;

  //style for laptop/tablet
  @media (min-width: 880px) and (max-width: 1450px) {
    flex-direction: row;
    justify-content: center;
    width: 70%;
  }
  //style for small tablet/mobile
  @media (max-width: 879px) {
    flex-direction: row;
    justify-content: center;
  }
`;

const VideoWrapper = styled.div`
  flex: 0 1 calc(50% - 10px);
  margin-bottom: 20px;
`;

//Styled components for main page of post-workout and pre-workout

const MainContainer = styled.div`
display: flex;
margin: 10% 10%;
flex-direction: column;
justify-content: center;
align-items: center;

h1{
  color: var(--third-color);
  margin: 0;
}
`;

const CardsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  margin: auto 10%;
`;

const CardContainer = styled.div`
  display: flex;
  flex-direction: column;

  img{
    margin: 5% 10%;
    border-radius: 5px;
  }
`;

const LinkButton = styled(Link)`
  background-color: var(--secondary-color);
  color: var(--fith-color);
  padding: 0.75rem 1.5rem;
  margin: 5% auto;
  border: none;
  border-radius: 4px;
  font-size: 1.5rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  text-decoration: none;
  
  &:hover {
  background-color: var(--third-color);
  }
`;


export {PageContainer, FilterMenuContainer, FilterOption, Checkbox, VideosContainer, VideoWrapper, LinkButton, CardContainer, CardsContainer, MainContainer};