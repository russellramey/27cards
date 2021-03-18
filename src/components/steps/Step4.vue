<template>
    <div class="step-4">
        <h1><b>Your card</b> was the...</h1>
        <div class="user-card">
            <Card :data="this.store.user.card"></Card>
        </div>
        <template v-if="!store.status.loading">
            <p class="action" style="text-align:center;">
                <Start>See it again</Start>
            </p>
        </template>
    </div>
</template>

<script>
// Import
import Store from '../../store'
import Start from '../Start'
import Card from '../Card'
// Default export
export default {
    // Component name
    name: 'Step4',
    // Component children
    components:{
        Start,
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
    .action{
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        z-index: 1;
        padding: 1rem;
    }
}
</style>
