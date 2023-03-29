import my_data from "../../Assets/myData/my_data.json";
import { useSelector } from "react-redux";
import "./index.min.css";

const AboutMe = () => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    return (
        // Start About Me
        <div className="about-me my-details ps-4 pe-4 d-flex flex-column justify-content-center">
            <h1 className="my-name text-center mb-5 bg-danger pt-4 pb-4 fw-bold">Tareq Morheg</h1>
            <section className="caption-section">
                <p className="mb-4 summary-description">{my_data.about_me.summary_description}</p>
                <div className="row text-center">
                    <div className="col">
                        <div className="experience-years-box info-box pt-3 pb-3">
                            <h4 className="mb-3 experience-years">{my_data.about_me.experience_years}</h4>
                            <h6 className="mb-3">Years</h6>
                            <h6>experience</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="projects-count-box info-box pt-3 pb-3">
                            <h4 className="mb-3 projects-count">{my_data.about_me.projects_count}</h4>
                            <h6 className="mb-3">completed</h6>
                            <h6>projects</h6>
                        </div>
                    </div>
                    <div className="col">
                        <div className="freelancer-projects-count-box info-box pt-3 pb-3">
                            <h4 className="mb-3 freelancer-projects-count">{my_data.about_me.freelancer_projects_count}</h4>
                            <h6 className="mb-3">freelancer</h6>
                            <h6>worked</h6>
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact-links-section">
                <ul className="contact-links-list mt-5 text-center d-flex justify-content-center">
                    {linksIconsComponents.map((icon, index) =>
                        <li className={`icon ${index !== linksIconsComponents.length - 1 ? "me-5" : ""}`} key={index}>
                            <a href={contact_links_arr[index]} className="icon p-2 ps-3 pe-3" target="_blank">{icon}</a>
                        </li>
                    )}
                </ul>
            </section>
        </div>
        // End About Me
    );
}

export default AboutMe;