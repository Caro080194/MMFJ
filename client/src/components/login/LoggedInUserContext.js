import { createContext, useState } from "react";

export const LoggedInUserContext = createContext();

const LoggedInUserProvider = ({ children }) => {

    const [loggedInUser, setLoggedInUser] = useState({
        _id: "",
        fname: "",
        lname: "",
        email: "",
        city: "",
        country: "",
    });

    const [loggedInUserPRs, setLoggedInUserPRs] = useState([]);

    const [isLogin, setIsLogin] = useState(false);

    const logIn = (userData, PRs) => {
        setLoggedInUser(userData);
        setIsLogin(true);
        setLoggedInUserPRs(PRs);
    };

    const logOut = () => {
        setLoggedInUser({
            _id: "",
            fname: "",
            lname: "",
            email: "",
            city: "",
            country: "",
        });
        setIsLogin(false);
        setLoggedInUserPRs([]);
    };

    return (
        <LoggedInUserContext.Provider
            value={{ loggedInUser, isLogin, logIn, logOut, loggedInUserPRs, setLoggedInUserPRs }}
        >
            {children}
        </LoggedInUserContext.Provider>
    );
};

export default LoggedInUserProvider;