import Navbar from "../Navbar";
import Hero from "./Hero";
import About from "./About";
import Features from "./Features";
import Footer from "../footer";

//Get all the component for the home page and render same
const Home = () => {
  return (
    <>
    <Navbar/>
    <Hero/>
    <About/>
    <Features/>
    <Footer/>
    </>
  )
};

export default Home;
