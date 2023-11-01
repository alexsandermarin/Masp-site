<template>
<div class="container">
    <div class="apresentacao">
    </div>
    <div class="form">
        <div class="container-form">
            <h1>CRIE SUA CONTA</h1>
            <div class="container-conts">
                <a href="#"><GoogleIcon />CRIAR USANDO GOOGLE</a>
                <a href="#"><AppleIcon />CRIAR USANDO APPLE</a>
            </div>
            <div class="container-helper">
                <HelperSinUp />
            </div>
            <div class="container-inputs">
                <form action="">
                    <div class="container-inp">
                        <label for="name">Nome Completo:</label>
                        <input placeholder="Letícia Valentina" type="text" id="name" >
                    </div>
                    <div class="container-inp">
                        <label for="email">E-Mail:</label>
                        <input placeholder="leticiavalentina@gmail.com" type="email" id="email">
                    </div>
                    <div class="container-inp">
                        <label for="pass">Senha:</label>
                        <input placeholder="senha12345" type="password" id="pass">
                    </div>
                    <p>*Ao clicar em <span>”Criar conta”</span> você aceita todos os <a href="#">termos de uso</a> e <a href="#">termos de diretrizes</a></p>
                    <input type="submit" value="Criar Conta">
                </form>
            </div>
            <div class="container-direct">
                <a href="#">Possui uma conta ? <span>Acesse aqui</span></a>
            </div>
            <div class="back-button">
                <router-link class="router" to="/">
                    <ArrowBack />
                    Voltar Ao Menu
                </router-link>
            </div>
        </div>
    </div>
</div>
</template>

<script>

import GoogleIcon from '@/icons/GoogleIcon.vue';
import AppleIcon from '@/icons/AppleIcon.vue';
import ArrowBack from '@/icons/ArrowBack.vue';

import HelperSinUp from '@/icons/HelperSinUp.vue';

export default{
    name:'SingUp',
    components: {
        GoogleIcon,
        AppleIcon,
        HelperSinUp,
        ArrowBack
    }
}

</script>

<style lang="scss" scoped>
*{
    font-family: Noto Sans;
}

.container{
    width: 100vw;
    height: 100vh;
    display: flex;
    background-color: #fff;

    .apresentacao{
        width: 50vw;
        height: 100vh;
        background-image: url(../assets/GIF-Museu.gif);
        background-repeat: repeat;
        background-size: cover;
    }

    .form{
        width: 50vw;
        height: 100vh;
        display: flex;
        justify-content: center;
        align-items: center;

        .container-form{
            
            h1{
                color: #2C3E50;
                text-align: center;
                font-size: 35px;
                font-weight: 600;
                margin: 0 0 60px 0;
            }

            .container-conts{
                display: flex;
                justify-content: center;
                gap: 20px;
                margin: 20px 0 ;

                a{
                    background: #F3F3F3;
                    display: flex;
                    gap: 20px;
                    padding: 10px 10px;
                    align-items: center;
                    justify-content: center;
                    border-radius: 6px;
                    color: #2C3E50;
                    text-align: center;
                    font-size: 15px;
                    font-weight: 600;
                }
            }

            .container-helper{
                margin: 10px 0;
                display: flex;
                justify-content: center;
            }

            .container-inputs{
                form{
                    display: flex;
                    flex-direction: column;
                    align-items: center;
                    .container-inp{
                        width: 70%;
                        margin: 10px 0;

                        label{
                        color: #DD3526;
                        font-weight: bold;
                        width: 100%;
                        font-size: 15px;
                        }

                        input[type=text] , input[type=email] , input[type=password]{
                            border: 0;
                            background-color: #F3F3F3;
                            border-radius: 9px;
                            padding: 25px 0 25px 15px;
                            font-size: 15px;
                            width: 100%;
                            margin-top: 5px;
                        }
                    }

                    input[type=text]::placeholder , input[type=email]::placeholder , input[type=password]::placeholder{
                        color: #777777;
                        font-weight: bold;
                    }

                    p{
                        color: #2C3E50;
                        font-weight: 700;
                        width: 80%;
                        text-align: center;
                        font-size: 14px;
                        margin: 15px 0 45px 0;

                        a{
                            color: #DD3526;
                        }
                        a:nth-child(2) , a:nth-child(3){
                            text-decoration: underline;
                        }

                    }

                    input[type=submit]{
                        background-color: #DD3526;
                        color: #fff;
                        font-weight: bold;
                        font-size: 20px;
                        padding: 15px 45px;
                        border-radius: 10px;
                        border: 0;
                        cursor: pointer;
                    }
                }
            }

            .container-direct{
                text-align: center;
                margin: 30px 0 0 0;

                a{
                    color: #2C3E50;
                    font-weight: 600;
                    font-size: 16px;

                    span{
                        color: #DD3526;
                    }
                }
            }
            .back-button{
                margin: 50px 0 0 0;

                .router{
                    color: #DD3526;
                    font-weight: 700;
                    display: flex;
                    align-items: center;
                }
            }
        }
    }
}
</style>