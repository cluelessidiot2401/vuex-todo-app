import { TodosModule } from "./modules/todos";
import { createStore } from "vuex";

// getters, mutations take local state as input
// actions take context as input. context.state, context.rootState
// someGetter (state, getters, rootState, rootGetters)
// To dispatch actions or commit mutations in the global namespace, pass { root: true } as the 3rd argument to dispatch and commit.

export default createStore({
  state: {},

  // are functions that effect the state -> directly change the state
  // ALL CAPS nomenclature
  mutations: {},

  // functions that we call throughout the application that calls mutations
  actions: {},
  modules: {
    Todos: TodosModule,
  },
});
