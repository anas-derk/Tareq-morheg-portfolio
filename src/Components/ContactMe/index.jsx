import { MdDoubleArrow } from "react-icons/md";
import { useSelector } from "react-redux";
import my_data from "../../Assets/myData/my_data.json";
import myImage from "../../Assets/images/tareq.jpg";
import "./index.min.css";

const ContactMe = () => {

    const linksIconsComponents = useSelector(state => state.linksIconsComponents);

    const contact_links_arr = Object.values(my_data.contact_me_links);

    const sendMessage = (e) => {

        e.preventDefault();

        console.log("yes");
    }

    return (
        // Start Contact Me
        <div className="contact-me my-details p-4">
            {/* Start Grid System */}
            <div className="row align-items-center">
                {/* Start Column */}
                <div className="col-lg-5 img-box">
                    <img src={myImage} alt="Image Exist !!" className="my-image" />
                </div>
                {/* End Column */}
                {/* Start Column */}
                <div className="col-lg-7">
                    {/* Start Contact Me Form */}
                    <form className="contact-me-form" onSubmit={sendMessage}>
                        {/* Start Grid System */}
                        <div className="row mb-4">
                            <div className="col-lg">
                                <input type="text" placeholder="Name" className="form-control p-4 name-input" required />
                            </div>
                            <div className="col-lg">
                                <input type="email" placeholder="Email" className="form-control p-4" required />
                            </div>
                        </div>
                        {/* End Grid System */}
                        <input type="text" placeholder="Project" className="form-control mb-4 p-4" required />
                        <textarea placeholder="Message" className="form-control mb-4 p-4" required />
                        {/* Start Grid System */}
                        <div className="row">
                            <div className="col-md-4">
                                <button
                                    type="submit"
                                    className="btn send-message-btn p-3 w-100 bg-danger"
                                >
                                    Send Message &nbsp;
                                    <MdDoubleArrow />
                                </button>
                            </div>
                            <div className="col-md-8">
                                <ul className="contact-links text-center d-flex h-100 align-items-center flex-wrap">
                                    {linksIconsComponents.map((icon, index) =>
                                        <li className="link p-2 pe-3 ps-3" key={index}>
                                            <a href={contact_links_arr[index]} className="icon" target="_blank">{icon}</a>
                                        </li>
                                    )}
                                </ul>
                            </div>
                        </div>
                        {/* End Grid System */}
                    </form>
                    {/* End Contact Me Form */}
                </div>
                {/* End Column */}
            </div>
            {/* End Grid System */}
        </div>
        // End Contact Me
    );
}

export default ContactMe;