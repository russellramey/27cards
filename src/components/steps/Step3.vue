<template>
    <div class="step-3" :key="round">
        <h1>Select the row your card appears in<span v-if="round===1"> again</span><span v-if="round===2"> one last time</span>...</h1>
        <template v-if="store.cards.stacks.length > 0">
            <div v-for="(stack, index) in store.cards.stacks" class="card-row" :key="index" @click="select(index)">
                <ul class="card-list">
                    <li v-for="(card, index) in stack" :key="index">
                        <Card  :data="card" :index="index" @loading="loading"></Card>
                    </li>
                </ul>
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
    name: 'Step3',
    // Component children
    components:{
        Card
    },
    // Component data
    data(){
        return {
            store: Store,
            round: 0,
            count: 0
        }
    },
    // Component methods
    methods: {
        // Deal card array
        deal(array){
            // Generate rows of cards
            let stacks = this.$utilities.deal(array);
            // Set store stacks object to stacks object
            this.store.cards.stacks = stacks
        },
        // User row selection
        select(index){
            // Placeholder array
            let array = [];
            // If current round is less than 2
            if(this.round <= 2 && !this.store.status.loading){
                // Save user selected stack array
                this.store.user.stack = this.store.cards.stacks[index];
                // For each item in card stacks array
                this.store.cards.stacks.forEach((item, i) => {
                    // If current item index does not equal user selected index
                    if(i !== index){
                        // Push item to placeholder array
                        array.push(item);
                    }
                })

                // Add user selected row into proper index of placeholder array,
                // current index is determined via order array from start()
                array.splice(this.store.user.stack_order[this.round], 0, this.store.user.stack);

                // If current round is last round
                if(this.round === 2){
                    // Get last card in array based on current user number, set as user.card
                    this.store.user.card = array.flat().splice(0, this.store.user.number).pop();
                    // Continue to step 4
                    this.store.status.step = 4;
                } else {
                    // Repeat step3, re-deal card array
                    this.deal(array.flat());
                }

                // Increase round count
                this.round++
                // Reset card count (loading)
                this.count=0;
            }
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
        // Deal initial set of cards, round 0
        this.deal(this.store.cards.set);
    }
}
</script>

<style scoped lang="scss">
.step-3{
    .card-row{
        margin: 0 -1rem;
        padding: 2rem 1rem;
        transition: all 150ms ease-in-out;
        cursor: pointer;
        &:hover{
            background: rgba(0,0,0,.333333);
        }
        .card-list{
            display: flex;
            justify-content: center;
            overflow: auto;
            -ms-overflow-style: none;  /* IE and Edge */
            scrollbar-width: none;  /* Firefox */
            &::-webkit-scrollbar {
                display: none;
            }
            @media screen and (max-width: 1560px){
                justify-content: flex-start;
            }
        }
        button{
            margin: 0 auto;
            display: block;
        }
    }
}
</style>
