import React from 'react';
import { NavLink as Link } from 'react-router-dom';

import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import Gummies from '../images/Gummies.png';
import Chocolate from '../images/chocolate.png';
import Candy from '../images/Candy.png';
import Baked from '../images/Cake.png';
import Powder from '../images/Powder.png';
import Capsules from '../images/Capsules.png';
import vOil from '../images/vegetable.png';
import oOil from '../images/olives.png';
import cocoOil from '../images/coconut.png';
import canOil from '../images/lavender.png';
import gOil from '../images/grapes.png';
import Butter from '../images/butter.png';
import './products.css';


const Products = (props) => {
  return (
    <div className='shop'>
      {/* Chocolates  */}
      <Card>
        <CardImg top src={Chocolate} alt='Chocolate' />
        <CardBody>
          <CardTitle tag='h5'>Chocolates</CardTitle>
          <CardText>
            Medicated chocolate! Can come in liquid, syrup or solid chocolates.
            May include seasonal themes and flavors, as well as use candy molds
            for fun shapes!
          </CardText>
          <Link className='button' to='/chocolate'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Gummies */}
      <Card>
        <CardImg top src={Gummies} alt='Gummies' />
        <CardBody>
          <CardTitle tag='h5'>Gummies</CardTitle>
          <CardText>
            Medicated gummies! Uses jello for a base and comes in standard jello
            flavors (strawberry, lime, orange, lemon, berry) and various shapes
            (rings, animals, bottlecaps, etc)
          </CardText>
          <Link className='button' to='/gummies'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/*Candy */}
      <Card>
        <CardImg top src={Candy} alt='Candy' />
        <CardBody>
          <CardTitle tag='h5'>Candy</CardTitle>
          <CardText>
            Medicated candy! Comes in either lollipop or individual candy form.
            Flavoring is currently: strawberry or lime, more coming soon!
          </CardText>
          <Link className='button' to='/candy'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Baked Goods */}
      <Card>
        <CardImg top src={Baked} alt='Baked Goods' />
        <CardBody>
          <CardTitle tag='h5'>Baked Goods</CardTitle>
          <CardText>
            Goods may vary, cookies/brownies will be regularly available with
            seasonal goods for holidays. Quantity ranges from individual
            servings to requesting an entire cake. More details in the future!
          </CardText>
          <Link className='button' to='/baked-goods'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Canna-Powder */}
      <Card>
        <CardImg top src={Powder} alt='Canna-Powder' />
        <CardBody>
          <CardTitle tag='h5'>Canna-Powder</CardTitle>
          <CardText>
            Dehydrated Canna-Oil! Use it in place of oil, or on any heated dish
            to encorporate cannabis. Acts like a sugar so it dissolves in
            liquid, and your body absorbs it faster!
          </CardText>
          <Link className='button' to='/canna-powder'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Capsules */}
      <Card>
        <CardImg top src={Capsules} alt='Canna-Capsules' />
        <CardBody>
          <CardTitle tag='h5'>Capsules</CardTitle>
          <CardText>
            Vegetable-based consumable capsules that have been filled with
            cannapowder. Microdose on the go without the mess of exposed powder!
            Tablets are water soluble so avoid moisture!!
          </CardText>
          <Link className='button' to='/capsules'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Butter */}
      <Card>
        <CardImg top src={Butter} alt='Butter' />
        <CardBody>
          <CardTitle tag='h5'>Butter</CardTitle>
          <CardText>Cannabis infused salted butter (In stick form).</CardText>
          <Link className='button' to='/butter'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Vegetable Oil */}
      <Card>
        <CardImg top src={vOil} alt='Vegetable Oil' />
        <CardBody>
          <CardTitle tag='h5'>Vegetable Oil</CardTitle>
          <CardText>Cannabis infused oil, using a vegetable oil base.</CardText>
          <Link className='button' to='/vegetable-oil'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Olive Oil */}
      <Card>
        <CardImg top src={oOil} alt='Olive Oil' />
        <CardBody>
          <CardTitle tag='h5'>Olive Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using an olive oil base. Classic extra virgin
            olive oil, provided by your local grocer.
          </CardText>
          <Link className='button' to='/olive-oil'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Coconut Oil */}
      <Card>
        <CardImg top src={cocoOil} alt='Coconut Oil' />
        <CardBody>
          <CardTitle tag='h5'>Coconut Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using a coconut oil base. Cannabis bonds best
            with coconut oil due to the high fat content, we use vegan,
            unfiltered coconut oil, so it has that coconuty taste!
          </CardText>
          <Link className='button' to='/coconut-oil'>
            <Button>Details</Button>
          </Link>
        </CardBody>
      </Card>

      {/* Grapeseed Oil */}
      <Card>
        <CardImg top src={gOil} alt='Grapeseed Oil' />
        <CardBody>
          <CardTitle tag='h5'>Grapeseed Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using a grape oil base. More commonly used for
            oriental dishes.
          </CardText>
          <Link className='button' to='/grapeseed-oil'>
            <Button>Details</Button>
          </Link>{' '}
        </CardBody>
      </Card>

      {/* Canola Oil */}
      <Card>
        <CardImg top src={canOil} alt='Canola Oil' />
        <CardBody>
          <CardTitle tag='h5'>Canola Oil</CardTitle>
          <CardText>Cannabis infused oil, using a canola oil base.</CardText>
          <Link className='button' to='/canola-oil'>
            <Button>Details</Button>
          </Link>{' '}
        </CardBody>
      </Card>
    </div>
  );
};

Card.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  inverse: PropTypes.bool,
  color: PropTypes.string,
  body: PropTypes.bool,
  className: PropTypes.string,
};
CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

CardBody.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};


CardImg.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
  // Use top or bottom to position image via "card-img-top" or "card-img-bottom"
  top: PropTypes.bool,
  bottom: PropTypes.bool,
};

CardSubtitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardText.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

CardTitle.propTypes = {
  // Pass in a Component to override default element
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  className: PropTypes.string,
};

export default Products;
