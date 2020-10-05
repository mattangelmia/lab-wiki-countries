import React, { useState, useEffect } from 'react';
import Details from './components/Details';
import axios from 'axios';
import NewApp from './components/NewApp';
import HomePage from './components/HomePage';
import MealRecipes from './components/MealRecipes';
import { Route, Switch } from 'react-router-dom';
import SearchFood from './components/SearchFood';

function App() {
  const [data, setData] = useState({});

  useEffect(() => {
    async function recipes() {
      const res = await axios(
        'https://www.themealdb.com/api/json/v1/1/search.php?s='
      );
      console.log(res.data);
      setData(res.data);
    }
    recipes();
  }, []);

  return (
    <div>
      <h1>Delicious Meals</h1>
      <HomePage />
      <Switch>
        <Route
          exact
          path="/recipes"
          render={(props) => <MealRecipes recipes={data} {...props} />}
        ></Route>
        <Route
          exact
          path="/recipes/:details"
          render={(props) => <Details {...props} />}
        />
        <Route path="/newapp" render={() => <NewApp />}></Route>
        <Route path="/searchfood" render={() => <SearchFood />}></Route>
      </Switch>
    </div>
  );
}

export default App;
