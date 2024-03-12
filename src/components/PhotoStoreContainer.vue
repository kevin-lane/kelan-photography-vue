<script>
import PhotoStore from './PhotoStore.vue';
import PhotoItem from './PhotoItem.vue';
  export default {
    data(){
      return{
        photoItem: false
      }
    },
    methods: {
      goToImage(){
        this.photoItem = true;
      },
      goBackToStore(){
        this.photoItem = false;
      }
    },
    components: { PhotoStore, PhotoItem }
}
</script>

<template>
  <div id="container">
    <PhotoItem v-if="photoItem" @go-back="goBackToStore"/>
    <PhotoStore v-else @open-photo="goToImage"/>
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
