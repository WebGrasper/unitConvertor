import React, { useState } from "react";
import "./UnitConverter.css";

const UnitConverter = () => {
  const [value, setValue] = useState("");
  const [unitFrom, setUnitFrom] = useState("celsius");
  const [unitTo, setUnitTo] = useState("fahrenheit");
  const [result, setResult] = useState("");

  const handleInputChange = (e) => {
    setValue(e.target.value);
  };

  const handleUnitFromChange = (e) => {
    setUnitFrom(e.target.value);
  };

  const handleUnitToChange = (e) => {
    setUnitTo(e.target.value);
  };

  const convertUnits = () => {
    if (unitFrom === unitTo) {
      setResult(value);
      return;
    }

    let convertedValue;

    if (unitFrom === "celsius" && unitTo === "fahrenheit") {
      convertedValue = (parseFloat(value) * 9) / 5 + 32;
    } else if (unitFrom === "fahrenheit" && unitTo === "celsius") {
      convertedValue = (parseFloat(value) - 32) * (5 / 9);
    } else if (unitFrom === "celsius" && unitTo === "kelvin") {
      convertedValue = parseFloat(value) + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "celsius") {
      convertedValue = parseFloat(value) - 273.15;
    } else if (unitFrom === "fahrenheit" && unitTo === "kelvin") {
      convertedValue = ((parseFloat(value) - 32) * 5) / 9 + 273.15;
    } else if (unitFrom === "kelvin" && unitTo === "fahrenheit") {
      convertedValue = ((parseFloat(value) - 273.15) * 9) / 5 + 32;
    } else if (unitFrom === "celsius" && unitTo === "rankine") {
      convertedValue = (parseFloat(value) + 273.15) * (9 / 5);
    } else if (unitFrom === "rankine" && unitTo === "celsius") {
      convertedValue = (parseFloat(value) - 491.67) * (5 / 9);
    } else if (unitFrom === "fahrenheit" && unitTo === "rankine") {
      convertedValue = parseFloat(value) + 459.67;
    } else if (unitFrom === "rankine" && unitTo === "fahrenheit") {
      convertedValue = parseFloat(value) - 459.67;
    }

    setResult(convertedValue.toFixed(2));
  };

  return (
    <div className="parent">
      <div className="unit-converter">
        <h2>Unit Converter</h2>
        <div className="input-container">
          <input type="number" value={value} onChange={handleInputChange} />
          <select value={unitFrom} onChange={handleUnitFromChange}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            <option value="rankine">Rankine</option>
          </select>
        </div>
        <div className="input-container">
          <input type="number" value={result} disabled />
          <select value={unitTo} onChange={handleUnitToChange}>
            <option value="celsius">Celsius</option>
            <option value="fahrenheit">Fahrenheit</option>
            <option value="kelvin">Kelvin</option>
            <option value="rankine">Rankine</option>
          </select>
        </div>
        <button onClick={convertUnits}>Convert</button>
      </div>
    </div>
  );
};

export default UnitConverter;
