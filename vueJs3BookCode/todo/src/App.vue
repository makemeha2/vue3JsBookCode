<template>
  <TodoListContainer />
  <!-- <TestComponent /> -->
</template>

<script>
import TestComponent from './components/TestComponent.vue'
import TodoListContainer from './components/TodoListContainer.vue'

export default {
  name: 'App',
  components: {
    TestComponent,
    TodoListContainer
  }
}
</script>
