<template>
    <TodoList11 />
</template>

<script>
import { ref, readonly, provide } from 'vue'
import TodoList11 from './TodoList.vue'

export default {
    name: 'TodoListContainer',
    setup(props) {
        const todos = ref([]);
        provide('todos', readonly(todos));
        const initTodos = (init_todos) => {
            todos.value = init_todos;
        }
        const addTodo = (todo, date) => { }
        const removeTodo = (id) => { }
        const complteTodo = (id) => { }

        provide('addTodo', addTodo);
        provide('removeTodo', removeTodo);
        provide('complteTodo', complteTodo);
    },
    components: {
        TodoList11
    }
}
</script>