import React from 'react';
import { NavLink } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import github from './img/github-icon-black.png';
import './styles.scss';

const Menu = () =>
  (<nav id='menu' className='menu'>
    <ul>
    <li>
        <NavLink exact to='/' className={ 'home-menu' } title="No hay nada como localhost">
          <FormattedMessage id='main.menu.home' />
        </NavLink>
      </li>
      <li>
        <NavLink exact to='/about' className={ 'about-menu' } title="Conoce más de los que formamos Codents_">
          <FormattedMessage id='main.menu.about' />
        </NavLink>
      </li>

      <li>
        <a>|</a>
      </li>
      <li>
        <a href='https://github.com/Codents' className='github-icon' target="_blank" title="Github de Codents_">
          <img src={ github } alt='github.com' />
        </a>
      </li>
    </ul>
  </nav>);

export default Menu;
/*<li>
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
</li>*/
