import { useEffect } from "react";
import "./index.min.css";

const Desktop = ({ pageTitle }) => {
    
    useEffect(() => {

        document.title = pageTitle;

    }, []);
    
    return (
        // Start Desktop Page
        <div className="desktop">
            <div className="container-fluid">
                <h1 className="page-title">Hello Desktop</h1>
                <section className="taskbar w-100 p-3">
                    aa
                </section>
            </div>
        </div>
        // End Desktop Page
    );
}

export default Desktop;