import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, image,ingredients}) => {
    return(
        <div className={style.recipes} >
            <h2>{title}</h2>
            <img src={image} alt="recipe" />
            <p>{calories}</p>
            <ol className="ingredient-card">
                 {ingredients.map( ingredient => (
                    <li> {ingredient.text}</li>
                ))}
            </ol>
        </div>
    )
}

export default Recipe;

// 