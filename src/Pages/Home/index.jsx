import { useEffect, useState } from "react";
import Windows11OSBootScreen from "../../Components/Windows11OSBootScreen/index";
import Windows11WelcomeScreen from "../../Components/Windows11WelcomeScreen/index";
import "./index.min.css";

function Home({ pageTitle }) {

    const [isShowWelcomeScreen, setIsShowWelcomeScreen] = useState(false);

    const [isShowBootScreen, setIsShowBootScreen] = useState(true);

    useEffect(() => {

        document.title = pageTitle;

        setTimeout(() => {

            setIsShowBootScreen(false);

            setIsShowWelcomeScreen(true);

        }, 6000);

    }, []);

    return (
        // Start Home Page
        <div className="home">
            {isShowBootScreen && <Windows11OSBootScreen />}
            {isShowWelcomeScreen && <Windows11WelcomeScreen />}
        </div>
        // End Home Page
    );
}

export default Home;