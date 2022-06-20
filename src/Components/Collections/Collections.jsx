import React from "react";
import CollInfo from "./CollInfo";

function Collections(){
    return(
        <div class="Collections">
            <div class="CollLine"></div>
            <div class="CollectionsCont">
                <CollInfo/>
                <div class="CollImages">
                    {/* <img src="images/Rectangle 11.png" alt=""> */}
                    <div class="CollImagesCont">
                        {/* <img src="images/Rectangle 12.png" alt="">
                        <img src="images/Rectangle 13.png" alt=""> */}
                    </div>
                </div>
            </div>
        <div class="CollLine"></div>
    </div>
    )
}