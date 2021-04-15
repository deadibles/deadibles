import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';
import Gummy1 from '../images/gummy1.jpeg';
import Gummy2 from '../images/gummy2.jpeg';
import Gummy3 from '../images/gummy3.jpeg';
const Gummies = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Gummies</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Medicated gummies! Uses jello for a base and comes in standard jello
        flavors (strawberry, lime, orange, lemon, berry) and various shapes
        (rings, animals, bottlecaps, etc)
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <img src={Gummy1} alt='gummy-1' />
          <h5 className='font-weight-bold my-4'>Bottle Caps</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <img src={Gummy2} alt='gummy-2' />
          <h5 className='font-weight-bold my-4'>Donuts / Rings</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <img src={Gummy3} alt='gummy-3' />
          <h5 className='font-weight-bold my-4'>Various Animals</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
      </MDBRow>
      <Link className='button' to='/products'>
        <Button className='butRef'>Back to Products</Button>
      </Link>{' '}
    </section>
  );
};

export default Gummies;
