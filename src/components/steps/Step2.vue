<template>
    <div class="step-2">
        <h1>Pick a card from the options below, and remember it...</h1>
        <p style="text-align:center;">
            <button @click="next">Ok, I got one</button>
        </p>
        <template v-if="store.cards.set">
            <div class="card-set">
                <Card v-for="(card, index) in store.cards.set" :data="card" :key="index"></Card>
            </div>
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
    name: 'Step2',
    // Component children
    components:{
        Card
    },
    // Component data
    data(){
        return {
            store: Store
        }
    },
    // Component methods
    methods: {
        // Create working set of cards
        createSet(){
            // Generate set of cards from main deck object
            let set = this.$utilities.shuffle(this.store.cards.deck);
            // Store first 27 cards of shuffled deck as the current set
            this.store.cards.set = set.splice(0,27);
        },
        // Continue to next step (2)
        next(){
            this.store.status.step = 3
        }
    },
    // Component mounted
    mounted(){
        // Fire createSet
        this.createSet();
    }
}
</script>

<style scoped lang="scss">
.step-2{
    .card-set{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
</style>
