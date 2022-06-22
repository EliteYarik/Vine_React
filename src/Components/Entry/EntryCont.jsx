import React from "react";

function EntryCont(){
    return(
        <div class="EntryCont">
                    <div class="EntryTitle">
                        <span>Запись на дегустацию</span>
                    </div>
                    <div class="EntryLine"></div>
                    <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                         Feugiat enim tortor in hac id imperdiet adipiscing. Pellentesque
                          nisi, mi sit non sit sed fermentum. </span>
                    <div class="EntryInput">
                        <input type="text" placeholder="Имя"/>
                        <input type="text" placeholder="Телефон"/>
                    </div>
                    <input type="text" placeholder="Бутик на Невском 103"/>
                    <input type="submit" value="ЗАПИСАТЬСЯ"/>
                </div>
    )
}

export default EntryCont;