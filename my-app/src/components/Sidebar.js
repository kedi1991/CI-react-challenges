import React from "react";
import css from './css/Sidebar.module.css';

const SideBar = () => {

return <div className = {css.sidebar}>
        <a href="#">My photos</a>
        <a href="#">My illustrations</a>
        <a href="#">My paintings</a>
    </div>
}

export default SideBar;