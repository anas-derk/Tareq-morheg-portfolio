import TopControlBar from "../../Components/TopControlBar/index";

const ContactMe = ({ page_title }) => {
    return (
        // Start Contact Me
        <div className="contact-me my-details">
            {/* Start Top Control Bar Section */}
            <TopControlBar page_title={page_title} />
            {/* End Top Control Bar Section */}
            {/* Start Content Section */}
            <section className="content p-3">
                <h1>Hello { page_title }</h1>
            </section>
            {/* End Content Section */}
        </div>
        // End Contact Me
    );
}

export default ContactMe;