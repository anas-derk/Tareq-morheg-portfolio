import { useEffect } from "react";
import WindowsOSLoading from "../../Components/WindowsOSLoading";

function Home({ pageTitle }) {

    useEffect(() => {

        document.title = pageTitle;

    }, []);

    return (
        // Start Home Page
        <div className="home">
            <WindowsOSLoading />
        </div>
        // End Page Not Found
    );
}

export default Home;