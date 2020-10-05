import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Details(props) {
  let [food, setFood] = useState({});
  useEffect(() => {
    async function details() {
      const res = await axios(
        `https://www.themealdb.com/api/json/v1/1/search.php?s=`
      );

      setFood(res.data);
    }
    details();
  }, []);

  return (
    <div>
      <h1>Heres the recipe</h1>
      <h2></h2>
    </div>
  );
}

export default Details;
