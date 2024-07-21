import React, { useState } from 'react';
import "./ClassSearchButton.css";

export const ClassSearchButton = ({ setSchoolResults }) => {
  const [disabledButton, setDisabledButton] = useState(null); // Track the disabled button

  const handleButtonClick = (letter) => {
    setDisabledButton(letter); // Disable the clicked button
    fetch("https://cors-anywhere-production-7e91.up.railway.app/https://dnd-api-production.up.railway.app/api/v1/spell")
      .then((response) => response.json())
      .then((json) => {
        const results = json.filter((user) => {
          return user &&
          user.classname &&
          user.classname.toLowerCase().includes(letter);
        });
        setSchoolResults(results);
      });
  };

  return (
    <div className="mainClass">
      <div className="buttonGroupClass">
        <button
          onClick={() => handleButtonClick("bard")}
          disabled={disabledButton === "bard"} // Disable the clicked button
        >
          Bard
        </button>
        <button
          onClick={() => handleButtonClick("cleric")}
          disabled={disabledButton === "cleric"}
        >
          Cleric
        </button>
        <button
          onClick={() => handleButtonClick("druid")}
          disabled={disabledButton === "druid"}
        >
          Druid
        </button>
        <button
          onClick={() => handleButtonClick("paladin")}
          disabled={disabledButton === "paladin"}
        >
          Paladin
        </button>
        <button
          onClick={() => handleButtonClick("ranger")}
          disabled={disabledButton === "ranger"}
        >
          Ranger
        </button>
        <button
          onClick={() => handleButtonClick("sorcerer")}
          disabled={disabledButton === "sorcerer"}
        >
          Sorcerer
        </button>
        <button
          onClick={() => handleButtonClick("warlock")}
          disabled={disabledButton === "warlock"}
        >
          Warlock
        </button>
        <button
          onClick={() => handleButtonClick("wizard")}
          disabled={disabledButton === "wizard"}
        >
          Wizard
        </button>
        <button
          onClick={() => handleButtonClick("artificer")}
          disabled={disabledButton === "artificer"}
        >
          Artificer
        </button>
      </div>
    </div>
  );
};
