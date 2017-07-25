<style src="./style.css"></style>

<template>
<div className='video-component'>
  <div className='video-container'>
    <div className='filter' />
    <video autoPlay loop className='fillWidth'>
          <source src='./videos/keyboardTyping.mp4' type='video/mp4' /> {$t('video.nosupported')}
          <source src='./videos/keyboardTyping.webm' type='video/webm' /> {$t('video.nosupported')}
        </video>
    <div className='poster hidden'>
      <img src='./videos/keyboardTyping.jpg' alt='' />
    </div>
  </div>
</div>
</template>

<script>
export default {
    name: 'VideoBG'
}

</script>
