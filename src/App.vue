<template>
    <div id="app">
        <template v-if="store.status.step === 1">
            <Step1></Step1>
        </template>

        <template v-if="store.status.step === 2">
            <Step2></Step2>
        </template>

        <template v-if="store.status.step === 3">
            <Step3></Step3>
        </template>
    </div>
</template>

<script>
// Imports
import Store from './store'
import Step1 from './components/steps/Step1'
import Step2 from './components/steps/Step2'
import Step3 from './components/steps/Step3'

// Export
export default {
    // Component name
    name: 'App',
    // Component children
    components: {
        Step1,
        Step2,
        Step3
    },
    // Component data
    data(){
        return{
            store: Store
        }
    },
    // Component methods
    methods: {

    }
}
</script>


<style scoped lang="scss">

</style>
