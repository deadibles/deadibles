import React from 'react';
import { NavLink as Link } from 'react-router-dom';
// import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';

const recipes = [
    {
        title: 'Medicated Corn Ribs',
        description: 'Imagine the savoriness of smoky ribs, biting into that savory rib sauce, without the meat! Vegetarian meal',
        ingredients: [ '4 TBSP Canna-olive oil','4 Ears of Corn/Corn cobs','1 TSP Lemon Pepper', '1/2 TSP Garlic Powder', ' 1/2 TSP Chili Powder', '1/4 TSP Pepper', '1/2 TSP Smoked Paprika', '1/2 CUP Mayo', '1 TBSP Lime Juice', 'Salt', '1 TSP Lemon Zest (optional)'],
        steps: ['In a medium bowl, mix together: Canna-olive oil, lemon pepper, garlic powder, chili powder, pepper, smoked paprika, and a pinch of salt', 'Using the brush, spread the mixture on the corn', 'Put in the air fryer at 400°F for 20 minutes and flip halfway', 'Meanwhile the corn is in the air fryer, in another medium bowl, mix the leftover sauce and mayo, lime juice, a pinch of salt, and lemon zest', 'Once corn is out of the air fryer, drizzle with mayo mixture', 'Enjoy!'],
        feeds: '2',
        portions: '2',
        difficulty: 'Easy',
        date: 'April 14, 2021',
        img: '',
        tools: ['Air fryer', 'Brush', '2 Mixing Bowls'],
        allergens: ['Dairy', 'Eggs'],
        sizzle: 'Ribs without the Meat!',
        cookTime: '20 minutes',
        totalTime: '30 minutes',
        cannaDish: 'Olive Oil'
    },
    {
        title: '',
        description: '',
        ingredients: [],
        steps: [],
        feeds: '',
        portions: '',
        difficulty: '',
        date: '',
        img: '',
        tools: [],
        allergens: [],
        sizzle: '',
        cookTime: '',
        totalTime: '',
        cannaDish: '',
    },
]


const Recipes = () => {
  return (
    <div>
        <p>Recipes recommended by the Chef:</p> 
    </div>
  );
};

export default Recipes;
