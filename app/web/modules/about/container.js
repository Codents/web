import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import Bioinfo from './components/bioinfo';
import Linkedin from './components/linkedin';

import './styles.scss';

class AboutContainer extends Component {
  render() {
    return (
      <section className='about-page'>                
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
