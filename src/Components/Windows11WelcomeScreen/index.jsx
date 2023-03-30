import "./index.min.css";
import Windows11WelcomeScreenImage from "../../Assets/images/window11-welcomeScreen1.jpg";
import myImage from "../../Assets/images/tareq.jpg";

const Windows11WelcomeScreen = () => {
    return (
        <section className="windows11-welcome-screen text-white text-center d-flex justify-content-center align-items-center flex-column"
            style={{ backgroundImage: `url(${Windows11WelcomeScreenImage})` }}
        >
            <img src={myImage} alt="my image" className="my-image mb-3"/>
            <h2 className="welcome-msg mb-5 p-3">Welcome <span className="user-name bg-danger p-2">{ localStorage.getItem("user-name-for-tm-portfolio") }</span> In My Portfolio .</h2>
            <div className="loader"></div>
        </section>
    );
}

export default Windows11WelcomeScreen;