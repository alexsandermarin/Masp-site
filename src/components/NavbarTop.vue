<template>

    <nav>
      <LogoMasp />
      <div>
        <ul>
          <a href="#"><li>Acessar</li></a>
          <a href="#"><li id="cad">Cadastrar-se</li></a>
        </ul>
        <a href="#"><SunSvg /></a>
      </div>
    </nav>

</template>

<script>

import SunSvg from '@/icons/SunSvg.vue';
import LogoMasp from './LogoMasp.vue';

export default{
    name: 'NavbarTop',
    components : {
        SunSvg,
        LogoMasp
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
  nav div li{
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