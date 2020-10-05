import React, { useState, useEffect } from 'react';
import '../App.css';
import axios from 'axios';
import { Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Navbar';

import FormControl from 'react-bootstrap/Navbar';
function SearchFood() {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const Id = '1949bcdc';
  const Key = 'b99569c224fcfecca6f202946bed7bfe';
  const url = `https://api.edamam.com/search?q=${query}&app_id=${Id}&app_key=${Key}&from=0&to=3&calories=591-722&health=alcohol-free`;

  const getData = async () => {
    const result = await axios.get(url);
    setRecipes(result.data.hits);
    console.log(result);
    setQuery('');
  };

  const onType = (e) => {
    setQuery(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    getData();
  };

  return (
    <div>
      <h1 className="recipehead">Search your favorite recipes!</h1>
      {/* <Button variant="secondary">Secondary</Button>{' '} */}
      {/* <button onClick={getData}>button</button> */}
      <form className="form-wrapper" onSubmit={onSubmit}>
        <input
          id="search"
          type="text"
          placeholder="Search Food"
          onChange={onType}
          value={query}
        />
        <input type="submit" value="search" id="submit" />
      </form>
      <div className="recipesection">
        {recipes !== [] &&
          recipes.map((recipe) => (
            <ul className="foodList">
              <li className="recipes">
                <div className="img-box">
                  <img src={recipe.recipe.image} />
                  <h2>text</h2>
                </div>
              </li>
              <li>
                <h2>{recipe.recipe.label}</h2>
              </li>
              <li>
                <h4>Calories:{recipe.recipe.calories.toFixed(0)}</h4>
              </li>
              <li>
                <a href={recipe.recipe.url}>recipes</a>
              </li>
              <li>
                <p>Labels: {recipe.recipe.healthLabels}</p>
              </li>
              {/* <li> */}
              {/* <p>{recipe.recipe.ingredients[1].text}</p>
              </li>
              <li>
                <p>{recipe.recipe.ingredients[2].text}</p>
              </li>
              <li>
                <p>{recipe.recipe.ingredients[3].text}</p>
              </li>
              <li>
                <p>{recipe.recipe.ingredients[4].text}</p>
              </li> */}
              {/* <li>
                <h4>{recipe.recipe.ingredients[5].text}</h4>
              </li> */}
            </ul>
          ))}
      </div>
    </div>
  );
}

export default SearchFood;
