import React from "react";
import search from "../img/search.svg";

function SearhBarTwo() {
  return (
    <div className="component-filter-container">
      <div className="component-filter-search">
        <form action="">
          <div className="input">
            <div className="search-icon">
              <img src={search} />
            </div>
            <input type="text" placeholder="Start typing to search" />
          </div>
          <ul>
            <li>
              <label>
                <input type="radio" name="type" value="project" />
                <span className="text">Projects</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value="image" />
                <span className="text">Images</span>
              </label>
            </li>
            <li>
              <label>
                <input type="radio" name="type" value="people" />
                <span className="text">People</span>
              </label>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default SearhBarTwo;
