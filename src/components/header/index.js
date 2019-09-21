import React from 'react';
import { withRouter, Link } from 'react-router-dom';

import LyonSetupMin from '../../static/img/Lyon-Setup-min.JPG';

class Header extends React.Component {
  state = {
    isOpenMenu: false
  };

  toggleMenu = () =>
    this.setState(prevState => ({ isOpenMenu: !prevState.isOpenMenu }));

  render() {
    const { isOpenMenu } = this.state;

    const { location } = this.props;

    return (
      <header>
        <div
          className={`menu-btn ${isOpenMenu ? 'close' : ''}`}
          onClick={this.toggleMenu}
        >
          <div className='btn-line'></div>
          <div className='btn-line'></div>
          <div className='btn-line'></div>
        </div>

        <nav className={`menu ${isOpenMenu ? 'show' : ''}`}>
          <div className={`menu-branding ${isOpenMenu ? 'show' : ''}`}>
            <img className='picture' src={LyonSetupMin} alt='Lyon Setup' />
            <div className='portrait'></div>
          </div>
          <ul className={`menu-nav ${isOpenMenu ? 'show' : ''}`}>
            <li
              className={`nav-item ${
                location.pathname === '/' ? 'current' : ''
              }  ${isOpenMenu ? 'show' : ''}`}
            >
              <Link to='/' className='nav-link' onClick={this.toggleMenu}>
                {' '}
                Home{' '}
              </Link>
            </li>

            <li
              className={`nav-item ${isOpenMenu ? 'show' : ''} ${
                location.pathname === '/about' ? 'current' : ''
              } `}
            >
              <Link to='/about' className='nav-link' onClick={this.toggleMenu}>
                {' '}
                About Me{' '}
              </Link>
            </li>

            <li
              className={`nav-item ${isOpenMenu ? 'show' : ''} ${
                location.pathname === '/experience' ? 'current' : ''
              } `}
            >
              <Link
                to='/experience'
                className='nav-link'
                onClick={this.toggleMenu}
              >
                {' '}
                My Experience{' '}
              </Link>
            </li>

            <li
              className={`nav-item ${isOpenMenu ? 'show' : ''} ${
                location.pathname === '/contact' ? 'current' : ''
              } `}
            >
              <Link
                to='/contact'
                className='nav-link'
                onClick={this.toggleMenu}
              >
                {' '}
                How to Reach Me{' '}
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default withRouter(Header);
