import React from "react";

function FooterInfoCont(){
    return(
        <div class="FooterInfoCont">
        <div class="FooterInfo">ВИННЫЙ БУТИК LE CORTE</div>
        <div class="FooterInfo">8 (812) 123-45-67</div>
        <div class="FooterInfo">
            <img src={require("../../Images/Vector.png")} alt=""/>
            <img src={require("../../Images/Vector (2).png")} alt=""/>
            <img src={require("../../Images/Vector (3).png")} alt=""/>
        </div>
        <div class="FooterInfo">© LE-CORTE.RU</div>
    </div> 
    )
}

export default FooterInfoCont;