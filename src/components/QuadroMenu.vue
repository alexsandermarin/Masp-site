<template>
    <canvas id="canvasQuadroMenu"></canvas>
</template>

<script>

import { Application } from '@splinetool/runtime';

export default{

    name: 'QuadroMenu',
    mounted(){
        const canvas = document.getElementById('canvasQuadroMenu');
        const app = new Application(canvas);
        app.load('https://prod.spline.design/sBvanVno05JyNFuc/scene.splinecode')
            .then(() => {
                const arte = app.getAllObjects();
                console.log(arte)
            });

    }

}

</script>

<style scoped>

canvas{
    position: absolute;
    z-index: 1;
}

</style>