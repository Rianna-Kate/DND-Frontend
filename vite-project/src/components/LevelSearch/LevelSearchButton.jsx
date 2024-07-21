import React, { useState } from 'react';
import "./LevelSearchButton.css";

export const LevelSearchButton = ({ setLevelResults }) => {
  const [disabledButton, setDisabledButton] = useState(null); // Track the disabled button

  const handleButtonClick = (level) => {
    setDisabledButton(level); // Disable the clicked button
    fetch("https://cors-anywhere-production-7e91.up.railway.app/https://dnd-api-production.up.railway.app/api/v1/spell")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user &&
          user.level !== undefined &&
          user.level === parseInt(level, 10); // Compare as integers
        });
        setLevelResults(results);
      });
  };

  return (
    <div className="mainLevel">
      <div className="buttonGroupLevel">
      <button
          onClick={() => handleButtonClick("0")}
          disabled={disabledButton === "0"} // Disable the clicked button
        >
          0
        </button>
        <button
          onClick={() => handleButtonClick("1")}
          disabled={disabledButton === "1"} // Disable the clicked button
        >
          1
        </button>
        <button
          onClick={() => handleButtonClick("2")}
          disabled={disabledButton === "2"}
        >
          2
        </button>
        <button
          onClick={() => handleButtonClick("3")}
          disabled={disabledButton === "3"}
        >
          3
        </button>
        <button
          onClick={() => handleButtonClick("4")}
          disabled={disabledButton === "4"}
        >
          4
        </button>
        <button
          onClick={() => handleButtonClick("5")}
          disabled={disabledButton === "5"}
        >
          5
        </button>
        <button
          onClick={() => handleButtonClick("6")}
          disabled={disabledButton === "6"}
        >
          6
        </button>
        <button
          onClick={() => handleButtonClick("7")}
          disabled={disabledButton === "7"}
        >
          7
        </button>
        <button
          onClick={() => handleButtonClick("8")}
          disabled={disabledButton === "8"}
        >
          8
        </button>
        <button
          onClick={() => handleButtonClick("9")}
          disabled={disabledButton === "9"}
        >
          9
        </button>
      </div>
    </div>
  );
};
