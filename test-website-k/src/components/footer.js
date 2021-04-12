import React from 'react';
import {MDBContainer, MDBFooter } from 'mdbreact';

const FooterPage = () => {
  return (
      <MDBFooter style={s.footer } className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'></MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid style = {s.text}>
          &copy; {new Date().getFullYear()} Deadibles:{' '}
        </MDBContainer>
      </div>
    </MDBFooter>
  );
};

export default FooterPage;
const s = {
  footer: {
    left: '0',
    bottom: '0',
    right: '0',
    backgroundColor: '#375a2a',
    },
    text: {
        color: '#fff',
    }
};