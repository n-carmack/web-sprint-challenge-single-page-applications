import React from 'react';

import {Link} from 'react-router-dom';


const HomePage= () => {
  
    return (
      <div className="Bloomtech Eats">
        <button classname='order-pizza'>
        <Link to={`/pizza`}>
        order-pizza
        </Link>
        </button>
      </div>
    );
  }

export default HomePage;