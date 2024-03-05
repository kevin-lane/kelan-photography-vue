<script>
  import colombo from "@/assets/colombo.jpg";
  import IMG_0688 from '@/assets/IMG_0688.jpg';
  import IMG_0735 from "@/assets/IMG_0735.jpg";
  import IMG_0947 from "@/assets/IMG_0947.jpg";
  import IMG_1490_2 from "@/assets/IMG_1490 2.jpg";
  import IMG_1553 from "@/assets/IMG_1553.jpg";
  import IMG_1996 from "@/assets/IMG_1996.jpg";
  import IMG_2504 from "@/assets/IMG_2504.jpg";

  export default {
    data() {
        return {
            images: [
                { src: colombo, title: 'Colombo Skyline' },
                { src: IMG_0688, title: 'Runestone in forrest' },
                { src: IMG_0735, title: 'Sakura blossom' },
                { src: IMG_0947, title: 'A bustop for sunset' },
                { src: IMG_1490_2, title: 'Fields of Southern Sweden' },
                { src: IMG_1553, title: 'Evening in Copenhagen' },
                { src: IMG_1996, title: 'Sturehovs Slott' },
                { src: IMG_2504, title: 'Sunset sea' }
            ]
        };
    }
}
</script>

<template>
  <div v-for="(image, index) in images" id="img-container">
    <div id="hover-layer">
      <h3 id="image-title">{{ image.title }}</h3>
    </div>
    <img :key="index" :src="image.src" :alt="image.title" width="270px" height="270px">
  </div>
</template>

<style scoped>
  @import url('https://fonts.googleapis.com/css?family=Esteban');
  img{
    margin: 1rem;
    border-radius: 32px;
  }

  #img-container{
    display: inline-block;
  }

  #hover-layer{
    width: 270px;
    height: 270px;
    background-color: black;
    color: transparent;
    position: absolute;
    margin: 1rem;
    border-radius: 32px;
    opacity: 0.1;
  }

  #hover-layer:hover{
    font-family: 'Esteban';
    font-size: 20px;
    cursor: pointer;
    color: white;
    opacity: 0.8;
  }

  #image-title{
    margin-top: 3rem;
  }
</style>
