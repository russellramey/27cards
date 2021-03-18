<template>
    <div class="step-1">
        <h1>Do you want to see a magic trick?</h1>
        <p style="text-align:center;">
            <Start>Sure, try me</Start>
        </p>
    </div>
</template>

<script>
// Import
import Start from '../Start'
// Default export
export default {
    // Component name
    name: 'Step1',
    // Component children
    components:{
        Start
    }
}
</script>
