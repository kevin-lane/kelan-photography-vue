<script>
  import GoBackButton from "./icons/GoBackButton.vue";
  export default {
    components: { GoBackButton }
  }
</script>

<template>
  <div id="photo-item-container">
    <GoBackButton @click="$emit('goBack')" id="go-back-button" />
    <img :src="this.$store.state.image" :alt="this.$store.state.title" >
    <h1>{{ this.$store.state.title }}</h1>
    <p>{{ this.$store.state.description }}</p>
    <button id="download-button">DOWNLOAD FOR 99KR</button>
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Esteban');
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  h1, p{
    font-family: 'Esteban'
  }
  img{
    width: 780px;
    height: 330px;
    margin-top: 4rem;
  }
  h1{
    font-size: xx-large;
  }

  p{
    font-size: large;
  }

  #photo-item-container{
    position: relative;
  }
  #go-back-button{
    position: absolute;
    top: 5rem;
    left: 3rem;
    cursor: pointer;
  }
  #download-button{
    margin-top: 4rem;
    width: 400px;
    height: 70px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Cinzel';
    font-size: x-large;
    margin-bottom: 20px;
  }
  /* Mobile */
  @media screen and (max-width:768px) {
    img{
      width: 300px;
      height: 150px;
      margin-top: 4rem;
    }
    #download-button{
      width: 250px;
      font-size: large;
    }
    #go-back-button{
      position: absolute;
      top: 1rem;
      left: 2rem;
    }
  }
</style>
