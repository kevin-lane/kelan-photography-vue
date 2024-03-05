<script>
import PhotoStore from './PhotoStore.vue';
  export default {
    props: {
        companyHeading: String,
        slogan: String,
        testText: String,
        photoStore: Object
    },
    components: { PhotoStore }
}
</script>

<template>
  <div id="container">
    <h1>{{ companyHeading }}</h1>
    <p>{{ slogan }}</p>
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
    opacity: 0.6;
  }
  h1{
    font-family: 'Cinzel';
    font-size: 80px;
  }
  p{
    font-family: 'Ephesis';
    font-size: 40px;
  }
</style>
