import React from 'react';
import { Button } from 'reactstrap';
import { MDBContainer, MDBFooter } from 'mdbreact';
import { FaArrowCircleUp } from 'react-icons/fa';
import './footer.css';

const FooterPage = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: '0',
      behavior: 'smooth',
    });
  };

  return (
    <MDBFooter style={s.footer} className='font-small pt-4 mt-4'>
      <MDBContainer fluid className='text-center text-md-left'></MDBContainer>
      <div className='footer-copyright text-center py-3'>
        <MDBContainer fluid style={s.text}>
          &copy; {new Date().getFullYear()} Deadibles:{' '}
        </MDBContainer>
        {/* <Button className='topButton' onClick={scrollToTop}>
          <p className='topText'><FaArrowCircleUp /></p>
        </Button> */}
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
    borderTop: '1px solid #e7af2e !important',
  },
  text: {
    color: '#e7af2e',
  },
};