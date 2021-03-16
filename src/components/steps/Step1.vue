<template>
    <div class="step-1">
        <h1><b>Want to see a magic trick?</b><br />I can guess the card you are thinking of...</h1>
        <h3><em>(with a little help from you, of course)</em></h3>
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
        start(){
            // create set of cards for trick
            let set = this.$utilities.shuffle(this.store.cards.deck);
            // Save set to store
            this.store.cards.set = set.slice(0, 27);
            // Go to next step
            this.store.status.step = 2;
            // Set base3 array/order
            this.base3(this.getRandomArbitrary(1,27));
        },
        getRandomArbitrary(min, max) {
          let number =  Math.round(Math.random() * (max - min) + min);
          this.store.user.number = number;
          return number;
      },
        base3(int){
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
            this.store.user.stack_order = result;
        }
    },
    // Component computed data
    computed: {
    }
}
</script>

<style scoped lang="scss">

</style>
