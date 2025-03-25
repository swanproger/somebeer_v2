import React from "react";
import "./findBeer.scss";
import "./findBeer-mobile.css";
import "./findBeer-ipad.css";
import { Header } from "../header/header";
import EnterBeerButton from "./button/button";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function TopBrewery() {
    return (
        <div className="maindiv">
            <Header />
            <div className="centerContent">
                <div className="content" id="content">
                    <div className="Buttons">
                        <Link to="/topBeer">
                            <EnterBeerButton>Топ пива</EnterBeerButton>
                        </Link>
                        <EnterBeerButton isActive={"brewery"}>Топ пивоварен</EnterBeerButton>
                        <Link to="/myTern">
                            <EnterBeerButton>Мой выбор</EnterBeerButton>
                        </Link>
                    </div>
                    <p>Топ пивоварен</p>
                </div>
            </div>
        </div>
    );
}
export default TopBrewery;
