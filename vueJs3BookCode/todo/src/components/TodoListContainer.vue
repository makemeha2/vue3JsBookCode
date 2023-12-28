<template>
    <todo-list-new />
    <section class="container">
        <div class="row justify-content-center m-2">
            <todo-list-main />
        </div>
    </section>
</template>

<script>
import { ref, readonly, provide } from 'vue'
import { useStorage } from '../compositions/storage';
import TodoListNew from './TodoListNew.vue'
import TodoListMain from './TodoListMain.vue'

export default {
    name: 'TodoListContainer',
    setup(props) {
        let tempTodos = [];
        tempTodos.push({ job: '업무1', date: '2023-12-28', completed: false })
        tempTodos.push({ job: '업무2', date: '2023-12-27', completed: false })
        tempTodos.push({ job: '업무3', date: '2023-12-27', completed: false })
        tempTodos.push({ job: '업무4', date: '2023-12-27', completed: true })

        const todos = ref(tempTodos);

        //const todos = ref([]);
        const { loadTodos, saveTodos, storage_id } = useStorage();
        provide('todos', readonly(todos));

        const initTodos = (init_todos) => {
            todos.value = init_todos;
        }

        const addTodo = (job, date) => { 
            todos.value.push({
                id: storage_id++,
                job: job,
                date: date,
                completed: false,
            })
            saveTodos(todos)
        }
        
        const removeTodo = (id) => { 
            todos.value.splice(id, 1)
            todos.value.forEach((todo, idx) => {
                todo.id = idx;
            })
            saveTodos(todos);
        }
        
        const completeTodo = (id) => {
            todos.value.find((todo) => todo.id == id).completed = true;
            saveTodos(todos)
        }

        provide('addTodo', addTodo);
        provide('removeTodo', removeTodo);
        provide('completeTodo', completeTodo);
        
        loadTodos(initTodos);
    },
    components: {
        TodoListNew,
        TodoListMain,
    }
}
</script>