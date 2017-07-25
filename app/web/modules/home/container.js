import React, { Component } from 'react';
import { connect } from 'react-redux';
import { FormattedMessage } from 'react-intl';
import VideoBG from '../components/videobg';
import Menu from '../components/menu';

class MainContainer extends Component {
  render() {
    return (
      <div className='home-page'>
        <header>
          <p className='message'>
            <FormattedMessage id='main.message.up.left' />
          </p>
          <Menu />
        </header>
        <VideoBG />
        <footer>
          <FormattedMessage id='main.message.down.left' />
        </footer>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps)(MainContainer);
