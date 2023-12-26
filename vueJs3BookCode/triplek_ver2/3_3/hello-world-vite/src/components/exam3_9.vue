<script>
import { ref } from 'vue'

export default {
    setup() {
        const counter = ref(0);
        const counter2 = ref(0);

        const onClick = function() {
            counter2.value += 1;
        }

        return {counter, counter2, onClick};
    }
}
</script>

<template>
    <p>Counter : {{ counter }}</p>
    <p>Counter2 : {{ counter2 }}</p>
    <p>{{ counter + counter2 }}</p>
    <button @click="counter++">클릭하면 숫자가 올라갑니다.</button>
    <button @click="onClick">클릭하면 숫자가 올라갑니다.</button>
</template>

<style scoped>

</style>