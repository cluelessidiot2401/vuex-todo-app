<template>
  <div>
    Filter Todos:
    <select @change="filterTodos($event)">
      <option
        v-for="(value, idx) in state.filterValues"
        :key="idx"
        :value="value"
        >{{ value }}</option
      >
    </select>
  </div>
</template>

<script>
import { reactive } from "vue";
import { useStore } from "vuex";
export default {
  name: "FilterTodos",
  setup() {
    const state = reactive({
      filterValues: ["", 10, 20, 30, 50, 100, 200],
    });
    const store = useStore();
    const filterTodos = (event) => store.dispatch("Todos/filterTodos", event);

    return { state, filterTodos };
  },
};
</script>

<style scoped></style>
