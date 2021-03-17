<template>
    <div class="step-4">
        <h1><b>Your card</b> was the...</h1>
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
    // Component data
    data(){
        return{
            store: Store
        }
    }
}
</script>

<style scoped lang="scss">
.step-4{
    .user-card{
        display: block;
        height: auto;
        .card{
            position: relative;
            transform: scale(1.75);
            margin: 0 auto;
            margin-top: 7rem;
        }
    }
}
</style>
