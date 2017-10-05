import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Bioinfo from './components/bioinfo';
import Linkedin from './components/linkedin';
import {Helmet} from "react-helmet";

import './styles.scss';

class AboutContainer extends Component {
  render() {
    return (
      <section className='about-page'>
        <Helmet>
          <title>Codents_ Quiénes somos</title>
          <meta name="description" content="Codents_ Quiénes somos" />
          <link rel="canonical" href="https://www.codents.net/about" />
          <meta property="og:title"              content="Codents_ Quiénes somos" />
          <meta property="og:description"        content="Codents_ Quiénes somos" />
          <meta property="og:url"                content="https://www.codents.net/about" />
          <body className="about-page" />
        </Helmet>
        <Bioinfo />
        <Linkedin />
      </section>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(AboutContainer);
