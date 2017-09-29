import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import github from './img/github-icon-white.png';
import './styles.scss';

const Menu = () =>
  (<nav id='menu' className='menu'>
    <ul>
    <li>
        <Link to='/' className={ 'home-menu' }>
          <FormattedMessage id='main.menu.home' />
        </Link>
      </li>
      <li>
        <Link to='/about' className={ 'about-menu' }>
          <FormattedMessage id='main.menu.about' />
        </Link>
      </li>
      <li>
        <Link to='/work' className={ 'work-menu' }>
          <FormattedMessage id='main.menu.work' />
        </Link>
      </li>
      <li>
        <Link to='/contacts' className={ 'contact-menu' }>
          <FormattedMessage id='main.menu.contact' />
        </Link>
      </li>
      <li>
        <Link to='/signin' className={ 'signin-menu' }>
          <FormattedMessage id='main.menu.signin' />
        </Link>
      </li>
      <li>
        <a>|</a>
      </li>
      <li>
        <a href='https://github.com/Codents/web' className='github-icon'>
          <img src={ github } alt='github.com' />
        </a>
      </li>
    </ul>
  </nav>);

export default Menu;
