import React from "react";
import "../style.scss";
import search from "../img/search.svg";

function SerchBarOne() {
  return (
    <div className="component-container">
      <div className="component-search">
        <form action="">
          <div className="search-icon">
            <img src={search} />
          </div>
          <input type="text" placeholder="Start typing to search" />
        </form>
        <h6>Popular searches</h6>
        <ul>
          <li>
            <a href="">Air transport</a>
          </li>
          <li>
            <a href="">Avition</a>
          </li>
          <li>
            <a href="">Mekaniske Verksted</a>
          </li>
          <li>
            <a href="">Sporvei</a>
          </li>
          <li>
            <a href="">Bergens Kreditbank</a>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default SerchBarOne;
