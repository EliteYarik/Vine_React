import React from "react";
import FooterButtons from "./FooterButtons";
import FooterInfoCont from "./FooterInfoCont";
import "../../Styles/Footer.css";

function Footer(){
    return(
        <div class="Footer">
            <FooterButtons/>
            <FooterInfoCont/>
        </div>    
    )
}

export default Footer;
