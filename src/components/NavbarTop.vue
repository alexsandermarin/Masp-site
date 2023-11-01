<template>

    <nav>
      <LogoMasp />
      <div>
        <ul>
          <a href="#"><li>Acessar</li></a>
          <router-link id="cad" class="router" to="/criar-conta">Cadastrar-se</router-link>
        </ul>
        <a @click="Dark"><SunSvg /></a>
      </div>
    </nav>

</template>

<script>

import SunSvg from '@/icons/SunSvg.vue';
import LogoMasp from './LogoMasp.vue';
import {darkMode} from '../js/darkMode'

export default{
    name: 'NavbarTop',
    components : {
        SunSvg,
        LogoMasp
    },
    methods: {
      Dark : darkMode
    }
}

</script>

<style scoped>

nav{
    padding: 30px 30px;
    display: flex;
    justify-content: space-between;
    z-index: 99999;
    position: fixed;
    width: 100%;
  }
  nav div{
    display: flex;
    align-items: center;
    gap: 20px;
  }
  nav div ul{
    display: flex;
    gap: 25px;
    align-items: center;
  }
  nav div li , nav div ul .router{
    list-style: none;
    color: #DD3526;
    font-family: 'Noto Sans', sans-serif;
    font-weight: 600;
    font-size: 22px;
    cursor: pointer;
  }
  nav div ul #cad{
    background-color: #DD3526;
    color: #fff;
    padding: 5px 7px;
    border-radius: 10px;
  }

</style>