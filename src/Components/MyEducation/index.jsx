import TopControlBar from "../../Components/TopControlBar/index";

const MyEducation = ({ page_title }) => {
    return (
        // Start My Education
        <div className="my-education my-details">
            {/* Start Top Control Bar Section */}
            <TopControlBar page_title={page_title} />
            {/* End Top Control Bar Section */}
            {/* Start Content Section */}
            <section className="content p-3">
                <h1>Hello { page_title }</h1>
            </section>
            {/* End Content Section */}
        </div>
        // End My Education
    );
}

export default MyEducation;