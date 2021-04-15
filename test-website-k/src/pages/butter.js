import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';
import './chocolates.css';

const Butter = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Butter</h2>
      <p className='lead black-text w-responsive mx-auto mb-5'>
        Cannabis infused salted butter (In stick form). Recipe suggestions
        below!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>French Toast</h5>
          <p className='black-text mb-md-0 mb-5'>
            <a
              href='https://www.thesocialweed.com/recipes/canna-french-toast/'
              target='_blank'
              rel='noreferrer'
            >
              Click here for a French Toast Recipe (Opens in new tab or window)
            </a>
          </p>
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Rice Krispy Treats</h5>
          <p className='black-text mb-md-0 mb-5'>
            <a
              href='https://loudbowl.com/wprm_print/16191'
              target='_blank'
              rel='noreferrer'
            >
              Click here for a Rice Krispy Treat Recipe (Opens in new tab or
              window)
            </a>
          </p>
        </MDBCol>
        <MDBCol md='4'>
          <h5 className='font-weight-bold my-4'>Mac & Cheese</h5>
          <p className='grey-text mb-md-0 mb-5'>
            <a
              href='https://cannabisspatula.com/cannabis-kraft-macaroni-and-cheese/print/649/'
              target='_blank'
              rel='noreferrer'
            >
              Click here for a Mac & Cheese Recipe (Opens in new tab or
              window)
            </a>
          </p>
        </MDBCol>
      </MDBRow>
      <Link className='button' to='/products'>
        <Button className='butRef'>Back to Products</Button>
      </Link>{' '}
    </section>
  );
};

export default Butter;
