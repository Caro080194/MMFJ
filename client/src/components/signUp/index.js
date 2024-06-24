import Navbar from "../Navbar";
import Footer from "../footer";
import SignUpContainer from "./SignUpContainer";
import { useState } from "react";


const SignUp = () => {
    const [signUpMessage, setSignUpMessage] = useState(""); // message to display during sign up process
    const [formData, setFormData] = useState({
        fname: "",
        lname: "",
        email: "",
        city: "",
        country: "",
        password: "",
        confirmPassword: "",
    }); // state to store form data

    // Function to handle changes in the form inputs
    const handleChangeForm = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    // Check if required fields are filled
    const requiredFields =
        formData.fname === "" ||
        formData.lname === "" ||
        formData.email === "" ||
        formData.city === "" ||
        formData.country === "" ||
        formData.password === "" ||
        formData.confirmPassword === ""
        ;

    // Function to handle sign up process
    const handleSignUp = async (event) => {
        event.preventDefault();
        setSignUpMessage("Creating your account");
        try {
            const {
                fname,
                lname,
                email,
                city,
                country,
                password,
                confirmPassword
            } = formData;

            const response = await fetch("https://motion-mind-fitness-journey-7e8f61e2895c.herokuapp.com/signUp", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    fname,
                    lname,
                    email,
                    city,
                    country,
                    password,
                    confirmPassword,
                }),
            });

            if (response.ok) {
                setSignUpMessage("Your account has been created, you can now login!");
                setFormData({
                    fname: "",
                    lname: "",
                    email: "",
                    city: "",
                    country: "",
                    password: "",
                    confirmPassword: "",
                });
            } else {
                const errorMessage = await response.text();
                setSignUpMessage(`Sign up failed: ${JSON.parse(errorMessage).message}`);
            }
        } catch (error) {
            setSignUpMessage("An error occurred, please try again.");
        }
    }

    return (
        <>
            <Navbar />
            <SignUpContainer
                formData={formData}
                signUpMessage={signUpMessage}
                handleChangeForm={handleChangeForm}
                handleSignUp={handleSignUp}
                requiredFields={requiredFields}
            />
            <Footer />
        </>
    )
}

export default SignUp;

