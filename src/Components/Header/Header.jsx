import React from "react";
import "../../Styles/Header.css";
import HeaderUp from "./HeaderUp";
import HeaderNavigMobile from "./HeadNavigMobile";
import HeaderDown from "./HeaderDown";

function Header(){
    return (
        <div className="Header">
            <HeaderUp/>
            <HeaderNavigMobile/>
            <HeaderDown/>
        </div>
    );
}

export default Header;