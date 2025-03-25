import React from "react";
import logo from "../../img/logo7.png";
import logo1 from "../../img/phone.png";
import logo2 from "../../img/pass.png";
import "./enter.css";
import { checkAuth } from "../../services/login.service";
import { useState } from "react";

export default function Enter() {
    /* const loginService = new LoginService();
    function checkAuth() {
        loginService
            .checkAuth()
            .then((x) => console.log(x))
            .catch((x) => console.log(x))
            .finally((x) => console.log(x));
    } */

    const [formData, setFormData] = useState({
        Phonenumber: "",
        Psw: "",
    });
    const [enterError, setEnterError] = useState(false);
    const [enterSubmitted, setEnterSubmitted] = useState(false);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formData.Phonenumber === "" || formData.Psw === "") {
            setEnterError(true);
        } else {
            setEnterSubmitted(true);
            setEnterError(false);
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
                            className="pl phone"
                            style={{
                                border: enterError && !formData.Phonenumber ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo1} className="img1" alt="" />
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
                                border: enterError && !formData.Psw ? "1px solid red" : null,
                            }}
                        >
                            <img src={logo2} className="img1" alt="" />
                            <input
                                type="password"
                                placeholder="Enter password"
                                name="Psw"
                                className="reginput"
                                value={formData.Psw}
                                onChange={handleChange}
                            />
                        </div>
                        <button
                            type="submit"
                            className="reg"
                            href=""
                            /*  onClick={() => {
                                checkAuth();
                            }} */
                        >
                            Войти
                        </button>
                    </form>
                </div>
            </div>
        </>
    );
}
