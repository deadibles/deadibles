import React from 'react';
import { Link } from 'react-router-dom';
import { MDBRow, MDBCol } from 'mdbreact';
import { Button } from 'reactstrap';

import './chocolates.css';
const Powder = () => {
  return (
    <section className='text-center my-5'>
      <h2 className='h1-responsive font-weight-bold my-5'>Canna-Poweder</h2>
      <p className='lead grey-text w-responsive mx-auto mb-5'>
        Dehydrated Canna-Oil! Use it in place of oil, or on any heated dish to
        encorporate cannabis. Acts like a sugar so it dissolves in liquid, and
        your body absorbs it faster!
      </p>
      <MDBRow>
        <MDBCol md='4'>
          {/* <img src={Gummy1} alt='gummy-1' /> */}
          <h5 className='font-weight-bold my-4'>What is Canna-Powder?</h5>
          <p className='grey-text mb-md-0 mb-5'>
            By combining the already infused oils listed here with specific
            (commercially available) powder, the oil can be dehydrated, allowing
            it to be applied like a dry spice (sugar/salt/pepper/etc).
          </p>
        </MDBCol>
        <MDBCol md='4'>
          {/* <img src={Gummy2} alt='gummy-2' /> */}
          <h5 className='font-weight-bold my-4'>
            What is Canna-Powder Continued
          </h5>
          <p className='grey-text mb-md-0 mb-5'>
            While you can consume this as-is like the oils, the chalky texture
            isn't exactly desirable, so either completely blending the material
            to encorporate into your food, or applying heat to melt it will
            allow it to soak into the food, for tastier consumption.
          </p>
        </MDBCol>
        <MDBCol md='4'>
          {/* <img src={Gummy3} alt='gummy-3' /> */}
          <h5 className='font-weight-bold my-4'>Resources</h5>
          <p className='grey-text mb-md-0 mb-5'>
            <a href='http://www.thefreshtoast.com/'>
              Relatively Simple Modernist Marijuana Cooking: Powdered
              Cannabutter
            </a>
          </p>
          
          <p className='grey-text mb-md-0 mb-5'>
            <a href='http://www.rxleaf.com/'>
              Cannabis oil powder has 15 minute effect time
            </a>
          </p>
          <p className='grey-text mb-md-0 mb-5'>
            <a href='http://www.cannadish.net/'>
              3x faster edibles using cannabis oil powder
            </a>
          </p>
        </MDBCol>
          </MDBRow>
          {' '}
      <Link className='button' to='/products'>
        <Button>Back to Products</Button>
      </Link>{' '}
    </section>
  );
};

export default Powder;