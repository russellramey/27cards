<template>
    <div class="card" :class="'card-' + data.suite" :data-visible="mounted">
        <div class="card-header">
            <span class="card-rank">{{ data.rank }}</span>
            <span class="card-suite" v-html="suite"></span>
        </div>
        <div class="card-body">
            <span class="card-suite" v-html="suite"></span>
        </div>
        <div class="card-footer">
            <span class="card-rank">{{ data.rank }}</span>
            <span class="card-suite" v-html="suite"></span>
        </div>
    </div>
</template>

<script>
// Default export
export default {
    // Component name
    name: 'Card',
    // Component parent data
    props: {
        data: Object,
        index: Number
    },
    data(){
        return{
            mounted: false
        }
    },
    // Component methods
    methods:{
        // Fade in card on timeout delay
        fadeIn(){
            // This
            let t = this;
            // Set card delay
            let delay = 150 * this.index;
            // Setimeout for card
            setTimeout(function(){
                // Toggle mounted true
                t.mounted=true;
                // Emit to parent
                t.$emit('loading', t.mounted);
            }, delay);
        }
    },
    // Component computed data
    computed: {
        // Card suite icon
        suite(){
            // Suite placeholder
            let suite = '';
            // Switch case to set suite html entity
            switch(this.data.suite) {
                case 'clubs':
                    suite = "&clubs;";
                    break;
                case 'dimonds':
                        suite = "&diams;";
                        break;
                case 'hearts':
                    suite = "&hearts;";
                    break;
                case 'spades':
                    suite = "&spades;";
                    break;
            }
            // Return suite string
            return suite;
        }
    },
    // Component mounted
    mounted(){
        this.fadeIn()
    }
}
</script>

<style scoped lang="scss">
.card{
    border: 1px solid #e4e4e4;
    background: #fff;
    padding: .75rem;
    border-radius: .5rem;
    width: 100%;
    max-width: 150px;
    min-width: 150px;
    min-height: 225px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    margin: .5rem;
    box-shadow: 0 0 .5rem rgba(0,0,0,.25);
    box-sizing: border-box;
    position: relative;
    overflow: hidden;
    font-weight: normal;
    opacity: 0;
    transition: opacity 200ms ease-in-out;
    >div{
        flex:1;
    }
    .card-suite{
        font-size: 1.25rem;
        position: relative;
    }
    .card-header{
        display: flex;
        flex-direction: row;
        .card-suite{
            top: 3px;
        }
    }
    .card-body{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        .card-suite{
            font-size: 3.5rem;
        }
    }
    .card-footer{
        display: flex;
        flex-direction: row-reverse;
        .card-suite{
            bottom: 3px;
        }
        span{
            transform: rotate(180deg);
        }
    }
    &.card-clubs,
    &.card-spades{
        color: black;
    }
    &.card-hearts,
    &.card-dimonds{
        color: red;
    }
    &[data-visible="true"]{
        opacity: 1;
    }
    &::before{
        content: '';
        display: block;
        position: absolute;
        bottom: 0;
        right: 0;
        width: 110%;
        height: 110%;
        background: #f4f4f4;
        z-index: 1;
        border: 1px solid #e4e4e4;
        transform: rotate(45deg) translate(55%, 5%);
        opacity: .333333;
    }
}
</style>
