import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';

const CocoOil = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Coconut Oil</h2>
      <p className='lead grey-text w-responsive mx-auto mb-5'>
        Cannabis infused oil, using a coconut oil base. Cannabis bonds best with
        coconut oil due to the high fat content, we use vegan, unfiltered
        coconut oil, so it has that coconuty taste! Recipe suggestions below!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Fudge</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Chocolate Sauce / Chocolate Gravy</h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>
            Moisturizer / Lotion / Lube (We won't tell )
          </h5>
          {/* <p className='grey-text mb-md-0 mb-5'>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Reprehenderit maiores aperiam minima assumenda deleniti hic.
          </p> */}
        </MDBCol>
      </MDBRow>
      <Link className='button' to='/products'>
        <Button>Back to Products</Button>
      </Link>{' '}
    </section>
  );
};

export default CocoOil;
