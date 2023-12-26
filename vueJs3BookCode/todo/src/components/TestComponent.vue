<template></template>

<script>

import { reactive, ref } from 'vue'
import { useFilter } from '../compositions/filter.js'
import { useStorage } from '../compositions/storage.js'

export default {
  setup(props) {
    //localStorage.getItem('my-todo-list')
    //localStorage.setItem('my-todo-list', JSON.stringify([]));

    const initTodos = (todos) => {
      console.log(todos);

      let todos2 = ref(todos);

      // const {
      //   getPendingTodos,
      //   getActiveTodayTodos,
      //   getCompletedTodayTodos,
      //   getAllTodayTodos,
      //   getAllTodos
      // } = useFilter();
      const filter = useFilter();

      console.log('getPendingTodos', filter.getPendingTodos(todos2));
      console.log('getActiveTodayTodos', filter.getActiveTodayTodos(todos2));
      console.log('getCompletedTodayTodos', filter.getCompletedTodayTodos(todos2));
      console.log('getAllTodayTodos', filter.getAllTodayTodos(todos2));
      console.log('getAllTodos', filter.getAllTodos(todos2));
    }

    let tempTodos = [];
    tempTodos.push({ job: '업무1', date: '2023-12-26', completed: false })
    tempTodos.push({ job: '업무2', date: '2023-12-25', completed: false })
    tempTodos.push({ job: '업무3', date: '2023-12-25', completed: false })
    tempTodos.push({ job: '업무4', date: '2023-12-25', completed: true })

    let todos = ref(tempTodos);

    let storage = useStorage();
    //console.log(todos.value);
    storage.saveTodos(todos);
    storage.loadTodos(initTodos)
  }
}

// export default {
//   name: 'HelloWorld',
//   props: {
//     msg: String
//   },
//   data() {
//     return {
//       count: 0,

//     }
//   }
// }
</script>
