import React from "react";
import "./findBeer.scss";
import "./findBeer-mobile.css";
import "./findBeer-ipad.css";
import { Header } from "../header/header";
import EnterBeerButton from "./button/button";
import { BrowserRouter as Router, Routes, Route, Link, redirect } from "react-router-dom";

export default function TopBeer() {
    return (
        <div className="maindiv">
            <Header />
            <div className="centerContent">
                <div className="content" id="content">
                    <div className="Buttons">
                        <EnterBeerButton isActive={"beer"}>Топ пива</EnterBeerButton>
                        <Link to="/topBrewery">
                            <EnterBeerButton>Топ пивоварен</EnterBeerButton>
                        </Link>
                        <Link to="/myTern">
                            <EnterBeerButton>Мой выбор</EnterBeerButton>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
