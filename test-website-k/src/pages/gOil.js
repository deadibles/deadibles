import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';

const GOil = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Grapeseed Oil</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Cannabis infused oil, using a grape oil base. More commonly used for
        oriental dishes. Recipe suggestions below!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>
            High Heat / Sauté / Stir-Fry
          </h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Roasting Vegetables</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Grilling</h5>
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

export default GOil;
