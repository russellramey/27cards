<template>
    <div class="step-3" :class="{done: (round === 3)}">
        <template v-if="store.cards.stacks">
            <div v-for="(stack, index) in store.cards.stacks" class="card-stack" :key="index">
                <button @click="select(index)">My card is in this pile</button>
                <Card v-for="(card, index) in stack" :data="card" :key="index"></Card>
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
                    this.store.cards.stacks = [array.flat().splice(0, this.store.user.number)]

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
    display: flex;
    flex-wrap: wrap;
}
.step-3.done{
    .card-stack{
        .card{
            opacity: .33;
            display: none;
        }
        .card:last-child{
            opacity: 1;
            display: block;
        }
    }
}
</style>
