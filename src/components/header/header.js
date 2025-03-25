import React from "react";
import ReactDOM from "react-dom/client";
import "./header.css";
import logo from "../../img/logo6.1.png";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import { Dropdown } from "../dropdown/dropdown";
const userSelectedCities = [];

export function Header() {
    return (
        <div className="header">
            <button className="header__menuBtn">
                <div></div>
                <div></div>
                <div></div>
            </button>
            <img src={logo} />
            <div className="header__menu">
                <Link to="/" className="menuItem">
                    Главная
                </Link>
                <Link to="/About" className="menuItem">
                    О проекте
                </Link>
                <Link to="/add" className="menuItem">
                    Лучшие
                </Link>
                <Link to="" className="menuItem buisnessItem">
                    Для бизнеса
                </Link>
                <div className="citySelector">
                    <a>Город:</a>
                    <Dropdown selectedCities={userSelectedCities} />
                </div>
            </div>
            <div className="header__login">
                <Link to="/login" className="enter">
                    Войти
                </Link>
                <Link to="/register" className="regestration">
                    Зарегестрироваться
                </Link>
            </div>
        </div>
    );
}
