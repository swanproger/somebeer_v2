import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import logo from "../../img/logo7.png";
import logo1 from "../../img/nick.png";
import logo2 from "../../img/phone.png";
import logo3 from "../../img/pass.png";
import "./register.css";
import { useState } from "react";
import axios from "axios";

export default function Register() {
    const [formData, setFormData] = useState({
        Nickname: "",
        Phonenumber: "",
        Psw: "",
        confirmPsw: "",
    });

    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const [passwordMatch, setPasswordMatch] = useState(true);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        if (formData.Nickname === "" || formData.Phonenumber === "" || formData.Psw === "" || formData.confirmPsw === "") {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        if (formData.Psw === formData.confirmPsw) {
            setPasswordMatch(true);
        } else if (formData.confirmPsw === "") {
            setError(true);
        } else {
            setPasswordMatch(false);
            setSubmitted(false);
        }
        try {
            const user = await axios.post("https://test.temacode.ru/api/form", formData);
        } catch (err) {
            console.log("Sending error", err);
        }
    };

    return (
        <>
            <div className="back"></div>
            <div className="mainplace">
                <div className="regplace">
                    <img src={logo} alt="" />
                    <div className="descr">
                        <p>
                            Данный сайт является социальной сетью для beer - гиков. Тут вы можете оценивать испробованные сорта, посещённые пив-бары и
                            пивоварни, общаться, делать посты, вести дневник попробованного пива и многое другое
                        </p>
                    </div>
                    <form className="form" onSubmit={handleSubmit}>
                        <div
                            className="pl nickname"
                            style={{
                                border: error && !formData.Nickname ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo1} className="img1" alt="" />
                            <input
                                type="name"
                                placeholder="Enter Nickname"
                                name="Nickname"
                                className="reginput"
                                value={formData.Nickname}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className="pl phone"
                            style={{
                                border: error && !formData.Phonenumber ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo2} className="img1" alt="" />
                            <input
                                type="tel"
                                placeholder="Enter phone number"
                                name="Phonenumber"
                                className="reginput"
                                value={formData.Phonenumber}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className="pl pass"
                            style={{
                                border: error && !formData.Psw ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo3} className="img1" alt="" />
                            <input
                                type="password"
                                placeholder="Enter password"
                                name="Psw"
                                className="reginput"
                                value={formData.Psw}
                                onChange={handleChange}
                            />
                        </div>
                        <div
                            className="pl pass2"
                            style={{
                                border: error && !formData.confirmPsw ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo3} className="img1" alt="" />
                            <input
                                type="password"
                                placeholder="Repeat password"
                                name="confirmPsw"
                                className="reginput"
                                value={formData.confirmPsw}
                                onChange={handleChange}
                            />
                        </div>
                        {error && !formData.confirmPsw && formData.Nickname && formData.Phonenumber && formData.Psw && (
                            <span className="error">*Please confirm your password</span>
                        )}
                        <button type="submit" className="reg" href="">
                            Зарегестрироваться
                        </button>
                        <p className="singin">
                            Уже есть аккаунт? <Link to="/login">Войти</Link>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
}
