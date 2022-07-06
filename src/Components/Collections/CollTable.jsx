import React from "react";

function CollTable(props){
    return(
        <div class="CollTable">
            <div className="VineYear">{props.year}</div>
            <div class="VineName">
                <span>{props.text1}</span>
                <span>{props.text2}</span>
            </div>
        </div>  
    )
}
// Colli Euganei Bianco Ca'Lustra 1980
// Красочная бутылка вина из Марселя
export default CollTable;