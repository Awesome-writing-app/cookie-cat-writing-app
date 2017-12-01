const state = () => ({
  title: '',
  filepath: '',
  tags: [],
});

const mutations = {
  UPDATE_TITLE(state, newTitle) {
    state.title = newTitle;
  },
  UPDATE_FILEPATH(state, newFilePath) {
    state.title = newFilePath;
  },
  ADD_TAG(state, newTag) {
    state.tags.push(newTag);
  },
  REMOVE_TAG(state, oldTag) {
    state.tags = state.tags.filter(tag => tag !== oldTag);
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
  mutations,
  actions,
};
