import React, {useState} from "react";
import axios from 'axios';

import { BrowserRouter, NavLink } from "react-router-dom";
import {Route, Router} from 'react-router-dom';
import {Link} from 'react-router-dom';

import Form from "./Components/pizzaform";
import * as yup from 'yup';
import schema from "./Validation/formSchema";
import HomePage from "./Components/homepage";

import { useHistory } from 'react-router-dom';

const formStartingValues = {
  name: '',
  size: '',
  special: '',
  topping1: false,
  topping2: false,
  topping3: false,
  topping4: false
}

const formStartingErrors = {
  name: '',
  size: '',
}

const App = () => {

  const [formValues, setFormValues] = useState(formStartingValues);
  const [formErrors, setFormErrors] = useState(formStartingErrors);
  const handleChange = (name, value) => {
    validate(name, value);
    setFormValues({...formValues, [name]: value});
  }
  const handleSubmit = () => {
    axios.post('https://reqres.in/api/orders', formValues)
    .then(res=> {
      console.log(formValues)
    })
    .catch(err=> console.error(err));
  }

  const validate = (name, value) => {
    yup.reach(schema, name)
    .validate(value)
    .then(() => setFormErrors({...formErrors, [name]: ''}))
    .catch(err=> setFormErrors({...formErrors, [name]: err.errors[0]}))
}

const history = useHistory();
const homeLink =  () =>{
  history.push('/');
}

const orderLink = () => {
  history.push('/pizza');
}
  return (
    <div>
      <Route exact path='/'>
        <HomePage />
        <div id="order-pizza" onClick={orderLink}>Order Pizza</div>
      </Route>
      <Route path="/pizza">
      <Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
      <div className="home-button" onClick={homeLink}>Home</div>
      </Route>
    </div>
    //<Route exact path ="/">
    //<Link id="order=pizza" to={`/pizza`}></Link>
    //</Route>
    //<Route path="/pizza">
    //<Form values={formValues} change={handleChange} errors={formErrors} submit={handleSubmit}/>
    //</Route>
  );
};
export default App;
