import React, {useState} from "react";
import CollTable from "./CollTable";

function CollInfo(){
    const [CollTableMas, changeValue] = useState([
        {year: "1980", text1 : "Colli Euganei Bianco Ca'Lustra 1980",
         text2 : "Красочная бутылка вина из Марселя", id:1},
        {year: "1980", text1 : "Colli Euganei Bianco Ca'Lustra 1980",
         text2 : "Красочная бутылка вина из Марселя", id:2}, 
        {year: "1980", text1 :"Colli Euganei Bianco Ca'Lustra 1980",
         text2 : "Красочная бутылка вина из Марселя", id:3}
    ]);

    console.log(CollTableMas);

    return(
        <div class="CollInfo">
                    <span>Новинки коллекции</span>
                    <span>Март 1980</span>
                    <span>Урожай Марселя</span>
                    <div class="Line"></div>
                    <div class="CollTxt">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum. 
                            Felis adipiscing morbi sodales ac. 
                        </span>
                    </div>
                    {CollTableMas.map(el=><CollTable year = {el.year} text1 = {el.text1}
                     text2 = {el.text2} key = {el.id}/>)}
                    <div class="CollTxt">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum. 
                            Felis adipiscing morbi sodales ac.
                        </span>
                    </div>
                    <div class="CollImagesMobile">
                        {/* <img src={require("../Images/Rectangle 11.png")} alt=""/> */}
                        <div class="CollImagesMobCont">
                            {/* <img src={require("../Images/Rectangle 12.png")} alt=""/>
                            <img src= {require("../Images/Rectangle 13.png")} alt=""/> */}
                        </div>
                    </div>
                    <div class="CollButton">УЗНАТЬ ПОДРОБНЕЕ</div>
                </div>
    )
}

export default CollInfo;