import { useEffect, useState } from "react";
import "./index.min.css";
import HomeBackground from "../../Assets/images/home.jpg";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Home = ({ pageTitle }) => {

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    const navigate = useNavigate();

    const [welcomeMessage, setWelcomeMessage] = useState("");

    const [whoAmI, setHowAmI] = useState("");

    const [stepsIntro, setStepsIntro] = useState("");

    const [congratulationsMessage, setCongratulationsMessage] = useState("");

    const [waitMessage, setWaitMessage] = useState("");

    const [isShowIntroSection, setIsShowIntroSection] = useState(true);

    const [isShowCongratulationsSection, setIsShowCongratulationsSection] = useState(false);

    const [userName, setUserName] = useState("");

    const [isShowUserNameForm, setIsShowUserNameForm] = useState(false);

    const [isShowLoadingBtn, setIsShowLoadingBtn] = useState(false);

    const [isShowLoader, setIsShowLoader] = useState(false);

    const userNameSubmit = (e) => {

        e.preventDefault();

        setIsShowLoadingBtn(true);

        let runOSTimeout = setTimeout(() => {

            setIsShowLoadingBtn(false);

            setIsShowUserNameForm(false);

            setIsShowIntroSection(false);

            localStorage.setItem("user-name-for-tm-portfolio", userName);

            setIsShowCongratulationsSection(true);

            smothlyTextWriting(`Congratulations ${userName} !!`, setCongratulationsMessage);

            smothlyTextWriting("Please Wait a Few Second Before Running The Portfolio In Form Windows 11 Operating System", setWaitMessage);

            let runLoaderTimeout = setTimeout(() => {

                setIsShowLoader(true);

                setTimeout(() => {

                    navigate("/windows11-loader");

                }, 3500);

                clearTimeout(runLoaderTimeout);

            }, 5000);

            clearTimeout(runOSTimeout);

        }, 2000);

    }

    useEffect(() => {

        document.title = pageTitle;

        // Protect Window 11 Form Route ( Prevent Running The Operating System if don't have User Name )

        let userName = localStorage.getItem("user-name-for-tm-portfolio");

        if (userName) navigate("/windows11-loader");

        else {

            smothlyTextWriting("Welcome To You In My Portfolio", setWelcomeMessage);

            smothlyTextWriting("I'am Tareq Morheg, Artificial Intelligence Engineer", setHowAmI);

            smothlyTextWriting("You are just a few steps away from going to see my CV details .", setStepsIntro);

            let showUserNameFormTimeout = setTimeout(() => {

                setIsShowUserNameForm(true);

                clearTimeout(showUserNameFormTimeout);

            }, 2000);

        }

    }, []);

    return (
        <div
            className="home text-white"
            style={{ background: `url(${HomeBackground})` }}
        >
            <div className="overlay d-flex flex-column justify-content-center align-items-center p-5">
                {isShowIntroSection && <section className="intro-section text-center p-4 mb-5">
                    <h1 className="welcome-msg mb-4 fw-bold">{welcomeMessage}</h1>
                    <h2 className="who-am-i fw-bold mb-4">{whoAmI}</h2>
                    <h4 className="steps-intro mb-0">{stepsIntro}</h4>
                </section>}
                {isShowUserNameForm && <form className="user-name-form" onSubmit={userNameSubmit}>
                    <input
                        type="text"
                        className="form-control mb-4 p-3"
                        placeholder="Please Enter Your Name"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    {!isShowLoadingBtn && <button className="btn btn-success w-100 p-3 user-name-submit">Submit</button>}
                    {isShowLoadingBtn && <button className="btn btn-primary w-100 p-3 loading-button" type="button" disabled>
                        <span className="spinner-border spinner-border-sm me-2" role="status" aria-hidden="true"></span>
                        Processing ...
                    </button>}
                </form>}
                {isShowCongratulationsSection && <section className="congratulations-section text-center p-4 mb-4">
                    <h1 className="congratulations-msg mb-4 fw-bold">{congratulationsMessage}</h1>
                    <h4 className="wait-msg mb-0">{waitMessage}</h4>
                </section>}
                {isShowLoader && <div className="loader"></div>}
            </div>
        </div>
    );
}

export default Home;