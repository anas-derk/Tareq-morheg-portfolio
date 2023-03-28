import myImage from "../../Assets/images/tareq.jpg";
import my_data from "../../Assets/myData/my_data.json";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import "./index.min.css";

const Introduction = () => {

    const [myName, setMyName] = useState("");

    const [myJobPosition, setMyJobPosition] = useState("");

    const [myJobCaption, setMyJobCaption] = useState("");

    const smothlyTextWriting = useSelector(state => state.smothlyTextWriting);

    useEffect(() => {

        smothlyTextWriting("Hi, I am Ebrahim Massrie |", setMyName);

        smothlyTextWriting(my_data.introduction.jobPosition, setMyJobPosition);

        smothlyTextWriting(my_data.introduction.jobCaption, setMyJobCaption, 25);

    }, []);

    return (
        // Start Introduction
        <div className="introduction my-details p-3">
            {/* Start Grid System From Bootstrap Framework */}
            <div className="row align-items-center" >
                <div className="col-lg-6">
                    <div className="summary">
                        <h1 className="fw-bold my-name">{myName}</h1>
                        <h5 className="job-position fw-bold">{myJobPosition}</h5>
                        <p className="job-caption">{myJobCaption}</p>
                    </div>
                </div>
                <div className="col-lg-6 text-center">
                    <img src={myImage} alt="Image Exist !!" className="my-image" />
                </div>
            </div>
            {/* End Grid System From Bootstrap Framework */}
        </div>
        // End Introduction
    );
}

export default Introduction;