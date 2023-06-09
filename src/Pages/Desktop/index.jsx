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
import TopControlBar from "../../Components/TopControlBar/index";

const Desktop = ({ pageTitle }) => {

    const [isShowIntroduction, setIsShowIntroduction] = useState(false);

    const [isShowAboutMe, setIsShowAboutMe] = useState(false);

    const [isShowMySkills, setIsShowMySkills] = useState(false);

    const [isShowMyEducation, setIsShowMyEducation] = useState(false);

    const [isShowMyExperience, setIsShowMyExperience] = useState(false);

    const [isShowMyProjects, setIsShowMyProjects] = useState(false);

    const [isShowContactMe, setIsShowContactMe] = useState(false);

    const [clickedIconIndex, set_clicked_icon_index] = useState(-1);

    const [is_window_maximize, set_is_window_maximize] = useState(false);

    const my_info_icons_data = [
        {
            id: 0,
            title: "Introduction",
            icon: <BsInfoSquare onClick={() => openPage("introduction")} />
        },
        {
            id: 1,
            title: "About Me",
            icon: <MdLightbulbOutline onClick={() => openPage("about-me")} />
        },
        {
            id: 2,
            title: "My Skills",
            icon: <GiSkills onClick={() => openPage("my-skills")} />
        },
        {
            id: 3,
            title: "My Education",
            icon: <MdCastForEducation onClick={() => openPage("my-education")} />
        },
        {
            id: 4,
            title: "My Experience",
            icon: <AiOutlineExperiment onClick={() => openPage("my-experience")} />
        },
        {
            id: 5,
            title: "My Projects",
            icon: <SiPython onClick={() => openPage("my-projects")} />
        },
        {
            id: 6,
            title: "Contact Me",
            icon: <MdOutlineContactMail onClick={() => openPage("contact-me")} />
        },
    ];

    const setter_page_functions = [
        setIsShowIntroduction,
        setIsShowAboutMe,
        setIsShowMySkills,
        setIsShowMyEducation,
        setIsShowMyExperience,
        setIsShowMyProjects,
        setIsShowContactMe,
    ];

    const handle_setter_page_functions_func = (index) => {

        for (let i = 0; i < setter_page_functions.length; i++) {

            if (i == index) setter_page_functions[i](true);

            else setter_page_functions[i](false);

        }

    }

    const openPage = (page_title) => {

        switch (page_title) {

            case "introduction": {

                handle_setter_page_functions_func(0);

                set_clicked_icon_index(0);

                break;

            }

            case "about-me": {

                handle_setter_page_functions_func(1);

                set_clicked_icon_index(1);

                break;

            }

            case "my-skills": {

                handle_setter_page_functions_func(2);

                set_clicked_icon_index(2);

                break;

            }

            case "my-education": {

                handle_setter_page_functions_func(3);

                set_clicked_icon_index(3);

                break;

            }

            case "my-experience": {

                handle_setter_page_functions_func(4);

                set_clicked_icon_index(4);

                break;

            }

            case "my-projects": {

                handle_setter_page_functions_func(5);

                set_clicked_icon_index(5);

                break;

            }

            case "contact-me": {

                handle_setter_page_functions_func(6);

                set_clicked_icon_index(6);

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
            {isShowIntroduction && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="Introduction"
                    setIsAppearedComponent={setIsShowIntroduction}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <Introduction />
            </section>}
            {isShowAboutMe && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="About Me"
                    setIsAppearedComponent={setIsShowAboutMe}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <AboutMe />
            </section>}
            {isShowMySkills && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="My Skills"
                    setIsAppearedComponent={setIsShowMySkills}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <MySkills />
            </section>}
            {isShowMyEducation && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="My Education"
                    setIsAppearedComponent={setIsShowMyEducation}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <MyEducation />
            </section>}
            {isShowMyExperience && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="My Experience"
                    setIsAppearedComponent={setIsShowMyExperience}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <MyExperience />
            </section>}
            {isShowMyProjects && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="My Projects"
                    setIsAppearedComponent={setIsShowMyProjects}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <MyProjects />
            </section>}
            {isShowContactMe && <section className={is_window_maximize ? "window maximize": "window"}>
                {/* Start Top Control Bar Section */}
                <TopControlBar
                    page_title="Contact Me"
                    setIsAppearedComponent={setIsShowContactMe}
                    set_clicked_icon_index={set_clicked_icon_index}
                    set_is_window_maximize={set_is_window_maximize}
                />
                {/* End Top Control Bar Section */}
                <ContactMe />
            </section>}
            <section className="taskbar p-1 text-center">
                <ul className="my-info-links d-flex flex-column justify-content-center">
                    {my_info_icons_data.map((el, index) =>
                        <li key={el.id} className={clickedIconIndex === el.id ? "clicked" : ""}>
                            <button className="btn tooltip-btn fw-bold">{el.title}</button>
                            {el.icon}
                        </li>
                    )}
                </ul>
            </section>
        </div>
        // End Desktop Page
    );
}

export default Desktop;