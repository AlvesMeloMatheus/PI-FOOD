import './SearchBar.css';
//--------- ^^ css ^^ ----------

import React from 'react';

function SearchBar ({ props }) {

  return (
    <div>

        <input 
          type="search"
          name="search"

          placeholder="Insert a food name"
        
        />

        <button id='BtnS' onClick={props.onSearch}>Search</button>

    </div>
  )
}

export default SearchBar;