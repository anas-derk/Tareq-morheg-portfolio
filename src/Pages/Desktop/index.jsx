import { useEffect } from "react";
import "./index.min.css";
import { MdOutlineContactMail, MdLightbulbOutline, MdCastForEducation } from "react-icons/md";
import { SiPython } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BsInfoSquare } from "react-icons/bs";
import { AiOutlineExperiment } from "react-icons/ai";

const Desktop = ({ pageTitle }) => {

    useEffect(() => {

        document.title = pageTitle;

    }, []);

    return (
        // Start Desktop Page
        <div className="desktop">
            <div className="container-fluid">
                <h1 className="page-title">Hello Desktop</h1>
                <section className="taskbar w-100 p-1 text-center">
                    <ul className="my-info-links d-flex justify-content-center">
                        <li>
                            <button className="btn tooltip-btn fw-bold">Introduction</button>
                            <BsInfoSquare />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">About Me</button>
                            <MdLightbulbOutline />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">My Skills</button>
                            <GiSkills />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">My Education</button>
                            <MdCastForEducation />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">My Experience</button>
                            <AiOutlineExperiment />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">My Projects</button>
                            <SiPython />
                        </li>
                        <li>
                            <button className="btn tooltip-btn fw-bold">Contact Me</button>
                            <MdOutlineContactMail />
                        </li>
                    </ul>
                </section>
            </div>
        </div>
        // End Desktop Page
    );
}

export default Desktop;