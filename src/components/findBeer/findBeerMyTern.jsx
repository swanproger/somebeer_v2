import React from "react";
import "./findBeer.scss";
import "./findBeer-mobile.css";
import "./findBeer-ipad.css";
import { Header } from "../header/header";
import EnterBeer from "./enterbeer/enterBeer";
import EnterBeerButton from "./button/button";
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

export default function MyTern() {
    const [content, setContent] = useState();
    function createButton() {
        document.getElementById("btnCreate").classList.add("show");
        setContent(null);
    }
    function createAddBeer() {
        setContent(<EnterBeer></EnterBeer>);
    }
    return (
        <div className="maindiv">
            <Header />
            <div className="centerContent">
                <div className="content" id="content">
                    <div className="Buttons">
                        <Link to="/topBeer">
                            <EnterBeerButton>Топ пива</EnterBeerButton>
                        </Link>
                        <Link to="/topBrewery">
                            <EnterBeerButton>Топ пивоварен</EnterBeerButton>
                        </Link>

                        <EnterBeerButton isActive={"myTern"} onClick={() => createButton()}>
                            Мой выбор
                        </EnterBeerButton>
                        <button className="btnCreate" id="btnCreate" onClick={createAddBeer}>
                            Создать пиво
                        </button>
                    </div>
                    <div className="beerContent">{content}</div>
                </div>
            </div>
        </div>
    );
}
