import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import VideoBG from './components/videobg';
import Menu from './components/menu';
import Logo from './components/logo';
import {Helmet} from "react-helmet";

import './styles.scss';

class MainContainer extends Component {
  render() {
    return (
      <section className='home-page'>
      <Helmet>
        <title>Codents_ Expandiendo la red.</title>
        <meta name="description" content="Codents_ es grupo de I+D+i con metodologías de trabajo dinámicas que nos permiten adaptarnos a las corrientes tecnológicas para dar la mejor solución en cada proyecto" />
        <meta property="og:title"              content="Codents_ Expandiendo la red." />
          <meta property="og:description"        content="Codents_ es grupo de I+D+i con metodologías de trabajo dinámicas que nos permiten adaptarnos a las corrientes tecnológicas para dar la mejor solución en cada proyecto" />
        <link rel="canonical" href="https://www.codents.net/" />
        <meta property="og:url"                content="https://www.codents.net" />
        <body className="home-page" />
      </Helmet>
        <header>
          <Logo />
          <Menu />
        </header>
        <footer>
          <FormattedMessage id='main.text.company.name' />
          <br />
          <FormattedMessage id='main.text.company.symbol' />
          <br />
          <FormattedMessage id='main.text.company.target' />
          <br />
          <FormattedMessage id='main.text.company' />
          <br />
        </footer>
        <VideoBG className='video-bg' />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainContainer);
