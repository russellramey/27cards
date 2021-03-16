<template>
    <div class="step-2">
        <template v-if="store.cards.set">
            <div class="card-set">
                <Card v-for="(card, index) in store.cards.set" :data="card" :key="index"></Card>
            </div>
            <button @click="selected">I have selected my card</button>
        </template>
    </div>
</template>

<script>
// Import
import Store from '../../store'
import Card from '../../components/Card'
// Default export
export default {
    // Component name
    name: 'Step1',
    // Component children
    components:{
        Card
    },
    data(){
        return {
            store: Store
        }
    },
    // Component methods
    methods: {
        createSet(){
            let set = this.$utilities.shuffle(this.store.cards.deck);
            this.store.cards.set = set.splice(0,27);
        },
        selected(){
            this.store.status.step = 3
        }
    },
    // Component computed data
    computed: {
    },
    mounted(){
        this.createSet();
    }
}
</script>

<style scoped lang="scss">
.card-set{
    display: flex;
    flex-wrap: wrap;
}
</style>
