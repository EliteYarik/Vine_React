import React, {useState} from "react";
import HeaderButton from "../UI/HeaderButton";

function HeaderUp(){
    const [buttonsText, changeValue] = useState([
        {value: "Каталог", id:1},
        {value: "Доставка", id:2},
        {value: "Коллекции", id:3},
        {value: "Контакты", id:4}
    ]);
    return(
        <div className="HeaderUp">
                <div className="HeaderTxtCont">
                    <span>Новокузнечный переулок 4/1</span>
                    <span>8 (912) 123-45-67</span>
                </div>
                <div className="HeaderButtonsCont">
                    {buttonsText.map(el=><HeaderButton text = {el.value} key = {el.id}/>)}
                </div>
            </div>
    )
}

export default HeaderUp;