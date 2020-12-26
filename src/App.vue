<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <Todos />
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
};
</script>

<style>
#app {
  font-family: SF Pro Display, SF Pro Icons, Helvetica Neue, Helvetica, Arial,
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  font-size: 1.2rem;
}
</style>
