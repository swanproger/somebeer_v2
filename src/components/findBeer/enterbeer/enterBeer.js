import PlaceBeer from "../PlaceBeer";
import { ways } from "../data";
import logo from "../../../img/nophoto1.jpg";
import React, { useState } from "react";

export default function EnterBeer() {
    const [image, setImage] = useState();
    const [imageURL, setImageURL] = useState();
    const [error, setError] = useState(false);
    const [submitted, setSubmitted] = useState(false);
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
        setImageURL(fileReader.result);
    };
    const handleOnChange = (event) => {
        event.preventDefault();
        const file = event.target.files[0];
        setImage(file);
        fileReader.readAsDataURL(file);
    };
    const [formData, setFormData] = useState({
        beerName: "",
        brewery: "",
        typeOfBeer: "",
        strength: "",
        density: "",
        userId: "1",
    });
    const handleChange = (event) => {
        console.log(event.target);
        const { name, value } = event.target;
        setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
        }));
    };
    const handleSubmit = (event) => {
        event.preventDefault();
        if (
            formData.beerName === "" ||
            formData.brewery === "" ||
            formData.typeOfBeer === "" ||
            formData.strength === "" ||
            formData.density === ""
        ) {
            setError(true);
        } else {
            setSubmitted(true);
            setError(false);
        }
        createPost();
    };
    const createPost = async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(formData),
        });
        const newPost = await res.json();

        return newPost;
    };

    return (
        <>
            <form className="photoPlace">
                <img src={imageURL ? imageURL : logo} className="installPhoto" alt="preview" />
                <input id="file-loader-button" type="file" className="fileUploader" onChange={handleOnChange}></input>
            </form>

            <form className="placeToWrite" onSubmit={handleSubmit}>
                <PlaceBeer
                    {...ways[0]}
                    value={formData.beerName}
                    changeHandler={handleChange}
                    style={{
                        border: error && !formData.beerName ? "1px solid red" : null,
                    }}
                />
                <PlaceBeer
                    {...ways[1]}
                    value={formData.brewery}
                    changeHandler={handleChange}
                    style={{
                        border: error && !formData.brewery ? "1px solid red" : null,
                    }}
                />
                <PlaceBeer
                    {...ways[2]}
                    value={formData.typeOfBeer}
                    changeHandler={handleChange}
                    style={{
                        border: error && !formData.typeOfBeer ? "1px solid red" : null,
                    }}
                />
                <PlaceBeer
                    {...ways[3]}
                    value={formData.strength}
                    changeHandler={handleChange}
                    style={{
                        border: error && !formData.strength ? "1px solid red" : null,
                    }}
                />
                <PlaceBeer
                    {...ways[4]}
                    value={formData.density}
                    changeHandler={handleChange}
                    style={{
                        border: error && !formData.density ? "1px solid red" : null,
                    }}
                />
                <input type="hidden" name="userId" value={formData.userId}></input>
                <button type="submit" className="saveBeer" value="add Post">
                    Сохранить пиво
                </button>
            </form>
        </>
    );
}
