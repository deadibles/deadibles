import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import FAQ from '../pages/faq';
import Products from '../pages/products';
import Home from '../pages/home';
import Chocolates from '../pages/chocolates';
import Canola from '../pages/canOil';
import Olive from '../pages/oOil';
import Vegetable from '../pages/vOil';
import Butter from '../pages/baked';
import BakedGoods from '../pages/baked';
import Candy from '../pages/candy';
import Gummies from '../pages/gummies';
import Powder from '../pages/powder';
import Capsules from '../pages/capsules';
import Grapeseed from '../pages/gOil';
import Coconut from '../pages/cocoOil';




const Main = () => {
    return (
      <Fragment>
        <Route exact path='/' component={Home} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/faq' component={FAQ} />
        <Route exact path='/chocolate' component={Chocolates} />
        <Route exact path='/canola-oil' component={Canola} />
        <Route exact path='/olive-oil' component={Olive} />
        <Route exact path='/vegetable-oil' component={Vegetable} />
        <Route exact path='/butter' component={Butter} />
        <Route exact path='/baked-goods' component={BakedGoods} />
        <Route exact path='/candy' component={Candy} />
        <Route exact path='/gummies' component={Gummies} />
        <Route exact path='/canna-powder' component={Powder} />
        <Route exact path='/capsules' component={Capsules} />
        <Route exact path='/grapeseed-oil' component={Grapeseed} />
        <Route exact path='/coconut-oil' component={Coconut} />
      </Fragment>
    );
};

export default Main;
