import React, { Component } from 'react';
import { FormattedMessage } from 'react-intl';
import $ from 'jquery';
import './styles.scss';

export default class VideoBG extends Component {
  componentDidMount() {
    this.scaleVideoContainer();

    this.initBannerVideoSize('.video-container .poster img');
    this.initBannerVideoSize('.video-container .filter');
    this.initBannerVideoSize('.video-container video');

    $(window).on('resize', () => {
      this.scaleVideoContainer();
      this.scaleBannerVideoSize('.video-container .poster img');
      this.scaleBannerVideoSize('.video-container .filter');
      this.scaleBannerVideoSize('.video-container video');
    });
  }

  scaleVideoContainer() {
    const height = $(window).height() + 5;
    const unitHeight = `${ parseInt(height, 10) }px`;
    $('.homepage-hero-module').css('height', unitHeight);
  }

  initBannerVideoSize(element) {
    $(element).each(function () {
      $(this).data('height', $(this).height());
      $(this).data('width', $(this).width());
    });

    this.scaleBannerVideoSize(element);
  }

  scaleBannerVideoSize(element) {
    const windowWidth = $(window).width();
    const windowHeight = $(window).height() + 5;
    let videoWidth;
    let videoHeight;

    // console.log(windowHeight);

    $(element).each(function () {
      const videoAspectRatio = $(this).data('height') / $(this).data('width');

      $(this).width(windowWidth);

      if (windowWidth < 1000) {
        videoHeight = windowHeight;
        videoWidth = videoHeight / videoAspectRatio;
        $(this).css({ 'margin-top': 0, 'margin-left': `${ -(videoWidth - windowWidth) / 2 }px` });

        $(this).width(videoWidth).height(videoHeight);
      }

      $('.homepage-hero-module .video-container video').addClass('fadeIn animated');
    });
  }
  render() {
    return (
      <div className='video-component'>
        <div className='video-container'>
          <div className='filter' />
          <video autoPlay loop className='fillWidth'>
            <source src='./videos/keyboardTyping.mp4' type='video/mp4' />{' '}
            <FormattedMessage id='video.nosupported' />
            <source src='./videos/keyboardTyping.webm' type='video/webm' />{' '}
            <FormattedMessage id='video.nosupported' />
          </video>
          <div className='poster hidden'>
            <img src='./videos/keyboardTyping.jpg' alt='' />
          </div>
        </div>
      </div>
    );
  }
}
