import "./index.min.css";
import { IoClose } from "react-icons/io5";
import { TbWindowMaximize, TbWindowMinimize } from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi";

const TopControlBar = ({ page_title }) => {
    return (
        <section className="top-control-bar d-flex justify-content-between align-items-center">
            <h5 className="page-title m-0 ps-3 pe-3 bg-danger">{page_title}</h5>
            <ul className="icons-control-list">
                <li className="d-inline">
                    <HiOutlineMinus className="minimize-icon control-icon" title="Minimize" />
                </li>
                <li className="d-inline">
                    <TbWindowMaximize className="maximize-icon control-icon" title="Maximize" />
                </li>
                <li className="d-inline">
                    <IoClose className="close-icon control-icon" title="Close" />
                </li>
            </ul>
        </section>
    );
}

export default TopControlBar;