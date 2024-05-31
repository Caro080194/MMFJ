import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/home/index.js";
import SignUp from "./components/signUp/index.js";
import Login from "./components/login/index.js";
import PreWorkout from "./components/pre-workout/index.js";
import PostWorkout from "./components/post-workout/index.js";
import UserPage from "./components/user-page/index.js";
import TermOfUse from "./components/footer/terms.js";
import PreWorkoutBodyArea from "./components/pre-workout/body  area component/index.js";
import PreWorkoutMovement from "./components/pre-workout/movement component/index.js";
import PostWorkoutMovement from "./components/post-workout/movement component/index.js";
import PostWorkoutBodyArea from "./components/post-workout/body area component/index.js";
import GeneralMobility from "./components/general-mobility/index.js";
import GeneralMobilityNight from "./components/general-mobility/night/index.js";
import GeneralMobilityMorning from "./components/general-mobility/morning/index.js";

//Set all the route for the website
const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/signUp" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="/pre-workout" element={<PreWorkout/>}/>
        <Route path="/post-workout" element={<PostWorkout/>}/>
        <Route path="/pre-workout/movement" element={<PreWorkoutMovement/>}/>
        <Route path="/pre-workout/bodyArea" element={<PreWorkoutBodyArea/>}/>
        <Route path="/post-workout/movement" element={<PostWorkoutMovement/>}/>
        <Route path="/post-workout/bodyArea" element={<PostWorkoutBodyArea/>}/>
        <Route path="/general-mobility" element={<GeneralMobility/>}/>
        <Route path="/general-mobility/night" element={<GeneralMobilityNight/>}/>
        <Route path="/general-mobility/morning" element={<GeneralMobilityMorning/>}/>
        <Route path="/user-page" element={<UserPage/>}/>
        <Route path="/terms-of-use" element={<TermOfUse/>}/>
      </Routes>
    </Router>
  );
};

export default App;