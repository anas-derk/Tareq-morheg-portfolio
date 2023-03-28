import TopControlBar from "../../Components/TopControlBar/index";

const MyProjects = ({ page_title }) => {
    return (
        // Start My Projects
        <div className="my-projects my-details">
            {/* Start Top Control Bar Section */}
            <TopControlBar page_title={page_title} />
            {/* End Top Control Bar Section */}
            {/* Start Content Section */}
            <section className="content p-3">
                <h1>Hello {page_title}</h1>
            </section>
            {/* End Content Section */}
        </div>
        // End My Projects
    );
}

export default MyProjects;