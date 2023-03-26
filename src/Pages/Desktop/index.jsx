import { useEffect } from "react";
import "./index.min.css";
import { MdOutlineContactMail } from "react-icons/md";
import { SiPython } from "react-icons/si";
import { GiSkills } from "react-icons/gi";
import { BsInfoSquare } from "react-icons/bs";
import { MdCastForEducation } from "react-icons/md";
import { AiOutlineExperiment } from "react-icons/ai"

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
                        <li title="Introduction">
                            <BsInfoSquare />
                        </li>
                        <li title="My Skills">
                            <GiSkills />
                        </li>
                        <li title="My Eduction">
                            <MdCastForEducation />
                        </li>
                        <li title="My Experience">
                            <AiOutlineExperiment />
                        </li>
                        <li title="My Projects">
                            <SiPython />
                        </li>
                        <li title="Contact Me">
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