<template>
  <div class="todo-container">
    <h3>Todos</h3>
    <div class="todos">
      <div
        v-for="todo in allTodos"
        :key="todo.id"
        class="todo"
        :class="{ completed: todo.completed }"
        @dblclick="toggleCompletion(todo)"
      >
        <h4>{{ todo.title }}</h4>
        <i @click="deleteTodo(todo.id)" class="fas fa-trash-alt"></i>
      </div>
    </div>
  </div>
</template>

<script>
import { computed, onMounted } from "vue";
import { useStore } from "vuex";
export default {
  name: "Todos",
  setup() {
    const store = useStore();
    onMounted(() => {
      // console.log("Mounted!");
      store.dispatch("Todos/fetchTodoList");
    });
    const allTodos = computed(() => store.state.Todos.todos);
    function toggleCompletion(todo) {
      const updatedTodo = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed,
      };
      store.dispatch("Todos/updateTodo", updatedTodo);
    }

    function deleteTodo(id) {
      store.dispatch("Todos/deleteTodo", id);
    }

    return {
      allTodos,
      toggleCompletion,
      deleteTodo,
    };
  },
};
</script>

<style scoped>
.todo-container {
  display: flex;
  flex-direction: column;
}
.todos {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  padding: 0 5rem;
}
.todo {
  display: flex;
  flex: 1 1 auto;
  background: #575757;
  margin: 1rem;
  padding: 0.5rem;
  color: white;
  border-radius: 5rem;
  user-select: none;
  box-shadow: inset 0 0 0 0.2rem red;
  justify-content: space-between;
}

.todo h4 {
  margin: auto 0.3rem;
}
.completed {
  box-shadow: inset 0 0 0 0.2rem #07c;
}

.todo i {
  justify-self: flex-end;
  margin: 0 0.5rem;
  align-self: center;
  cursor: pointer;
}
</style>
