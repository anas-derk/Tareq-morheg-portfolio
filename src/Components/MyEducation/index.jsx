import my_data from "../../Assets/myData/my_data.json";

const MyEducation = () => {
    return (
        // Start My Education
        <div className="my-education my-details p-4 d-grid align-items-center">
            {my_data.qualification.education.map((el, index) => (
                /* Start Education Details Box */
                <section className="education-details-box details-box bg-white p-3" key={index}>
                    <h4 className="text-center box-number mx-auto">{ index + 1 }</h4>
                    <h6 className="duration">{el.duration}</h6>
                    <h5 className="level">{el.level}</h5>
                    <p className="description m-0">
                        {el.description}
                    </p>
                </section>
                /* End Education Details Box */
            ))}
        </div>
        // End My Education
    );
}

export default MyEducation;