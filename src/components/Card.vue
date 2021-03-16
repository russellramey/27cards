<template>
    <div class="card" :class="'card-' + data.suite">
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
        data: Object
    },
    methods: {
    },
    // Component computed data
    computed: {
        suite(){
            let suite = '';
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
            // Return suite
            return suite;
        }
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
        opacity: .4;
    }
}
</style>
