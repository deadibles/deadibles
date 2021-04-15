import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';
import Chocolate1 from '../images/choco1.jpg';
import Chocolate2 from '../images/choco2.jpg';
import Chocolate3 from '../images/chocoPaint.jpeg';


const Chocolates = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Chocolates</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Medicated chocolate! Can come in liquid, syrup or solid chocolates. May
        include seasonal themes and flavors, as well as use candy molds for fun
        shapes!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <img src={Chocolate1} alt='chocolates-1' />
          <h5 className='font-weight-bold my-4'>Chocolate Squares</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <img src={Chocolate2} alt='chocolates-2' />
          <h5 className='font-weight-bold my-4'>Chocolate Lollipops</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <img src={Chocolate3} alt='chocolates-3' />
          <h5 className='font-weight-bold my-4'>Edible Chocolate Paint</h5>
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

export default Chocolates;