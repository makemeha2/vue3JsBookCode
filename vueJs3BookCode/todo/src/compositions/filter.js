import { inject } from 'vue'

export const useFilter = () => {

    const today = inject('today');
    const fnSort = (a, b) => {
        const a_date = Date.parse(a.date);
        const b_date = Date.parse(b.date);

        if(a_date > b_date) return 1;
        else if (a_date < b_date) return 0
        else a.id - b.id;   // 날짜가 같을 경우 id가 높은 순으로 정렬
    }

    // 
    const getPendingTodos = (todos) => {
        return todos.value.filter((todo) => todo.date < today && !todo.completed).slice().sort(fnSort);
    }

    const getActiveTodayTodos = (todos) => {
        return todos.value.filter((todo) => todo.date == today && !todo.completed).slice().sort(fnSort);
    }

    const getCompletedTodayTodos = (todos) => {
        return todos.value.filter((todo) => todo.date == today && todo.completed).slice().sort(fnSort);
    }

    const getAllTodayTodos = (todos) => {
        return todos.value.filter((todo) => todo.date == today).slice().sort(fnSort);
    }

    const getAllTodos = (todos) => {
        return todos.value.slice().sort(fnSort);
    }

    return {
        getPendingTodos,
        getActiveTodayTodos,
        getCompletedTodayTodos,
        getAllTodayTodos,
        getAllTodos,
    }
}