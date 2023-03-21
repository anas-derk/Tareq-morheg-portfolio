import { useEffect, useState } from "react";
import "./index.min.css";
import HomeBackground from "../../Assets/images/home.jpg";
import { useSelector } from "react-redux";

const Home = ({ pageTitle }) => {

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    const [welcomeMessage, setWelcomeMessage] = useState("");

    const [whoAmI, setHowAmI] = useState("");

    useEffect(() => {

        document.title = pageTitle;

        smothlyTextWriting("Welcome To You In My Portfolio", setWelcomeMessage);

        smothlyTextWriting("I'am Tareq Morheg, Artificial Intelligence Engineer", setHowAmI);

    }, []);

    return (
        <div
            className="home text-white"
            style={{ background: `url(${HomeBackground})` }}
        >
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <div className="intro text-center p-4">
                    <h1 className="welcome-msg mb-4 fw-bold">{ welcomeMessage }</h1>
                    <h2 className="who-am-i fw-bold">{ whoAmI }</h2>
                </div>
            </div>
        </div>
    );
}

export default Home;