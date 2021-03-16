<template>
    <div class="step-3" :class="{done: (round === 3)}">
        <h1 v-if="round<3">Select the row your card appears in <span v-if="round===1">again</span> <span v-if="round===2">one more time</span>:</h1>
        <h1 v-else>Your card was:</h1>
        <template v-if="store.cards.stacks">
            <div v-for="(stack, index) in store.cards.stacks" class="card-stack" :key="index" @click="select(index)">
                <div class="cards">
                    <Card v-for="(card, index) in stack" :data="card" :key="index"></Card>
                </div>
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
    data(){
        return {
            store: Store,
            round: 0
        }
    },
    // Component methods
    methods: {
        deal(array){
            let stacks = this.$utilities.deal(array);
            this.store.cards.stacks = stacks
        },
        select(index){
            let array = []

            if(this.round <= 2){
                this.store.user.stack = this.store.cards.stacks[index];


                this.store.cards.stacks.forEach((item, i) => {
                    if(i !== index){
                        array.push(item);
                    }
                })
                array.splice(this.store.user.stack_order[this.round], 0, this.store.user.stack)






                if(this.round === 2){
                    //this.store.cards.stacks = [array.flat().splice(0, this.store.user.number)]
                    // Set last card in array to user card
                    this.store.user.card = array.flat().splice(0, this.store.user.number).pop();
                    this.store.status.step = 4;
                } else {
                    console.log(array);

                    this.deal(array.flat())

                }

                this.round++

            }






                }
    },
    // Component computed data
    computed: {
    },
    mounted(){
        this.deal(this.store.cards.set);
    }
}
</script>

<style scoped lang="scss">
.card-stack{
    margin: 0 auto;
    padding: 2rem;
    transition: all 150ms ease-in-out;
    cursor: pointer;
    &:hover{
        background: rgba(0,0,0,.333333);
    }
    .cards{
        display: flex;
        justify-content: center;
        overflow: auto;
        @media screen and (max-width: 1560px){
            justify-content: flex-start;
        }
    }
    button{
        margin: 0 auto;
        display: block;
    }
}

.step-3.done{
    .card-stack{
        .card{
            opacity: .33;
            display: none;
        }
        .card:last-child{
            opacity: 1;
            display: flex;
        }
    }
}
</style>
