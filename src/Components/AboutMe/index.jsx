import TopControlBar from "../../Components/TopControlBar/index";

const AboutMe = ({ page_title }) => {
    return (
        // Start About Me
        <div className="about-me my-details">
            {/* Start Top Control Bar Section */}
            <TopControlBar page_title={page_title} />
            {/* End Top Control Bar Section */}
            {/* Start Content Section */}
            <section className="content p-3">
                <h1>Hello { page_title }</h1>
            </section>
            {/* End Content Section */}
        </div>
        // End About Me
    );
}

export default AboutMe;