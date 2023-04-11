import React from 'react'

const Recipe = (props) => {
  return (
    <div>
        
        <button onClick={props.onClose}>🗑️</button>
        
        <h2>{props.name}</h2>
        <img src={props.image} alt={props.name} />
        <h2>{props.diets}</h2>

    </div>
  )
}

export default Recipe;

/*
id,
name,
image,
summary,
health_score,
instructions,
*/