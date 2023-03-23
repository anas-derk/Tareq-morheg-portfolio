import "./index.min.css";
import Windows11WelcomeScreenImage from "../../Assets/images/window11-welcomeScreen1.jpg";

const Windows11WelcomeScreen = () => {
    return (
        <section className="windows11-welcome-screen text-white text-center d-flex justify-content-center align-items-center flex-column"
            style={{ backgroundImage: `url(${Windows11WelcomeScreenImage})` }}
        >
            <h2 className="welcome-msg mb-5">Welcome <span className="user-name bg-danger p-2">{ localStorage.getItem("user-name-for-tm-portfolio") }</span> In My Portfolio .</h2>
            <div className="loader"></div>
        </section>
    );
}

export default Windows11WelcomeScreen;