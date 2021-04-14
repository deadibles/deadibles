import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  NavbarText,
} from 'reactstrap';
import PropTypes from 'prop-types';
import logo from '../images/LogoLong72.png'

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
              <NavLink href='/products/'>
                <h1>Products</h1>
              </NavLink>
            </NavItem>
            <NavbarBrand className='w-25' href='/'>
              <img style={s.img} src={logo} alt='logo' />
            </NavbarBrand>
            <NavItem>
              <NavLink href='/faq/'>
                <h1>FAQ</h1>
              </NavLink>
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
  },
  img: {
    width: '100%',
    margin: '0',
    padding: '0',
    border: 'solid 2px #E6AF2E',
  },
};