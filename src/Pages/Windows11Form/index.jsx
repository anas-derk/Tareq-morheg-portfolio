import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Windows11OSBootScreen from "../../Components/Windows11OSBootScreen/index";
import Windows11WelcomeScreen from "../../Components/Windows11WelcomeScreen/index";
import "./index.min.css";

function Windows11Form({ pageTitle }) {

    const [isShowWelcomeScreen, setIsShowWelcomeScreen] = useState(false);

    const [isShowBootScreen, setIsShowBootScreen] = useState(true);

    const navigate = useNavigate();

    useEffect(() => {

        document.title = pageTitle;

        let userName = localStorage.getItem("user-name-for-tm-portfolio");

        if (!userName) navigate("/");

        else {

            setTimeout(() => {

                setIsShowBootScreen(false);
    
                setIsShowWelcomeScreen(true);
    
            }, 8000);

        }

    }, []);

    return (
        // Start Windows 11 System Form
        <div className="home">
            {isShowBootScreen && <Windows11OSBootScreen />}
            {isShowWelcomeScreen && <Windows11WelcomeScreen />}
        </div>
        // End Windows 11 System Form
    );
}

export default Windows11Form;