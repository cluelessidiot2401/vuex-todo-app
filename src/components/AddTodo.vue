<template>
  <div>
    <h3>Add Todo</h3>
    <div class="add">
      <form @submit.prevent>
        <input type="text" v-model="state.title" placeholder="Add Todo..." />
        <input type="submit" value="Add" @click="addNewTodo" />
      </form>
    </div>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "AddTodo",
  setup() {
    const state = reactive({
      title: "",
    });
    const store = useStore();

    function addNewTodo() {
      store.dispatch("Todos/addTodo", state.title);
      state.title = "";
    }
    return { state, addNewTodo };
  },
};
</script>

<style scoped>
form {
  display: flex;
  margin: 1rem;
  padding: 0 5rem;
}
input {
  border: 0.1rem solid #333333;
  border-radius: 4px;
  min-width: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
  margin: auto 0.5rem;
}
input[type="text"] {
  flex-grow: 5;
  margin: auto 0.5rem;
}
input[type="submit"] {
  flex-grow: 1;
  background: linear-gradient(#42a1ec, #0070c9);
  border: 0.1rem solid #07c;
  border-radius: 4px;
  color: #fff;
  cursor: pointer;
  min-width: 3rem;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
  padding-top: 0.3rem;
  padding-bottom: 0.4rem;
  text-align: center;
  white-space: nowrap;
  margin: auto 0.5rem;
}
</style>
