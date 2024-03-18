<script>
  export default {
    methods: {
      openNavbar(){
        this.$store.state.toggleMobileNav = true;
      },
      closeNavbar(){
        this.$store.state.toggleMobileNav = false;
      }
    }
  }
</script>

<template>
  <nav>
    <!-- Navbar and menu for mobile, set to if less than 500 since most phones width is around that number -->
    <div v-if="this.$store.state.screenWidth < 500">
      <!-- If mobile navbar is open, show this icon -->
      <div v-if="this.$store.state.toggleMobileNav" @click="closeNavbar" class="hamburger-menu-open">
        <span></span>
        <span></span>
      </div>
      <!-- Otherwise show hamburger menu icon -->
      <div v-else @click="openNavbar(mobileNavbarOpen)" class="hamburger-menu">
        <span></span>
        <span></span>
        <span></span>
      </div>
      <!-- The menu when the menu is open -->
      <ul v-if="this.$store.state.toggleMobileNav" class="mobile-menu" >
        <li @click="$emit('goHome')">HOME</li>
        <li @click="$emit('goStore')">STORE</li>
      </ul>
    </div>

    <!-- Nav menu for desktop -->
    <ul v-else class="desktop-menu" >
      <li @click="$emit('goHome')">HOME</li>
      <li @click="$emit('goStore')">STORE</li>
    </ul>
  </nav>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  nav{
    width: 100%;
  }
  .desktop-menu{
    list-style-type: none;
    margin: 1rem;
  }

  .mobile-menu{
    list-style-type:none;
    margin-bottom: 4rem;
    background-color: black;
    opacity: 0.6;
  }
  .desktop-menu li{
    display: inline;
    font-size: 36px;
    margin: 3rem;
    font-family: 'Cinzel';
    color: white;
  }

  .mobile-menu li {
    text-align: center;
    font-size: 36px;
    font-family: 'Cinzel';
    color: white;
  }
  li:hover{
    cursor: pointer;
  }
  .hamburger-menu{
    width: 50px;
    height: 50px;
    margin-left: auto;
    margin-right: 1rem;
    padding-bottom: 5rem;
    position: relative;
  }
  .hamburger-menu-open{
    width: 50px;
    height: 50px;
    margin-left: auto;
    margin-right: 2rem;
    margin-top: 1rem;
    padding-bottom: 5rem;
    position: relative;
  }

  .hamburger-menu span {
    height: 5px;
    width: 100%;
    background-color: black;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
    transition: .3s ease;
  }
  .hamburger-menu-open span{
    height: 5px;
    width: 100%;
    background-color: black;
    border-radius: 25px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-90%, -50%);
    transition: .3s ease;
  }
  /* Span bars when menu closed */
  .hamburger-menu span:nth-child(1){
    top: 25%;
    width: 50px;
  }
  .hamburger-menu span:nth-child(2){
    top: 50%;
    width: 100px;
    margin-left: 1rem;
  }
  .hamburger-menu span:nth-child(3){
    top: 75%;
    width: 50px;
  }

  /* Span bars when menu open */
  .hamburger-menu-open span:nth-child(1){
    top: 25%;
    width: 50px;
    transform: rotate(45deg);
  }
  .hamburger-menu-open span:nth-child(2){
    top: 25%;
    width: 50px;
    transform: rotate(-45deg);
  }
</style>
