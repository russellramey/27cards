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
    border: 1px solid #ccc;
    background: #fff;
    padding: 1rem;
    border-radius: .5rem;
    width: 100%;
    max-width: 120px;
    min-width: 120px;
    min-height: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    font-size: 1.5rem;
    margin: .5rem;
    >div{
        flex:1;
    }
    .card-header{
        display: flex;
        flex-direction: row;
    }
    .card-body{
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        font-size: 3.5rem;
    }
    .card-footer{
        display: flex;
        flex-direction: row-reverse;
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
}
</style>
