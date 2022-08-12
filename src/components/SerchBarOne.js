import React from "react";
import "../style.scss";
import search from "../img/search.svg";
import { useState } from "react";
import JSONDATA from "../data.json";

function SerchBarOne() {

  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="component-container">
      <div className="component-search">
        <form action="">
          <div className="search-icon">
            <img src={search} />
          </div>
          <input type="text" placeholder="Start typing to search" onChange={(e)=> setSearchTerm(e.target.value)} />
        </form>
        <ul>
        {JSONDATA.filter((val) => {
          if(searchTerm == ""){
            return val
          }
          else if(val.first_name.toLowerCase().includes(searchTerm.toLowerCase())){
            return val
          }
        }).map((val, key) =>{
          return(
          <li key={key} min="7">
            <a href="#">{val.first_name}</a>
          </li>
          )
        })}
        </ul>
        
      </div>
    </div>
  );
}

export default SerchBarOne;
