import { SiWindows11 } from "react-icons/si";
import "./index.min.css";

const WindowsOSLoading = () => {
    return (
        // Start Windows 11 Operating System Loading
        <section className="windows11-loading d-flex justify-content-around align-items-center flex-column" style={{ backgroundColor: "black", minHeight: "100vh" }}>
            <SiWindows11 className="window-os-icon" />
            <div className="loader"></div>
        </section>
        // End Windows 11 Operating System Loading
    );
}

export default WindowsOSLoading;