import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import VideoBG from './components/videobg';
import Menu from './components/menu';

import './styles.scss';

class MainContainer extends Component {
  render() {
    return (
      <section className='home-page'>
        <header>
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
