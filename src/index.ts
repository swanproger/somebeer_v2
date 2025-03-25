import React from "react";
import ReactDOM from 'react-dom/client';
import "./styles/index.scss";
import "./styles/index-mobile.css";
import "./styles/index-ipad.css";
import "./styles/index1430.css";
import "./styles/index1160.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Register from "./components/register/register";
import Enter from "./components/enter/enter";
import { Header } from "./components/header/header";
import MyTern from "./components/findBeer/findBeerMyTern";
import TopBeer, { cratePostAction } from "./components/findBeer/findBeer";
import TopBrewery from "./components/findBeer/findBeerTopBrewery";
import About from "./components/About/About";

function Maindiv() {
    return (
        <>
            <div className="back1"></div>
            <div className="maindiv">
                <Header />
                <div className="centerContent">
                    <div className="leftMenu"></div>
                    <div className="content" id="content"></div>
                    <div className="rightMenu">
                        <p>Выбор пользователей</p>
                    </div>
                </div>
            </div>
        </>
    );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <Router>
        <Routes>
            <Route path="/register" element={<Register />}></Route>
            <Route path="/login" element={<Enter />}></Route>
            <Route path="/" element={<Maindiv />}></Route>
            <Route path="/add" element={<TopBeer></TopBeer>}></Route>
            <Route path="/topBrewery" element={<TopBrewery></TopBrewery>}></Route>
            <Route path="/myTern" element={<MyTern></MyTern>}></Route>
            <Route path="/topBeer" element={<TopBeer></TopBeer>}></Route>
            <Route path="*" element={<Maindiv />}></Route>
            <Route path="/About" element={<About></About>}></Route>
        </Routes>
    </Router>
);