<template>
    <main>
        <div v-for="(todo, idx) in data" :key="todo.id" >
            <div clss="input-group my-2 input-group-sm">
                <div class="input-group-text">
                    <input class="form-check-input mt-0" type="checkbox" />
                </div>
                <div class="input-group-text">
                    <input class="form-input mt-0" type="date" />
                </div>
                <input type="text" class="form-control" />
                <button class="btn btn-outline-primary dropdown-toggle " type="button" data-bs-toggle="dropdown">할일 관리</button>
                <ul class="dropdown-menu dropdown-menu-end ">
                    <li>
                        <a class="dropdown-item">아이템</a>
                    </li>
                </ul>
            </div>
            <div class="col border  border-second " />
        </div>
    </main>
</template>

<script>
import { inject } from 'vue'
export default {
    name:'TodoList',
    props: {
        data: {
            type: Array,
            default: [],
        },
    },
    setup(props) {
        const removeTodo = inject('removeTodo')
        const completeTodo = inject('completeTodo')
        const today = inject('today')

        const menu = [
            {
                str: '할일 삭제',
                func: removeTodo,
            },
            {
                str: '할일 완료',
                func: completeTodo
            },
        ]

        return {
            menu,
            today,
            completeTodo,
        }
    },
}
</script>