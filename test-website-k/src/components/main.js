import React from 'react';
import { Route } from 'react-router-dom';
import FAQ from '../pages/faq';
import Products from '../pages/products';
import Home from '../pages/home';
import Chocolates from '../pages/chocolates';
import Canola from '../pages/canOil';
import Olive from '../pages/oOil';
import Vegetable from '../pages/vOil';
import Butter from '../pages/butter';
import BakedGoods from '../pages/baked';
import Candy from '../pages/candy';
import Gummies from '../pages/gummies';
import Powder from '../pages/powder';
import Capsules from '../pages/capsules';
import Grapeseed from '../pages/gOil';
import Coconut from '../pages/cocoOil';




const Main = () => {
    return (
      <div>
        <Route path='/products' component={Products} />
        <Route path='/faq' component={FAQ} />
        <Route path='/chocolate' component={Chocolates} />
        <Route path='/canola-oil' component={Canola} />
        <Route path='/olive-oil' component={Olive} />
        <Route path='/vegetable-oil' component={Vegetable} />
        <Route path='/baked-goods' component={BakedGoods} />
        <Route path='/candy' component={Candy} />
        <Route path='/gummies' component={Gummies} />
        <Route path='/canna-powder' component={Powder} />
        <Route path='/capsules' component={Capsules} />
        <Route path='/grapeseed-oil' component={Grapeseed} />
        <Route path='/coconut-oil' component={Coconut} />
        <Route path='/butter' component={Butter} />
      </div>
    );
};

export default Main;
