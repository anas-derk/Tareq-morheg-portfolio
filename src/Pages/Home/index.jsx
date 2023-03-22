import { useEffect, useState } from "react";
import "./index.min.css";
import HomeBackground from "../../Assets/images/home.jpg";
import { useSelector } from "react-redux";

const Home = ({ pageTitle }) => {

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    const [welcomeMessage, setWelcomeMessage] = useState("");

    const [whoAmI, setHowAmI] = useState("");

    const [stepsIntro, setStepsIntro] = useState("");

    const [userName, setUserName] = useState("");

    const [operatingSystem, setOperatingSystem] = useState("");

    const [isShowIntroBox, setIsShowIntroBox] = useState(true);

    const [isShowUserNameForm, setIsShowUserNameForm] = useState(false);

    const [isShowSelectOSForm, setIsShowSelectOSForm] = useState(false);

    const userNameSubmit = (e) => {

        e.preventDefault();
        
    }

    const selectSystemType = (e) => {

        e.preventDefault();

        console.log("ggg")

    }

    useEffect(() => {

        document.title = pageTitle;

        smothlyTextWriting("Welcome To You In My Portfolio", setWelcomeMessage);

        smothlyTextWriting("I'am Tareq Morheg, Artificial Intelligence Engineer", setHowAmI);

        smothlyTextWriting("You are just a few steps away from going to see my CV details .", setStepsIntro);

        setTimeout(() => {

            setIsShowUserNameForm(true);

        }, 2000)

    }, []);

    return (
        <div
            className="home text-white"
            style={{ background: `url(${HomeBackground})` }}
        >
            <div className="overlay d-flex flex-column justify-content-center align-items-center">
                <div className="intro text-center p-4 mb-4">
                    <h1 className="welcome-msg mb-4 fw-bold">{ welcomeMessage }</h1>
                    <h2 className="who-am-i fw-bold mb-5">{ whoAmI }</h2>
                    <h4 className="steps-intro mb-0">{ stepsIntro }</h4>
                </div>
                {isShowUserNameForm && <form className="user-name-form" onSubmit={userNameSubmit}>
                    <input
                        type="text"
                        className="form-control mb-4 p-3"
                        placeholder="Please Enter Your Name"
                        required
                        onChange={(e) => setUserName(e.target.value)}
                    />
                    <button className="btn btn-success w-100 p-3">Submit</button>
                </form>}
                {isShowSelectOSForm && <form className="select-operation-system-form" onSubmit={selectSystemType}>
                    <select className="form-control mb-4 p-3"
                        onChange={(e) => setOperatingSystem(e.target.value)}
                    >
                        <option hidden>Please Select The Operating System</option>
                        <option value="windows-11">Windows 11</option>
                        <option value="ubunto">Ubunto</option>
                    </select>
                    <button className="btn btn-success w-100 p-3">Submit</button>
                </form>}
            </div>
        </div>
    );
}

export default Home;