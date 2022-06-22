import React from "react";
import CollInfo from "./CollInfo";
import "../../Styles/Collections.css"

function Collections(){
    return(
        <div class="Collections">
            <div class="CollLine"></div>
            <div class="CollectionsCont">
                <CollInfo/>
                <div class="CollImages">
                    <img src={require("../../Images/Rectangle 11.png")} alt=""/>
                    <div class="CollImagesCont">
                        <img src={require("../../Images/Rectangle 12.png")} alt=""/>
                        <img src={require("../../Images/Rectangle 13.png")} alt=""/>
                    </div>
                </div>
            </div>
            <div class="CollLine"></div>
        </div>
    )
}

export default Collections;