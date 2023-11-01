<template>
    <body>
        <LogoMasp class="logo" />
        <canvas id="game"></canvas>
    </body>
</template>

<script>

import { Application } from '@splinetool/runtime';

import LogoMasp from '@/components/LogoMasp.vue';

export default{
    name: 'Room3D',
    components:{
        LogoMasp
    },
    mounted(){
        const canvas = document.getElementById('game');
        const game = new Application(canvas);
        game.load('https://prod.spline.design/7v1ferIR6ekAf3ld/scene.splinecode');
    }
}

</script>

<style lang="scss" scoped>

    body{

        .logo{
            top: 30px;
            left: 30px;
            position: absolute;
            z-index: 9999999;
        }

        canvas{
            width: 100%;
            height: 100%;
            position: fixed;
        }

    }

</style>