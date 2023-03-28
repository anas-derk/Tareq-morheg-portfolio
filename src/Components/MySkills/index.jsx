import TopControlBar from "../../Components/TopControlBar/index";

const MySkills = ({ page_title }) => {
    return (
        // Start My Skills
        <div className="my-skills my-details">
            {/* Start Top Control Bar Section */}
            <TopControlBar page_title={page_title} />
            {/* End Top Control Bar Section */}
            {/* Start Content Section */}
            <section className="content p-3">
                <h1>Hello {page_title}</h1>
            </section>
            {/* End Content Section */}
        </div>
        // End My Skills
    );
}

export default MySkills;