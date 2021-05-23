import React from 'react';
import {NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import Cupcakes from '../images/Cupcakes.jpeg';
import Cupcakes2 from '../images/Cupcake2.jpeg';
import Cupcakes3 from '../images/Cupcake3.jpeg';
import './chocolates.css';
const Baked = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Baked Goods</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Goods may vary, cookies/brownies will be regularly available with
        seasonal goods for holidays. Quantity ranges from individual servings to
        requesting an entire cake. More details in the future!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <img src={Cupcakes} alt='Cupcakes' />
        </MDBCol>
        <MDBCol md='4'>
          <img src={Cupcakes2} alt='Cupcakes2' />
        </MDBCol>
        <MDBCol md='4'>
          <img src={Cupcakes3} alt='Cupcakes3' />
        </MDBCol>
      </MDBRow>
      <h6 className='font-weight-bold my-4'>
        Mini Spice Cupcakes with Cream Cheese Frosting
      </h6>
      <p>
        This week of 5/23/2021 - 5/29/2021 we have medicated mini spice cupcakes
        with cream cheese frosting. Using our cannabis infused vegetable oil we made this delicious spice cake.
      </p>
      <Link className='button' to='/products'>
        <Button className='butRef'>Back to Products</Button>
      </Link>{' '}
    </section>
  );
};

export default Baked;
