const state = () => ({
  value: 0,
});

const getters = {
};

const mutations = {
  UPDATE_SCROLL(state, newScroll) {
    state.value = newScroll;
  },
};

const actions = {
  // someAsyncTask({ commit }) {
  //   // do something async
  //   commit('INCREMENT_MAIN_COUNTER');
  // },
};

export default {
  state,
  getters,
  mutations,
  actions,
};
