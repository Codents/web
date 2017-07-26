import React from 'react';
import { FormattedMessage } from 'react-intl';

import github from '../../../../assets/img/github-icon-white.png';
import './styles.scss';

const Menu = () =>
  (<nav id='menu' className='menu'>
    <ul>
      <li>
        <a href='#about'>
          <FormattedMessage id='main.menu.about' />
        </a>
      </li>
      <li>
        <a href='#works'>
          <FormattedMessage id='main.menu.work' />
        </a>
      </li>
      <li>
        <a href='#contacts'>
          <FormattedMessage id='main.menu.contact' />
        </a>
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
