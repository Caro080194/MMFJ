import Navbar from "../Navbar";
import Footer from "../footer";
import styled from "styled-components";
import { LoggedInUserContext } from "../login/LoggedInUserContext";
import { useContext, useState } from "react";
import PostPRsContainer from "./PostPRsContainer";
import CurrentPRs from "./CurrentPRs";

const UserPage = () => {
    const { loggedInUserPRs, setLoggedInUserPRs, loggedInUser } = useContext(LoggedInUserContext);

    // Fetch the last PR update of the user
    const fetchLastPR = async () => {
        try {
            const response = await fetch(`/trackLastPR?userId=${loggedInUser._id}`);
            const data = await response.json();

            if (response.ok) {
                setLoggedInUserPRs(data.PRs);
            } else {
                console.log("Something went wrong: ", data.message);
            }
        } catch (error) {
            console.log("An error occurred: ", error.message);
        }
    };

    // Function to get the latest PR for each exercise
    const getLatestPRs = (prs) => {
        const latestPRs = {};

        // Filter out PRs with invalid dates
        const validPrs = prs.filter(pr => pr.date);

        validPrs.forEach((pr) => {
            const { exercise, weight, date } = pr;
            if (!latestPRs[exercise] || new Date(date) > new Date(latestPRs[exercise].date)) {
                latestPRs[exercise] = { weight, date };
            }
        });

        return latestPRs;
    };

    const latestPRs = getLatestPRs(loggedInUserPRs);

    // Array of all the exercises for the form
    const exercises = [
        "Back Squat",
        "Front Squat",
        "OHS",
        "Thruster",
        "Push Press",
        "Press",
        "Bench Press",
        "Deadlift",
        "Clean",
        "Clean and Jerk",
        "Snatch",
    ];

    // Message for the button of the form
    const [message, setMessage] = useState("");

    // State for the form to update the PR
    const [formData, setFormData] = useState({
        "Back Squat": { weight: "", date: "" },
        "Front Squat": { weight: "", date: "" },
        "OHS": { weight: "", date: "" },
        "Bench Press": { weight: "", date: "" },
        "Push Press": { weight: "", date: "" },
        "Press": { weight: "", date: "" },
        "Deadlift": { weight: "", date: "" },
        "Clean": { weight: "", date: "" },
        "Clean and Jerk": { weight: "", date: "" },
        "Snatch": { weight: "", date: "" },
        "Thruster": { weight: "", date: "" },
    });

    // Function to handle the change in the form
    const handleChangeForm = (event, exercise) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [exercise]: {
                ...formData[exercise],
                [name]: value,
            },
        });
    };

    // Send the post request to the db
    const handleUpdatePRs = async (event, exercise) => {
        event.preventDefault();

        const { weight, date } = formData[exercise];
        const userId = loggedInUser._id;
        setMessage("Updating PR...");
        try {
            const response = await fetch("https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/postPRs", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({ userId, exercise: exercise, weight, date }),
            });

            if (response.ok) {
                console.log(`Updated ${exercise} PR successfully`);
                setMessage("PR updated successfully");
                fetchLastPR();
            } else {
                const error = await response.text();
                console.error(`Update ${exercise} PR failed:`, error);
                setMessage("Failed to update PR");
            }
        } catch (error) {
            console.error(`An error occurred while updating ${exercise} PR:`, error);
            setMessage("An error occurred while updating PR");
        }
    };

    return (
        <>
            <Navbar />
            <MainContainer>
                <h1>Hello {loggedInUser.fname}</h1>
                <Text>
                    Welcome to your fitness space! Here, you can easily log and track your personal records (PRs) for various exercises, helping you monitor progress and stay motivated.
                    <br /><br />To enhance your performance and overall mobility, our platform features a comprehensive collection of YouTube videos showcasing effective mobility exercises.
                    <br />Depending on your workout, you'll find specific pre-workout and post-workout mobility routines targeting either particular movements or broader body areas.
                    <br /><br />Additionally, we recommend incorporating daily mobility practices with morning, lunch break, and evening routines to further improve your flexibility and overall well-being.
                    <br /> Start integrating these routines, follow along with the videos, and watch yourself hit new PRs while feeling great every day!
                </Text>
                <CurrentPRs latestPRs={latestPRs} />
                <PostPRsContainer exercises={exercises} formData={formData} handleChangeForm={handleChangeForm} handleUpdatePRs={handleUpdatePRs} message={message} />
            </MainContainer>
            <Footer />
        </>
    );
};

export default UserPage;


const MainContainer = styled.div`
  display: flex;
  margin: 7% 10%;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h1{
    color: var(--third-color);
    margin-bottom: 45px;
    font-size: 4rem;
  }
`;

const Text = styled.p`
text-align: center;
background-color: var(--secondary-color);
padding: 35px;
border-radius: 5px;
width: 70%;
color: var(--primary-color);
line-height: 1.8;
font-size: 1.5rem;
margin-bottom: 10%;
`

