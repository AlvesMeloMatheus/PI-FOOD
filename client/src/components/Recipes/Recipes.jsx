// ------------ CSS ----------------
import "./Recipes.css";
// ---------------------------------

// ------------ Components ---------
import Recipe from "../Recipe/Recipe";
// ---------------------------------

import React from 'react'

const Recipes = ( props ) => {

    const { recipes } = props;

  return (
    <ul>
        {
            recipes.map(recipe => (
                <Recipe 
                    name={recipe.name}
                    image={recipe.image}
                    diets={recipe.diets}
                    onClose={recipe}
                />
            ))
        }
    </ul>
  )
}

export default Recipes;