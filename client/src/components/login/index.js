import Navbar from "../Navbar";
import Footer from "../footer";
import LoginContainer from "./LoginContainer";
import { LoggedInUserContext } from "./LoggedInUserContext";
import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
    const { logIn, loggedInUser, loggedInUserPRs } = useContext(LoggedInUserContext); //Get the function and state from the context
    const navigate = useNavigate(); //hooks to be able to navigate to another page
    const [loginMessage, setLoginMessage] = useState(""); // message to display during login process
    const [loginInfo, setLoginInfo] = useState({
        email: "",
        password: "",
    }); // state to store login info

    // Function to handle changes in the login form inputs
    const handleChange = (event) => {
        const { name, value } = event.target;
        setLoginInfo({ ...loginInfo, [name]: value });
    };

    // Check if required fields are filled
    const requiredFields = loginInfo.email === "" || loginInfo.password === "";

    // Function to handle login process
    const handleLogin = async (event) => {
        event.preventDefault();
        setLoginMessage("Retrieving your info");
        try {
            const response = await fetch("/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    email: loginInfo.email,
                    password: loginInfo.password,
                }),
            });
            if (response.ok) {
                const data = await response.json();
                const userData = data.user;
                const PRs = data.PRs;
                await logIn(userData, PRs);
                navigate("/user-page");
            } else {
                const error = await response.text();
                setLoginMessage(`Login failed: ${JSON.parse(error).message}`);
            }
        } catch (error) {
            setLoginMessage("An error occurred, please try again");
        }
    };

    return (
        <>
            <Navbar />
            <LoginContainer 
                loginInfo={loginInfo} 
                handleChange={handleChange} 
                handleLogin={handleLogin} 
                requiredFields={requiredFields} 
                navigate={navigate} 
                loginMessage={loginMessage} 
            />
            <Footer />
        </>
    );
}

export default Login;
