import React from 'react';

import videoMp4 from '../../../../assets/mov/keyboardTyping.mp4';
import videoWebm from '../../../../assets/mov/keyboardTyping.webm';
import poster from '../../../../assets/img/keyboardTyping.jpg';
import './styles.scss';

const VideoBG = () =>
  (<div data-component='video-bg' className='video-filter'>
    <video playsInline autoPlay muted loop poster={ poster } id='bgvid'>
      <source src={ videoWebm } type='video/webm' />
      <source src={ videoMp4 } type='video/mp4' />
    </video>
  </div>);

export default VideoBG;
