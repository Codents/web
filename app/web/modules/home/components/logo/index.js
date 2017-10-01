import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';

import logo from './img/logo.png';
import './styles.scss';

const Logo = () =>
  (<h1 id='logo'>
    <img src={ logo } alt=""/>
  </h1>);

export default Logo;
