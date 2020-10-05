import React from 'react';
import { Link } from 'react-router-dom';

function HomePage(props) {
  return (
    <div>
      <nav>
        <ul>
          <li>
            <Link to={`/`}>Home</Link>
          </li>
          <li>
            <Link to={`/recipes`}>Recipes</Link>
          </li>
          <li>
            <Link to={`/newapp`}>NewApp</Link>
          </li>
          <li>
            <Link to={`/searchfood`}>SearchFood</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default HomePage;
