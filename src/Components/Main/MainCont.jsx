import React from "react";

function MainCont(){
    return(
        <div class="MainCont">
        <span>Лучший вкус - это вкус долголетнего вина</span>
        <div class="Line"></div>
        <div class="MainSpanCont">
            <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                 Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque nisi,
                  mi sit non sit sed fermentum. Felis adipiscing morbi sodales ac. Mauris
                   dictumst risus pulvinar blandit elit. Vestibulum quam ultrices nascetur
                    et viverra suscipit. Proin vitae aliquet leo aliquam amet rutrum. Lectus
                     auctor purus ultrices enim ultrices. Augue fringilla tellus tortor orci 
                     ultrices sed. Viverra cras sapien, pellentesque viverra malesuada. Tellus
                      dolor, eget vitae dignissim molestie eget sit duis. Vitae dui vel pretium euismod diam.
                 Pellentesque amet, lacus, amet, quis risus. Pellentesque scelerisque nunc, orci aliquam quis.</span>
        </div>
        <img src={require("../../Images/image.png")}/>
    </div> 
    )
}

export default MainCont;