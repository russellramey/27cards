<template>
    <div class="step-4">
        <h1>This is your card</h1>
        <div class="user-card">
            <Card :data="this.store.user.card"></Card>
        </div>
    </div>
</template>

<script>
// Import
import Store from '../../store'
import Card from '../Card'
// Default export
export default {
    // Component name
    name: 'Step4',
    // Component children
    components:{
        Card
    },
    data(){
        return{
            store: Store
        }
    },
    // Component methods
    methods: {
    },
    // Component computed data
    computed: {
    }
}
</script>

<style scoped lang="scss">
.user-card{
    display: block;
    height: auto;
    .card{
        position: relative;
        transform: scale(1.75);
        margin: 0 auto;
        margin-top: 8rem;
    }
}
</style>
