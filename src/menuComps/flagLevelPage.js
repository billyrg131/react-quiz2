import React from 'react';
import { Link } from 'react-router-dom';
export default function FlagLevelPage() {
  return (
    <div className="flagLevel">
      <h1 style={{ textAlign: 'center' }}>Levels</h1>
      <div className="flgLvlBtnDiv">
        <button className="flgLvlBtn">
          <Link to="/flags/Africa">Africa</Link>
        </button>
        <button className="flgLvlBtn">
          <Link to="/flags/Europe">Europe</Link>
        </button>
        <button className="flgLvlBtn">Asia</button>
        <button className="flgLvlBtn">North America</button>
      </div>
    </div>
  );
}
