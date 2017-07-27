import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import github from './img/github-icon-white.png';
import './styles.scss';

const Menu = () =>
  (<nav id='menu' className='menu'>
    <ul>
      <li>
        <Link to='/about'>
          <FormattedMessage id='main.menu.about' />
        </Link>
      </li>
      <li>
        <Link to='/works'>
          <FormattedMessage id='main.menu.work' />
        </Link>
      </li>
      <li>
        <Link to='/contacts'>
          <FormattedMessage id='main.menu.contact' />
        </Link>
      </li>
      <li>
        <Link to='/login'>
          <FormattedMessage id='main.menu.signin' />
        </Link>
      </li>
      <li>
        <a>|</a>
      </li>
      <li>
        <a href='https://github.com/Codents/web'>
          <img src={ github } alt='github.com' />
        </a>
      </li>
    </ul>
  </nav>);

export default Menu;
