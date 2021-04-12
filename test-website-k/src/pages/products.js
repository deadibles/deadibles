import React from 'react';
import { Link } from 'react-router-dom';

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



const Products = (props) => {
  return (
    <div style={s.shop}>
      {/* Chocolates  */}
      <Card style={s.card}>
        <CardImg top src={Chocolate} alt='Chocolate' />
        <CardBody>
          <CardTitle tag='h5'>Chocolates</CardTitle>
          <CardText>
            Medicated chocolate! Can come in liquid, syrup or solid chocolates.
            May include seasonal themes and flavors, as well as use candy molds
            for fun shapes!
          </CardText>
          <Button>
            <Link style={s.button} to='/chocolate'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Gummies */}
      <Card style={s.card}>
        <CardImg top src={Gummies} alt='Gummies' />
        <CardBody>
          <CardTitle tag='h5'>Gummies</CardTitle>
          <CardText>
            Medicated gummies! Uses jello for a base and comes in standard jello
            flavors (strawberry, lime, orange, lemon, berry) and various shapes
            (rings, animals, bottlecaps, etc)
          </CardText>
          <Button>
            <Link style={s.button} to='/gummies'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/*Candy */}
      <Card style={s.card}>
        <CardImg top src={Candy} alt='Candy' />
        <CardBody>
          <CardTitle tag='h5'>Candy</CardTitle>
          <CardText>
            Medicated candy! Comes in either lollipop or individual candy form.
            Flavoring is currently: strawberry or lime, more coming soon!
          </CardText>
          <Button>
            <Link style={s.button} to='/candy'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Baked Goods */}
      <Card style={s.card}>
        <CardImg top src={Baked} alt='Baked Goods' />
        <CardBody>
          <CardTitle tag='h5'>Baked Goods</CardTitle>
          <CardText>
            Goods may vary, cookies/brownies will be regularly available with
            seasonal goods for holidays. Quantity ranges from individual
            servings to requesting an entire cake. More details in the future!
          </CardText>
          <Button>
            <Link style={s.button} to='/baked-goods'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Canna-Powder */}
      <Card style={s.card}>
        <CardImg top src={Powder} alt='Canna-Powder' />
        <CardBody>
          <CardTitle tag='h5'>Canna-Powder</CardTitle>
          <CardText>
            Dehydrated Canna-Oil! Use it in place of oil, or on any heated dish
            to encorporate cannabis. Acts like a sugar so it dissolves in
            liquid, and your body absorbs it faster!
          </CardText>
          <Button>
            <Link style={s.button} to='/canna-powder'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Capsules */}
      <Card style={s.card}>
        <CardImg top src={Capsules} alt='Canna-Capsules' />
        <CardBody>
          <CardTitle tag='h5'>Capsules</CardTitle>
          <CardText>
            Vegetable-based consumable capsules that have been filled with
            cannapowder. Microdose on the go without the mess of exposed powder!
            Tablets are water soluble so avoid moisture!!
          </CardText>
          <Button>
            <Link style={s.button} to='/capsules'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Butter */}
      <Card style={s.card}>
        <CardImg top src={Butter} alt='Butter' />
        <CardBody>
          <CardTitle tag='h5'>Capsules</CardTitle>
          <CardText>
            Vegetable-based consumable capsules that have been filled with
            cannapowder. Microdose on the go without the mess of exposed powder!
            Tablets are water soluble so avoid moisture!!
          </CardText>
          <Button>
            <Link style={s.button} to='/butter'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Vegetable Oil */}
      <Card style={s.card}>
        <CardImg top src={vOil} alt='Vegetable Oil' />
        <CardBody>
          <CardTitle tag='h5'>Vegetable Oil</CardTitle>
          <CardText>Cannabis infused oil, using a vegetable oil base.</CardText>
          <Button>
            <Link style={s.button} to='/vegetable-oil'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Olive Oil */}
      <Card style={s.card}>
        <CardImg top src={oOil} alt='Olive Oil' />
        <CardBody>
          <CardTitle tag='h5'>Olive Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using an olive oil base. Classic extra virgin
            olive oil, provided by your local grocer.
          </CardText>
          <Button>
            <Link style={s.button} to='/olive-oil'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Coconut Oil */}
      <Card style={s.card}>
        <CardImg top src={cocoOil} alt='Coconut Oil' />
        <CardBody>
          <CardTitle tag='h5'>Coconut Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using a coconut oil base. Cannabis bonds best
            with coconut oil due to the high fat content, we use vegan,
            unfiltered coconut oil, so it has that coconuty taste!
          </CardText>
          <Button>
            <Link style={s.button} to='/coconut-oil'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Grapeseed Oil */}
      <Card style={s.card}>
        <CardImg top src={gOil} alt='Grapeseed Oil' />
        <CardBody>
          <CardTitle tag='h5'>Grapeseed Oil</CardTitle>
          <CardText>
            Cannabis infused oil, using a grape oil base. More commonly used for
            oriental dishes.
          </CardText>
          <Button>
            <Link style={s.button} to='/grapeseed-oil'>
              Details
            </Link>
          </Button>
        </CardBody>
      </Card>

      {/* Canola Oil */}
      <Card style={s.card}>
        <CardImg top src={canOil} alt='Canola Oil' />
        <CardBody>
          <CardTitle tag='h5'>Canola Oil</CardTitle>
          <CardText>Cannabis infused oil, using a canola oil base.</CardText>
          <Button>
            <Link style={s.button} to='/canola-oil'>
              Details
            </Link>
          </Button>
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
const s = {
  card: {
    display: 'flex',
    flexFlow: 'column',
    alignItems: 'center',
    width: '20%',
    margin: '10px 20px',
    padding: '3px',
        border: '2px solid black',
    },
    button: {
        textDecoration: 'none',
        color: '#ffffff'
    },
    shop: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'center',
        margin: '1rem',
        textDecoration: 'none',
    }
}