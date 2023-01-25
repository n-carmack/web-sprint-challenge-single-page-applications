import React from "react";

const Form = (props) => {

    const {change, submitForm, errors} = props;
    const {username, instructions, size, Topping1, Topping2, Topping3, Topping4} = props.values;
    const onSubmit = (e) => {
        e.preventDefault();
        submitForm();
    }
    const onChange = (e) => {
        const {name, value, checked, type} = e.target;
        const newVal = type === 'checkbox' ? checked : value;
        change(name, newVal);
    }

    return (
        <form onSubmit={onSubmit} id='#pizza-form'>
            <label>Name
                <input
                    type="text"
                    id="#name-input"
                    placeholder="Enter your name here"
                    value={username}
                    name="username"
                    onChange={onChange}
                    />
            </label>
            <label>Size
                <input
                    type="text"
                    id="#size-dropdown"
                    placeholder="Enter your name here"
                    value={size}
                    name="size"
                    onChange={onChange}
                    />
            </label>
            <label>Pepperoni
                <input
                    type="checkbox"
                    name="Topping1"
                    checked={Topping1}
                    onChange={onChange}
                    />
            </label>
            <label>Spinach
                <input
                    type="checkbox"
                    name="Topping2"
                    checked={Topping2}
                    onChange={onChange}
                    />
            </label>
            <label>Extra Cheese
                <input
                    type="checkbox"
                    name="Topping3"
                    checked={Topping3}
                    onChange={onChange}
                    />
            </label>
            <label>Mushrooms
                <input
                    type="checkbox"
                    name="Topping4"
                    checked={Topping4}
                    onChange={onChange}
                    />
            </label>
            <label>Special Instructions
                <input
                    type="text"
                    id="#special-text"
                    placeholder="Special Instructions"
                    value={instructions}
                    name="instructions"
                    onChange={onChange}
                    />
            </label>
            <input type="submit" value="Add to Order" id="order-button"/>
        </form>
    )
}

export default Form;