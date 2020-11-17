import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../images/logo.svg'
import './styles/Navbar.css';

class Navbar extends React.Component {
  render() {
    return (
      <div className='Navbar'>
        <div className='container-fluid'>

          <Link to="/" className='Navbar__brand'>
            <img className='Navbar__logo' src={logo} alt='logo' />
            <span className='font-weight-light'>Platzi</span>
            <span className='font-weight-bold'>Conf</span>
          </Link>
        </div>
      </div>
    );
  };
};

export default Navbar;