<template>
  <div class="container">
    <AddTodo />
    <FilterTodos />
    <pre v-if="error" class="danger" v-text="error"></pre>
    <Suspense v-else>
      <template #default>
        <Todos />
      </template>
      <template #fallback>
        <div>Loading...</div>
      </template>
    </Suspense>
  </div>
</template>

<script>
import Todos from "./components/Todos.vue";
import AddTodo from "./components/AddTodo.vue";
import FilterTodos from "./components/FilterTodos";
import { onErrorCaptured, ref } from "vue";
export default {
  name: "App",
  components: {
    Todos,
    AddTodo,
    FilterTodos,
  },
  setup() {
    const error = ref("");
    onErrorCaptured((e) => {
      console.log("Error Occured!!!");
      const msg = e?.message ?? e;
      error.value = JSON.stringify(msg, null, 2);
      return true;
    });

    return { error };
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
  font-size: 62.5%;
  color: #2c3e50;
  margin-top: 4rem;
  font-size: 1.2rem;
}
.container {
  margin: 1rem;
}
pre {
  text-align: left;
  white-space: pre-wrap;
}
.danger {
  margin: 1rem;
  padding: 0.5rem;
  box-shadow: inset 0 0 0 0.3rem red;
}
</style>
