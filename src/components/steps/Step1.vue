<template>
    <div class="step-1">
        <h1>Do you want to see a magic trick?</h1>
        <p style="text-align:center;">
            <button @click="start">Sure, try me</button>
        </p>
    </div>
</template>

<script>
// Import
import Store from '../../store'
// Default export
export default {
    // Component name
    name: 'Step1',
    // Component children
    components:{
    },
    data(){
        return{
            store: Store
        }
    },
    // Component methods
    methods: {
        // Start, initiate start of the trick
        start(){
            // create set of cards for trick
            let set = this.$utilities.shuffle(this.store.cards.deck);
            // Save set to store
            this.store.cards.set = set.slice(0, 27);
            // Go to next step
            this.store.status.step = 2;
            // Set base3 array/order
            this.store.user.stack_order =  this.orderArray(this.randomInteger(1,27));
        },
        // Generate random number
        randomInteger(min, max) {
            // Generagte number
            let number =  Math.round(Math.random() * (max - min) + min);
            // Save number to store
            this.store.user.number = number;
            // Return number
            return number;
        },
        // Restack order array, based on results of base3 algorithm
        orderArray(int){
            // Resulting array
            let result = [];
            // Initial base3 results
            let base = this.$utilities.base3(parseInt(int-1));
            // Push desired value to result array
            result.push(base[1]);
            // Recursivly run base3 2 more times on resulting base pairs
            for(let i=0; i < 2; i++){
                // Generate base3 value pair from existing base
                base = this.$utilities.base3(base[0]);
                // Push desired value to result array
                result.push(base[1]);
            }
            // Return resulting array
            return result;
        }
    }
}
</script>

<style scoped lang="scss">

</style>
