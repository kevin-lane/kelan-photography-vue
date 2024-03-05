<template>
  <nav>
    <ul>
      <li @click="$emit('goHome')">HOME</li>
      <li @click="$emit('goStore')">STORE</li>
    </ul>
  </nav>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Cinzel');
  ul{
    list-style-type: none;
    margin: 1rem;
  }
  li{
    display: inline;
    font-size: 36px;
    margin: 3rem;
    font-family: 'Cinzel';
    color: white;
  }
  li:hover{
    cursor: pointer;
  }
</style>
