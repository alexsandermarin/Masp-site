<template>
  <router-view class="view" />
  <body>
    <NavbarTop />
    <NavbarLeft />
    <section id="menu">
      <QuadroMenu />
      <TextMenu />
    </section>
    <section id="apresentacao">
      <TextContentApr />
      <ImgContentApr />
    </section>
  </body>
</template>

<script>

import NavbarTop from '@/components/NavbarTop.vue';
import NavbarLeft from '@/components/NavbarLeft.vue';

import QuadroMenu from '@/components/QuadroMenu.vue';
import TextMenu from '@/components/TextMenu.vue';

import TextContentApr from '@/components/TextContentApr.vue';
import ImgContentApr from '@/components/ImgContentApr.vue';

export default {
  name: 'App',
  components : {
    NavbarLeft,
    QuadroMenu,
    TextMenu,
    NavbarTop,
    TextContentApr,
    ImgContentApr
  }
}
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css2?family=Flow+Circular&family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
  }
  body{
    width: 100vw;
    height: 100vh;
    position: relative;

    section{
    width: 100vw;
    height: 100vh;
    position: relative;
    }

    .view{
      width: 100vw;
      height: 100vh;
      position: fixed;
      z-index: 99999999;
      background-color: rgb(219, 219, 219);
    }
  }

</style>
