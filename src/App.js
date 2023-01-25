import React, {useState} from "react";
import axios from 'axios';

import { Route } from "react-router-dom";
import {Link} from 'react-router-dom';

import Form from "./Components/pizzaform";

const formStartingValues = {
  username: '',
  size: '',
  instructions: '',
  toppings1: false,
  toppings2: false,
  toppings3: false,
  toppings4: false
}

const App = () => {

  const [formValues, setFormValues] = useState(formStartingValues);
  const handleChange = (name, value) => {
    //* validate(name, value);
    setFormValues({...formValues, [name]: value});
  }

  return (
    <>
      <h1>Bloomtech Eats</h1>
      <p>You can remove this code and create your own header</p>
      
      <Route exact path ="/">
      <Link id="order=pizza" to={`/pizza`}></Link>
      </Route>
      <Route path="/pizza">
        <Form />
      </Route>
    </>
  );
};
export default App;
