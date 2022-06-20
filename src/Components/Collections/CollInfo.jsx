import React from "react";

function CollInfo(){
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
                    <div class="CollTable">
                        <div class="VineYear">1980</div>
                        <div class="VineName">
                            <span>Colli Euganei Bianco Ca'Lustra 1980</span>
                            <span>Красочная бутылка вина из Марселя</span>
                        </div>
                    </div>
                    <div class="CollTable">
                        <div class="VineYear">1980</div>
                        <div class="VineName">
                            <span>Colli Euganei Bianco Ca'Lustra 1980</span>
                            <span>Красочная бутылка вина из Марселя</span>
                        </div>
                    </div>
                    <div class="CollTableLast">
                        <div class="VineYear">1980</div>
                        <div class="VineName">
                            <span>Colli Euganei Bianco Ca'Lustra 1980</span>
                            <span>Красочная бутылка вина из Марселя</span>
                        </div> 
                    </div>
                    <div class="CollTxt">
                        <span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                            Feugiat enim tortor in hac id imperdiet adipiscing.
                            Pellentesque nisi, mi sit non sit sed fermentum. 
                            Felis adipiscing morbi sodales ac.
                        </span>
                    </div>
                    <div class="CollImagesMobile">
                        {/* <img src="images/Rectangle 11.png" alt=""> */}
                        <div class="CollImagesMobCont">
                            {/* <img src="images/Rectangle 12.png" alt="">
                            <img src="images/Rectangle 13.png" alt=""> */}
                        </div>
                    </div>
                    <div class="CollButton">УЗНАТЬ ПОДРОБНЕЕ</div>
                </div>
    )
}

export default CollInfo;