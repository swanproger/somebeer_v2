import React from "react";
import "./dropdown.css";

export class Dropdown extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedCities: this.props.selectedCities ?? [],
            isOpened: false,
            availableCities: ["Москва", "Королёв", "Рязань", "Санкт-Петербург", "Казань", "Нижний-Новгород"],
        };
    }

    createCityElement(selectorCityText) {
        return <span className="city">{selectorCityText}</span>;
    }

    createPlaceholderElement() {
        return <span>Выберите город</span>;
    }

    updateSelectedCities(selectedCity, isAdding) {
        if (isAdding) {
            this.setState({ selectedCities: this.state.selectedCities.concat([selectedCity]) });
        } else {
            this.setState({ selectedCities: this.state.selectedCities.filter((x) => x !== selectedCity) });
        }
    }

    updateIsOpened(isOpened) {
        this.setState({ isOpened: isOpened });
    }

    createCityCheckbox(city) {
        const isChecked = !!this.state.selectedCities.find((x) => x === city);
        return (
            <div className="customSelect__option">
                <input
                    type="checkbox"
                    checked={isChecked}
                    className="checkcountry"
                    onClick={() => {
                        this.updateSelectedCities(city, !isChecked);
                    }}
                />
                <label id="country">{city}</label>
            </div>
        );
    }

    createDropdownContent() {
        return (
            <div className="dropdownContent" id="dropdownContent">
                {this.state.availableCities.map((city) => this.createCityCheckbox(city))}
            </div>
        );
    }

    createDropdown() {
        this.updateIsOpened(true);
        const dropdown = document.getElementById("dropdown");
        const listener = (e) => {
            if (!dropdown.contains(e.target)) {
                this.updateIsOpened(false);
                document.removeEventListener("click", listener);
            }
        };
        document.addEventListener("click", listener);
    }

    render() {
        return (
            <div className="dropdown" id="dropdown">
                <div
                    className="drop"
                    id="drop"
                    onClick={() => {
                        this.createDropdown();
                    }}
                >
                    {this.state.selectedCities.length === 0
                        ? this.createPlaceholderElement()
                        : this.state.selectedCities.map((city) => this.createCityElement(city))}
                </div>
                {this.state.isOpened && this.createDropdownContent()}
            </div>
        );
    }
}
