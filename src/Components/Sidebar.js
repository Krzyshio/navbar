import React from "react";
import '../App.css';
import {SidebarDat} from "./SidebarData";
import NavBarHeader from "./NavBarHeader";

function Sidebar() {
    return <div className="Sidebar">
        <div className="NavBarHeader">
            <NavBarHeader/>
        </div>
        <ul className="SidebarList">
            {SidebarDat.map((val, key) => {
                return (
                    <li
                        key={key}
                        className="row"
                        id={window.location.pathname === val.link  ? "active" : ""}
                        onClick={() => {
                        window.location.pathname = val.link
                    }}>
                        <div id="icon">{val.icon}</div>
                        <div id="title">{val.title}</div>
                    </li>
                )
            })}
        </ul>
    </div>

}

export default Sidebar