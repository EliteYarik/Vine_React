import React, {useState} from "react";
import VineYear from "../UI/VineYear";

function CollTable(){
    const[Year, changeValue] = useState([
        {value: "1980", id:1},
    ])
    return(
        <div class="CollTable">
            {Year.map(el=><VineYear text={el.value} key = {el.id}/>)}
            <div class="VineName">
                <span>Colli Euganei Bianco Ca'Lustra 1980</span>
                <span>Красочная бутылка вина из Марселя</span>
            </div>
        </div>  
    )
}

export default CollTable;