import { reactive, toRefs } from "vue";

export const useStorage = () => {
    const KEY = 'my-todo-list'
    const storage_obj = reactive({storage_id: 0})
    const loadTodos = (initTodos) => {
        let temp_todos = JSON.parse(localStorage.getItem(KEY) || '[]')
        temp_todos.forEach((todo, idx) => {
            todo.id = idx;
        });

        storage_obj.storage_id = temp_todos.length;
        initTodos(temp_todos)   // localstorage 데이터를 받아서 처리하는 함수를 호출한다.
    }
    const saveTodos = (todos) => {
        localStorage.setItem(KEY, JSON.stringify(todos.value))  // todos.value 인 것을 보아, reactive 객체로 받나보다. 
    }
    
    return {
        ...toRefs(storage_obj), 
        loadTodos, 
        saveTodos
    }
}