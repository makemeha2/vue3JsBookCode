<template>
    <TodoList :data="todos" />
</template>

<script>
import { ref, readonly, provide } from 'vue'
import TodoList from './TodoList.vue'

export default {
    name: 'TodoListContainer',
    setup(props) {
        
        let tempTodos = [];
        tempTodos.push({ job: '업무1', date: '2023-12-26', completed: false })
        tempTodos.push({ job: '업무2', date: '2023-12-25', completed: false })
        tempTodos.push({ job: '업무3', date: '2023-12-25', completed: false })
        tempTodos.push({ job: '업무4', date: '2023-12-25', completed: true })

        //const todos = ref([]);
        const todos = ref(tempTodos);

        provide('todos', readonly(todos));
        const initTodos = (init_todos) => {
            todos.value = init_todos;
        }
        const addTodo = (todo, date) => { }
        const removeTodo = (id) => { }
        const completeTodo = (id) => { }

        provide('addTodo', addTodo);
        provide('removeTodo', removeTodo);
        provide('completeTodo', completeTodo);

        return {
            todos
        }
    },
    components: {
        TodoList
    }
}
</script>