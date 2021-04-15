import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';

const Capsules = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Capsules</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Vegetable-based consumable capsules that have been filled with
        cannapowder. Microdose on the go without the mess of exposed powder!
        Tablets are water soluble so avoid moisture!!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          {/* <img src={Chocolate1} alt='chocolates-1' /> */}
          <h5 className='font-weight-bold my-4'>Vegetarian</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          {/* <img src={Chocolate2} alt='chocolates-2' /> */}
          <h5 className='font-weight-bold my-4'>Capsule size: 0</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          {/* <img src={Chocolate3} alt='chocolates-3' /> */}
          <h5 className='font-weight-bold my-4'>Microdose on the go!</h5>
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

export default Capsules;
