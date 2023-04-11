import "./NavBar.css"
//--------- ^^ css ^^ ----------

import React from 'react'
// ------------ components -----------
import SearchBar from '../SearchBar/SearchBar';
import Recipes from "../Recipes/Recipes";
// -----------------------------------

const NavBar = () => {
  return (
    <div className='Bar'>

      <h1>Henry Food</h1>

      <Recipes recipes={[]}/>
      
      <SearchBar />
    
    </div>
  )
}

export default NavBar;