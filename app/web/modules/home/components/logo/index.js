import React from 'react';
import { Link } from 'react-router-dom';
import { FormattedMessage } from 'react-intl';
import Favicon from 'react-favicon';

import logo from './img/logo.png';
import faviconPng from './img/favicon-32.png';
import faviconIco from './img/favicon-32.png';

import './styles.scss';

const Logo = () =>
  (<h1 id='logo'>
    <Favicon url={[faviconIco,faviconPng]} />
    <img src={ logo } alt=""/>
  </h1>);

export default Logo;
