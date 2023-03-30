import my_data from "../../Assets/myData/my_data.json";
import { useSelector } from "react-redux";
import "./index.min.css";
import { FaDownload } from "react-icons/fa";

const AboutMe = () => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    return (
        // Start About Me
        <div className="about-me my-details p-4">
            <h1 className="my-name text-center mb-5 bg-danger pt-4 pb-4 fw-bold">Tareq Morheg</h1>
            <section className="caption-section">
                <p className="mb-4 summary-description">{my_data.about_me.summary_description}</p>
                <div className="row text-center">
                    <div className="col-md-4">
                        <div className="experience-years-box info-box pt-3 pb-3">
                            <h4 className="mb-3 experience-years">{my_data.about_me.experience_years}</h4>
                            <h6 className="mb-3">Years</h6>
                            <h6>experience</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="projects-count-box info-box pt-3 pb-3">
                            <h4 className="mb-3 projects-count">{my_data.about_me.projects_count}</h4>
                            <h6 className="mb-3">completed</h6>
                            <h6>projects</h6>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="freelancer-projects-count-box info-box pt-3 pb-3">
                            <h4 className="mb-3 freelancer-projects-count">{my_data.about_me.freelancer_projects_count}</h4>
                            <h6 className="mb-3">freelancer</h6>
                            <h6>worked</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-links-section mb-5 ">
                <ul className="contact-links-list mt-5 d-flex justify-content-center align-items-center">
                    {linksIconsComponents.map((icon, index) =>
                        <li className="icon" key={index}>
                            <a href={contact_links_arr[index]} className="link-icon p-2 ps-3 pe-3" target="_blank">{icon}</a>
                        </li>
                    )}
                </ul>
            </section>
            <section className="display-cv-section">
                <a
                    className="btn btn-danger p-3 d-block mx-auto form-control"
                    href="https://seirah.com/sbc6fe20246?lang=en"
                    target="_blank"
                >
                    <span className="me-2">Show CV</span>
                    <FaDownload />
                </a>
            </section>
        </div>
        // End About Me
    );
}

export default AboutMe;