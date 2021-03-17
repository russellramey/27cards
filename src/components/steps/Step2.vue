<template>
    <div class="step-2">
        <h1>Pick a card from the options below, and remember it...</h1>
        <p style="text-align:center;">
            <button @click="next" :disabled="store.status.loading">Ok, I got one</button>
        </p>
        <template v-if="store.cards.set">
            <ul class="card-set">
                <li v-for="(card, index) in store.cards.set" :key="index">
                    <Card :data="card" :index="index"  @loading="loading"></Card>
                </li>
            </ul>
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
            store: Store,
            count: 0
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
        // Navigate next step
        next(){
            // Set status to next step (3)
            this.store.status.step = 3
        },
        // Is loading
        loading(){
            // Set loading status to true
            this.store.status.loading = true;
            // If all cards mounted
            if(this.count >= 26){
                // Set loading status to false
                this.store.status.loading = false;
            }
            // Increase count
            this.count++
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
