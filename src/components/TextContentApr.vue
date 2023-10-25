<template>

    <div class="area">
        <h2>TEMPO LIMITADO</h2>
        <h1>Estado de engano , <br> O poder da propaganda nazista</h1>
        <p>Adentre um mundo de ilusões meticulosamente tecidas, onde mentiras se tornaram a moeda da liderança e a manipulação de massas, uma forma de arte. O regime nazista, sob a sombra sinistra de Adolf Hitler, empregou uma das campanhas de propaganda mais infames e eficazes da história. O Estado de Engano que emergiu da maquinaria nazista moldou percepções, distorceu realidades e mergulhou uma nação inteira em um oceano de mentiras.</p>
        <div class="content-button">
            <a href="#">marque uma visita</a>
            <router-link class="router" to="/sala-virtual"><CubeSvg /> VISITAr SALA VIRTUAL</router-link>
        </div>
    </div>
    
    </template>
    
    <script>

    import CubeSvg from '@/icons/CubeSvg.vue';
    
    export default{
        name: 'TextContentApr',
        components: {
            CubeSvg
        },
    }
    
    </script>
    
    <style scoped lang="scss">
        .area{
            position: absolute;
            width: 50vw;
            display: flex;
            gap: 35px;
            flex-direction: column;
            align-items: center;
            top: 50%;
            transform: translateY(-50%);
            font-family: 'Noto Sans', sans-serif;

            h2{
                background-color: #DD3526;
                color: #fff;
                padding: 5px 7px;
            }

            h1{
                width: 40vw;
                font-size: 40px;
                text-transform: uppercase;
                color: #DD3526;
            }

            p{
                font-size: 16.5px;
                color: #2C3E50;
                width: 40vw;
                line-height: 1.8;

            }

            .content-button{
                position: relative;
                display: flex;
                flex-direction: column;

                a, .router{
                    text-transform: uppercase;
                    color: #2C3E50;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    padding: 12px 17px;
                    gap: 20px;
                    position: relative;
                    left: 20px;
                    background-color: #fff;
                    font-weight: 600;
                    font-size: 18px;
                }
                a{
                    background-color: #DD3526;
                    color: #fff;
                }
            }

            .view{
                width: 100%;
                height: 100%;
                z-index: 99999999999999999999999999;
            }

            
        }
    </style>