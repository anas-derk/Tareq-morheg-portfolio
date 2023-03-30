import my_data from "../../Assets/myData/my_data.json";

const MyExperience = () => {
    return (
        // Start My Experience
        <div className="my-experience my-details p-3 d-grid align-items-center">
            {my_data.qualification.experience.map((el, index) => (
                /* Start Experience Details Box */
                <section className="experience-details-box details-box bg-white mb-3 p-3" key={index}>
                    <h4 className="text-center box-number mx-auto">{ index + 1 }</h4>
                    <h6 className="duration">{el.duration}</h6>
                    <h5 className="level">{el.level}</h5>
                    <p className="description m-0">
                        {el.description}
                    </p>
                </section>
                /* End Experience Details Box */
            ))}
        </div>
        // End My Experience
    );
}

export default MyExperience;