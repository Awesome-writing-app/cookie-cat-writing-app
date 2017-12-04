const marked = require('marked');

const state = () => ({
  value: '',
});

const getters = {
  markdownText: state => marked(state.value),
  wordcount: (state) => {
    const match = state.value.match(/\S+/g);
    if (match) return match.length;
    return 0;
  },
};

const mutations = {
  UPDATE_TEXT(state, newText) {
    state.value = newText;
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
