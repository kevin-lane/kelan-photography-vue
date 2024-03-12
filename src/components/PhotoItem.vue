<script>
  import colombo from "@/assets/colombo.jpg";
import GoBackButton from "./icons/GoBackButton.vue";

  export default {
    props: {
        title: String,
        description: String,
        image: Image
    },
    components: { GoBackButton }
}
</script>

<template>
  <div id="photo-item-container">
    <!-- <img src="colombo" alt=""> -->
    <GoBackButton @click="$emit('goBack')" />
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

  #photo-item-container{
    position: relative;
  }

  #download-button{
    width: 400px;
    height: 70px;
    border-color: white;
    background-color: black;
    color: white;
    font-family: 'Cinzel';
    font-size: x-large;
    margin-bottom: 20px;
    /* position: absolute;
    margin: ;
    margin-bottom: 0; */
    /* margin: auto;
    bottom: 100px; */
  }
</style>
