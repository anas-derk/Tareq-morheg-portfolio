import MyProject from "../../Components/MyProject/index";
import my_data from "../../Assets/myData/my_data.json";

const MyProjects = () => {
    return (
        // Start My Projects
        <div className="my-projects my-details p-4">
            <div className="row">
                {my_data.projects.map((project, index) => (
                    <div className="col-md-6">
                        <MyProject
                            key={index}
                            title={project.title}
                            description={project.description}
                            technologies={project.technologies}
                            sourceCodeLink={project.sourceCodeLink}
                        />
                    </div>
                ))}
            </div>
        </div>
        // End My Projects
    );
}

export default MyProjects;