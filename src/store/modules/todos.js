import axios from "axios";

const url = "https://jsonplaceholder.typicode.com/todos";
const actions = {
  async fetchTodoList({ commit }) {
    const response = await axios.get(url);
    commit("SET_TODOS", response.data);
  },

  async addTodo({ commit }, title) {
    const response = await axios.post(url, { title, completed: false });
    commit("NEW_TODO", response.data);
  },

  async deleteTodo({ commit }, id) {
    axios.delete(`${url}/${id}`);
    commit("REMOVE_TODO", id);
  },

  async filterTodos({ commit }, e) {
    if (e.target.value === "") return;
    const limit = parseInt(e.target.value);
    const response = await axios.get(`${url}?_limit=${limit}`);
    commit("SET_TODOS", response.data);
  },

  async updateTodo({ commit }, item) {
    const response = await axios.put(`${url}/${item.id}`, item);
    commit("UPDATE_TODO", response.data);
  },
};

const mutations = {
  SET_TODOS: (state, todos) => (state.todos = todos),
  NEW_TODO: (state, todo) => state.todos.unshift(todo),
  REMOVE_TODO: (state, id) =>
    (state.todos = state.todos.filter((todo) => todo.id !== id)),
  UPDATE_TODO: (state, item) => {
    const index = state.todos.findIndex((todo) => todo.id === item.id);
    if (index !== -1) state.todos.splice(index, 1, item);
  },
};

export const TodosModule = {
  namespaced: true,
  state: {
    todos: [],
  },

  mutations,
  actions,
};
