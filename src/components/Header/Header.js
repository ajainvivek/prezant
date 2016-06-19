import React from 'react'
import { IndexLink, Link } from 'react-router'
import classes from './Header.scss'

export const Header = () => (
  <nav className='navbar navbar-default navbar-custom navbar-fixed-top'>
    <div className='container'>
      <div className='navbar-header'>
        <IndexLink to='/' className='navbar-brand' >
          <img alt='Brand' src='editor_logo.png' />
        </IndexLink>
      </div>
      <ul className='nav navbar-nav navbar-right'>
        <li>
          <IndexLink to='/' activeClassName={classes.activeRoute}>
            Home
          </IndexLink>
        </li>
        <li>
          <Link to='/counter' activeClassName={classes.activeRoute}>
            Counter
          </Link>
        </li>
      </ul>
    </div>
  </nav>
)

export default Header
