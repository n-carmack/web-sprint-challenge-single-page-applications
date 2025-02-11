import React from "react";
import { useHistory } from 'react-router-dom';

const Form = (props) => {

    
    const {change, submitForm, errors} = props;
    const {name, size, topping1, topping2, topping3, topping4, special} = props.values;

    const onChange = (e) => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }
    const onSubmit = (e) => {
        e.preventDefault();
        submitForm();
        
    }



    return (
        <form onSubmit={submitForm} id='pizza-form'>
            <p>{errors.name}</p>
            <p>{errors.size}</p>
            <label>Name
                <input
                    type="text"
                    id="name-input"
                    placeholder="Enter your name here"
                    value={name}
                    name="name"
                    onChange={onChange}
                    />
            </label>
            <label>Size
                    <select
                        value={size}
                        id="size-dropdown"
                    placeholder="Choose a size"
                    value={size}
                    name="size"
                    onChange={onChange}>
                        <option name="small">Small</option>
                        <option name="medium">Medium</option>
                        <option name="large">Large</option>
                    </select>
            </label>
            <label>
                
            </label>
            <label>Pepperoni
                <input
                    type="checkbox"
                    name="topping1"
                    checked={topping1}
                    onChange={onChange}
                    />
            </label>
            <label>Spinach
                <input
                    type="checkbox"
                    name="topping2"
                    checked={topping2}
                    onChange={onChange}
                    />
            </label>
            <label>Extra Cheese
                <input
                    type="checkbox"
                    name="topping3"
                    checked={topping3}
                    onChange={onChange}
                    />
            </label>
            <label>Mushrooms
                <input
                    type="checkbox"
                    name="tpping4"
                    checked={topping4}
                    onChange={onChange}
                    />
            </label>
            <label>Special Instructions
                <input
                    type="text"
                    id="special-text"
                    placeholder="Special Instructions"
                    value={special}
                    name="special"
                    onChange={onChange}
                    />
            </label>
            
            <input type="submit" value="Add to Order" id="order-button"/>
        </form>
        
        
    )
}

export default Form;