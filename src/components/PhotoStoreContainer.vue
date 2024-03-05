<script>
import PhotoStore from './PhotoStore.vue';
  export default {
    components: { PhotoStore }
}
</script>

<template>
  <div id="container">
    <PhotoStore />
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  @import url('https://fonts.googleapis.com/css?family=Ephesis');

  #container{
    margin: auto;
    text-align: center;
    background-color: black;
    color: white;
    width: 1200px;
    min-height: 500px;
    border-radius: 2rem;
    opacity: 0.8;
  }

  p{
    font-family: 'Ephesis';
    font-size: 40px;

  }
</style>
