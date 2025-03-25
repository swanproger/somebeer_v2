import React from "react";
import "./About.css";
import { Header } from "../header/header";
import beer from "../../img/bluemoon.jpg";
import beer1 from "../../img/buron.jpg";
import beer2 from "../../img/guinness.jpg";
import beer3 from "../../img/ipa.jpg";
import beer4 from "../../img/lager.jpg";
import beer5 from "../../img/miller.jpg";
import beer6 from "../../img/stella.jpg";
import city from "../../img/city.png";

export default function About() {
    return (
        <div className="maindiv">
            <Header />
            <div className="centerContent">
                <div className="AboutContent" id="content">
                    <div className="AboutLeft">
                        <img src={city} className="imgCity" alt="" />
                    </div>
                    <div className="AboutRight">
                        <div className="AboutDivText">
                            <label className="AboutText">Отмечайте любимое пиво и места вместе с друзьями!</label>
                        </div>
                        <div className="beerPhoto">
                            <img src={beer} className="img" alt="" />
                            <img src={beer1} className="img" alt="" />
                            <img src={beer2} className="img" alt="" />
                            <img src={beer3} className="img" alt="" />
                            <img src={beer4} className="img" alt="" />
                            <img src={beer5} className="img" alt="" />
                            <img src={beer6} className="img" alt="" />
                            <img src={beer2} className="img" alt="" />
                            <img src={beer1} className="img" alt="" />
                            <img src={beer} className="img" alt="" />

                            <img src={beer2} className="img" alt="" />
                            <img src={beer3} className="img" alt="" />
                            <img src={beer6} className="img" alt="" />
                            <img src={beer1} className="img" alt="" />
                            <img src={beer} className="img" alt="" />
                            <img src={beer6} className="img" alt="" />
                            <img src={beer2} className="img" alt="" />
                            <img src={beer4} className="img" alt="" />
                            <img src={beer3} className="img" alt="" />
                            <img src={beer2} className="img" alt="" />

                            <img src={beer1} className="img" alt="" />
                            <img src={beer} className="img" alt="" />
                            <img src={beer5} className="img" alt="" />
                            <img src={beer2} className="img" alt="" />
                            <img src={beer3} className="img" alt="" />
                            <img src={beer5} className="img" alt="" />
                            <img src={beer6} className="img" alt="" />
                            <img src={beer1} className="img" alt="" />
                            <img src={beer5} className="img" alt="" />
                            <img src={beer4} className="img" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
