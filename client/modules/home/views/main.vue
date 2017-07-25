<style src="./style.css"></style>

<template>
    <div className='home-page'>
      <header>
        <p className='message'>
          {{$t('main.message.up.left')}}
        </p>
        <Menu />
      </header>
      <VideoBG />
      <footer>
        {{$t('main.message.down.left')}}
      </footer>
    </div>
</template>


<script>
import VideoBG from '../components/videobg';
import Menu from '../components/menu';

export default {
    name 'Main',
    components: {
        VideoBG,
        Menu
    }
}
</script>
