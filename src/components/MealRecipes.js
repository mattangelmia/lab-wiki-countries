import React from 'react';
import { Link } from 'react-router-dom';

function MealRecipes(props) {
  const showMeals = () => {
    console.log(props);
    console.log(props.recipes.meals);
    let recipes = props.recipes.meals?.map((eachRecipe) => {
      return (
        <div>
          <img src={eachRecipe.strMealThumb}></img>
          <br></br>
          <Link to={`/recipes/${eachRecipe.strMeal}`}>
            Click here for the recipe
          </Link>
          <h2>{eachRecipe.strMeal}</h2>
          <ul>
            <h3>Country of origin: {eachRecipe.strArea}</h3>
            <h4>Type of dish:</h4>
            <p> {eachRecipe.strCategory}</p>
            <li> Cooking directions: {eachRecipe.strInstructions}</li>
          </ul>
        </div>
      );
      console.log(eachRecipe.details);
    });
    return recipes;
  };
  return (
    <div>
      <h1>Check out the list of Recipes</h1>
      <br></br>
      {showMeals()}
    </div>
  );
}

export default MealRecipes;
