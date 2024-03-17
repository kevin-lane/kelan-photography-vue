<script>
  export default {
    props: {
        companyHeading: String,
        slogan: String
    }
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
    width: 305px;
    min-height: 350px;
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
