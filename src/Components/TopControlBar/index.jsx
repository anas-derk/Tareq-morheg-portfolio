import "./index.min.css";
import { IoClose } from "react-icons/io5";
import { TbWindowMaximize, TbWindowMinimize } from "react-icons/tb";
import { HiOutlineMinus } from "react-icons/hi";
import { useState } from "react";

const TopControlBar = (props) => {

    const [is_show_window_maximize_icon, set_is_show_window_maximize_icon] = useState(true);

    const [is_show_window_minimize_icon, set_is_show_window_minimize_icon] = useState(false);

    return (
        <section className="top-control-bar d-flex justify-content-between align-items-center">
            <h5 className="page-title m-0 ps-3 pe-3 bg-danger">{props.page_title}</h5>
            <ul className="icons-control-list">
                <li className="d-inline" onClick={() => props.setIsAppearedComponent(false)}>
                    <HiOutlineMinus className="minimize-icon control-icon" title="Minimize" />
                </li>
                <li className="d-inline"
                    onClick={() => {
                        set_is_show_window_maximize_icon(!is_show_window_maximize_icon);
                        set_is_show_window_minimize_icon(!is_show_window_minimize_icon);
                        props.set_is_window_maximize(is_show_window_maximize_icon);
                    }
                }>
                    {is_show_window_maximize_icon && <TbWindowMaximize className="maximize-icon control-icon" title="Maximize" />}
                    {is_show_window_minimize_icon && <TbWindowMinimize className="maximize-icon control-icon" title="Minimize" />}
                </li>
                <li className="d-inline"
                    onClick={() => {
                        props.setIsAppearedComponent(false);
                        props.set_clicked_icon_index(-1);
                    }
                }>
                    <IoClose className="close-icon control-icon" title="Close" />
                </li>
            </ul>
        </section>
    );
}

export default TopControlBar;