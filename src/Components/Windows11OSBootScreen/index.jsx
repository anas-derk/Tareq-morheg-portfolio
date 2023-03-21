import { SiWindows11 } from "react-icons/si";
import "./index.min.css";

const Windows11OSBootScreen = () => {
    return (
        // Start Windows 11 Operating System Boot Screen
        <section className="windows11-boot-screen d-flex justify-content-around align-items-center flex-column" style={{ backgroundColor: "black", minHeight: "100vh" }}>
            <SiWindows11 className="window11-os-icon" />
            <div className="loader"></div>
        </section>
        // End Windows 11 Operating System Boot Screen
    );
}

export default Windows11OSBootScreen;