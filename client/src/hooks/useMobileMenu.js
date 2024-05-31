import { useState, useEffect } from "react";

//Hooks used for the navbar to display a different layout if the device is a mobile
const useMobileMenu = () => {
    const [mobile, setMobile] = useState(false);
    const [showmenu, setShowmenu] = useState(false);

    useEffect(() => {

        //Function to handle the resize of the screen
        const handleResize = () => {
            setMobile(window.innerWidth <= 767); // will setMobile to true if window width is <= to 767px
        };

        //Call the function right away to set the state according to the window width
        handleResize();

        //Event listener that will call the function every time the window is resize
        window.addEventListener("resize", handleResize);

        //clean up the event listener
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    //Function used to display the menu if user click on icon or hide the menu 
    const toggleMenu = () => {
        setShowmenu(!showmenu);
    };

    return { mobile, showmenu, toggleMenu };
};

export { useMobileMenu };