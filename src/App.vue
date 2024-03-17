<script setup>
  import Navbar from './components/Navbar.vue';
  import Container from './components/Container.vue';
  import PhotoStoreContainer from './components/PhotoStoreContainer.vue';
</script>

<script>
  export default {
    data(){
      return{
        home: true
      }
    },
    methods: {
      goToStore(){
        this.home = false;
        this.$store.state.toggleMobileNav = false; //Close mobile navbar when clicking on link
      },
      goHome(){
        this.home = true;
        this.$store.state.toggleMobileNav = false; //Close mobile navbar when clicking on link
      }
    }
  }
</script>

<template>
  <header>
    <Navbar
      @go-home="goHome"
      @go-store="goToStore"
    />
  </header>
  <main>
    <Container
      v-if="home"
      company-heading="Kelan Photography"
      slogan="Capture the world through my lens"
    />
    <PhotoStoreContainer v-else />
  </main>
</template>
