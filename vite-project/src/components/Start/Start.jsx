import React, { useState } from 'react';
import { Link } from "react-router-dom";
import './Start.css';

export const Start = () => {
  const [results, setResults] = useState([]);

  return (
    <div>
      <div className="header">
        <img className="logo" src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExY2tocWF5N2hwaHBzOHU2OGxqc3FqOXdmcHUzbm9zdmRiendyd2RudCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/Onluwvrw87XyLSG1ua/giphy.gif" alt="Happy Computer" />
      </div>

      <div className="heading">
        <h1 className="start">Welcome to the Spellbook Database</h1>
      </div>

      <div className="startButton">
        <Link to="/Spell-Search">
          <button class="button" data-text="Awesome">
            <span class="actual-text">&nbsp;Enter&nbsp;</span>
            <span aria-hidden="true" class="hover-text">&nbsp;Enter&nbsp;</span>
          </button>
        </Link>
      </div>

    </div>
  )
}
