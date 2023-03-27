import { useEffect, useState } from "react";
import "./index.min.css";
import { MdOutlineContactMail, MdLightbulbOutline, MdCastForEducation } from "react-icons/md";
import { SiPython } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BsInfoSquare } from "react-icons/bs";
import { AiOutlineExperiment } from "react-icons/ai";
import Introduction from "../../Components/Introduction/index";
import AboutMe from "../../Components/AboutMe/index";
import MySkills from "../../Components/MySkills/index";
import MyEducation from "../../Components/MyEducation/index";
import MyExperience from "../../Components/MyExperience/index";
import MyProjects from "../../Components/MyProjects/index";
import ContactMe from "../../Components/ContactMe/index";

const Desktop = ({ pageTitle }) => {

    let [isShowIntroduction, setIsShowIntroduction] = useState(false);

    let [isShowAboutMe, setIsShowAboutMe] = useState(false);

    let [isShowMySkills, setIsShowMySkills] = useState(false);

    let [isShowMyEducation, setIsShowMyEducation] = useState(false);

    let [isShowMyExperience, setIsShowMyExperience] = useState(false);

    let [isShowMyProjects, setIsShowMyProjects] = useState(false);

    let [isShowContactMe, setIsShowContactMe] = useState(false);

    const openPage = (page_title) => {

        switch(page_title) {

            case "introduction": {

                setIsShowIntroduction(true);

                break;

            }

            case "about-me": {

                setIsShowAboutMe(true);

                break;

            }

            case "my-skills": {

                setIsShowMySkills(true);

                break;

            }

            case "my-education": {

                setIsShowMyEducation(true);

                break;

            }

            case "my-experience": {

                setIsShowMyExperience(true);

                break;

            }

            case "my-projects": {

                setIsShowMyProjects(true);

                break;

            }

            case "contact-me": {

                setIsShowContactMe(true);

                break;

            }

            default: {

                console.log("error");

            }

        }

    }

    useEffect(() => {

        document.title = pageTitle;

    }, []);

    return (
        // Start Desktop Page
        <div className="desktop">
            {isShowIntroduction && <Introduction />}
            {isShowAboutMe && <AboutMe />}
            {isShowMySkills && <MySkills />}
            {isShowMyEducation && <MyEducation />}
            {isShowMyExperience && <MyExperience />}
            {isShowMyProjects && <MyProjects />}
            {isShowContactMe && <ContactMe />}
            <section className="taskbar p-1 text-center">
                <ul className="my-info-links d-flex flex-column justify-content-center">
                    <li>
                        <button className="btn tooltip-btn fw-bold">Introduction</button>
                        <BsInfoSquare onClick={() => openPage("introduction")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">About Me</button>
                        <MdLightbulbOutline onClick={() => openPage("about-me")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">My Skills</button>
                        <GiSkills onClick={() => openPage("my-skills")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">My Education</button>
                        <MdCastForEducation onClick={() => openPage("my-education")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">My Experience</button>
                        <AiOutlineExperiment onClick={() => openPage("my-experience")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">My Projects</button>
                        <SiPython onClick={() => openPage("my-projects")} />
                    </li>
                    <li>
                        <button className="btn tooltip-btn fw-bold">Contact Me</button>
                        <MdOutlineContactMail onClick={() => openPage("contact-me")} />
                    </li>
                </ul>
            </section>
        </div>
        // End Desktop Page
    );
}

export default Desktop;