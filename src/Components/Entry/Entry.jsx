import React from "react";
import "../../Styles/Entry.css"
import EntryCont from "./EntryCont";

function Entry(){
    return(
         <div class="Entry">
            <div class="EntryWrap">
                <img src={require("../../Images/image (4).png")} alt="GlassOfWine"/>
                <EntryCont/>
                <img src={require("../../Images/image (5).png")} alt="barrel"/>
            </div>
        </div>
    )
}

export default Entry;