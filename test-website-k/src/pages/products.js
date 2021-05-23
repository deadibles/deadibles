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
import Gummies from '../images/Gummies.jpg';
import Chocolate from '../images/chocolate.jpg';
// import Candy from '../images/Candy.jpg';
import Baked from '../images/Cake.jpg';
import Powder from '../images/Powder.jpg';
import Capsules from '../images/Capsules.jpg';
import vOil from '../images/vegetable.jpg';
import oOil from '../images/olives.jpg';
import cocoOil from '../images/coconut.jpg';
import canOil from '../images/lavender.jpg';
import gOil from '../images/grapes.jpg';
import Butter from '../images/butter.jpg';
import './products.css';
import BackToTop from '../components/mobileB2T';
import '../components/mobileB2T.css';

// const s = {
//   t: {
//     backgroundColor: '#4D2A5A !important',
//     color: '#ECF0F1 !important',
//   },
// };
const items = [
  {
    img: Chocolate ,
    title: 'Chocolates',
    body: 'Medicated chocolate! Can come in liquid, syrup or solid chocolates. May include seasonal themes and flavors, as well as use candy molds for fun shapes!',
    link: '/chocolate',
  },
  {
    img:  Gummies ,
    title: 'Gummies',
    body: 'Medicated gummies! Uses jello for a base and comes in standard jello flavors (strawberry, lime, orange, lemon, berry) and various shapes (rings, animals, bottlecaps, etc)',
    link: '/gummies',
  },
  // {
  //   img: Candy ,
  //   title: 'Candy',
  //   body: 'Medicated candy! Comes in either lollipop or individual candy form. Flavoring is currently: strawberry or lime, more coming soon!',
  //   link: '/candy',
  // },
  {
    img: Baked ,
    title: 'Baked Goods',
    body: 'Goods may vary, cookies/brownies will be regularly available with seasonal goods for holidays. Quantity ranges from individual servings to requesting an entire cake. More details in the future!',
    link: '/baked-goods',
  },
  {
    img: Powder ,
    title: 'Canna-Powder',
    body: 'Dehydrated Canna-Oil! Use it in place of oil, or on any heated dish to encorporate cannabis. Acts like a sugar so it dissolves in liquid, and your body absorbs it faster!',
    link: '/canna-powder',
  },
  {
    img: Capsules ,
    title: 'Capsules',
    body: 'Vegetable-based consumable capsules that have been filled with cannapowder. Microdose on the go without the mess of exposed powder! Tablets are water soluble so avoid moisture!!',
    link: '/capsules',
  },
  {
    img: Butter ,
    title: 'Butter',
    body: 'Cannabis infused salted butter (In stick form).',
    link: '/butter',
  },
  {
    img: vOil ,
    title: 'Vegetable Oil',
    body: 'Cannabis infused oil, using a vegetable oil base.',
    link: '/vegetable-oil',
  },
  {
    img: oOil,
    title: 'Olive Oil',
    body: 'Cannabis infused oil, using an olive oil base. Classic extra virgin olive oil, provided by your local grocer.',
    link: '/olive-oil',
  },
  {
    img: cocoOil,
    title: 'Coconut Oil',
    body: 'Cannabis infused oil, using a coconut oil base. Cannabis bonds best with coconut oil due to the high fat content, we use vegan, unfiltered coconut oil, so it has that coconuty taste!',
    link: '/coconut-oil',
  },
  {
    img: gOil,
    title: 'Grapeseed Oil',
    body: 'Cannabis infused oil, using a grape oil base. More commonly used for oriental dishes.',
    link: '/grapeseed-oil',
  },
  {
    img: canOil,
    title: 'Canola Oil',
    body: 'Cannabis infused oil, using a canola oil base.',
    link: '/canola-oil',
  },

];
const products = items.map( ( product ) => {
   return(
    <Card className='newCard'>
      <CardImg top src={product.img} alt={product.title} />
      <CardBody>
        <CardTitle tag='h5'>{product.title}</CardTitle>
        <CardText>{product.body}</CardText>
        <Link className='button' to={product.link}>
          <Button className='newBtn'>Details</Button>
        </Link>
      </CardBody>
    </Card>
)});
const Products = ( props ) => {

  return (
    <div className='shop'>
      {products}

      <BackToTop />
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

