<template>
    <div id="app">
        <div class="banner top-banner"></div>
        <div class="wrapper">
            <component :is="'Step' + store.status.step"></component>
        </div>
        <div class="banner top-banner"></div>
    </div>
</template>

<script>
// Imports
import Store from './store'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'
import Step4 from './components/steps/Step4'

// Export
export default {
    // Component name
    name: 'App',
    // Component children
    components: {
        Step1,
        Step2,
        Step3,
        Step4
    },
    // Component data
    data(){
        return{
            store: Store
        }
    }
}
</script>


<style lang="scss">
body{
    overflow: hidden;
    margin: 0;
    padding: 0;
    font-family: sans-serif;
    font-weight: lighter;
    line-height: 1;
    background: #161616;
    background: radial-gradient(ellipse at top, #161616 0%, #111 100%);
    color: #fff;
    height: 100vh;
    &::before{
        content: " ";
        display: block;
        position: fixed;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        background: linear-gradient(transparent 50%, rgba(0,0,0,0.25) 50%),linear-gradient(
        90deg
        , rgba(255,0,0,0.05), rgba(0,255,0,0.02), rgba(0,0,255,0.05));
        z-index: 5;
        background-size: 100% 2px, 3px 100%;
        pointer-events: none;
        opacity: 0.5;
    }

    h1,h2,h3,h4,h5,h6{
        font-weight: lighter;
        text-align: center;
        line-height: 1.25;
    }

    #app{
        overflow: auto;
        position: fixed;
        display: flex;
        flex-direction: column;
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        .banner{
        }
        .wrapper{
            overflow: auto;
            padding: 1rem;
            flex:1;
        }
        button{
            background: #3399cc;
            border-radius: 1.5rem;
            border: none;
            padding: 1rem 2rem;
            text-transform: uppercase;
            color: white;
            font-size: 1rem;
            cursor: pointer;
            transition: all 150ms ease-in-out;
            z-index: 1;
            &:hover{
                background: darken(#3399cc, 20);
            }
        }

        ul{
            list-style: none;
            margin: 0;
            padding: 0;
        }
    }
}
</style>
