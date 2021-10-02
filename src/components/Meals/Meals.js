import React, { useEffect, useState } from 'react';
import { Form, FormControl, InputGroup } from 'react-bootstrap';
import Meal from '../Meal/Meal';

const Meals = () => {
    const [meals, setMeals] = useState([]);
    const [searchText, setSearchText] = useState('');

    const handleSearch = (event) => {
        const searchTextValue = event.target.value;
        setSearchText(searchTextValue);
    }
    useEffect(() => {
        fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`)
            .then(res => res.json())
            .then(data => setMeals(data.meals))
    }, [])
    return (
        <div>
            <InputGroup className="mb-3">
            <Form  style={{width: "40%"}, {margin: "auto"} }>
                <FormControl
                    placeholder="Search your meal"
                    aria-label="Recipient's username"
                    aria-describedby="basic-addon2"
                    onChange={handleSearch}
                />
                </Form>
            </InputGroup>
            {
                meals.map(meal => <Meal key={meal.idMeal} food={meal}></Meal>)
            }
        </div>
    );
};

export default Meals;