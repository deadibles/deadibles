import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
} from 'reactstrap';
import PropTypes from 'prop-types';
import logo from '../images/LogoLong72.png';
import { NavLink as Link } from 'react-router-dom';
import './header.css';

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div>
      <Navbar style={s.nav} dark expand='lg'>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav
            className='mr-auto align-items-center w-100 justify-content-around'
            navbar
          >
            <NavItem>
              <Link className='mNav' to='/products'>
                <h1>Products</h1>
              </Link>
            </NavItem>
            <NavbarBrand className='w-25'>
              <Link className='mNav' to='/products'>
                <img style={s.img} src={logo} alt='logo' />
              </Link>
            </NavbarBrand>
            <NavItem>
              <Link className='mNav' to='/faq'>
                <h1>FAQ</h1>
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

Navbar.propTypes = {
  light: PropTypes.bool,
  dark: PropTypes.bool,
  fixed: PropTypes.string,
  color: PropTypes.string,
  role: PropTypes.string,
  expand: PropTypes.oneOfType([PropTypes.bool, PropTypes.string]),
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

NavbarBrand.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};
NavbarText.propTypes = {
  tag: PropTypes.oneOfType([PropTypes.func, PropTypes.string]),
  // pass in custom element to use
};

export default Header;
const s = {
  nav: {
    backgroundColor: '#416032',
    color: '#000',
    borderBottom: '1px solid #e7af2e',
    textDecoration: 'none',

  },
  img: {
    width: '100%',
    margin: '0',
    padding: '0',
    border: 'solid 2px #E6AF2E',
  },
};