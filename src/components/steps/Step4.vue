<template>
    <div class="step-1">
        <h1>This is your card</h1>
        <Card :data="this.store.user.card"></Card>
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

</style>
