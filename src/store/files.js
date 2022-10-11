const state = () => ({
  uploadedFile: null,
});

const getters = {
  uploadedFile: (state) => state.uploadedFile,
};

const mutations = {
  SET_UPLOADED_FILE: (state, uploadedFile) => {
    state.uploadedFile = uploadedFile;
  },
};

const actions = {
  uploadFile(context, file) {
    const reader = new FileReader();
    reader.addEventListener('load', () => {
      context.commit('SET_UPLOADED_FILE', reader.result);
    });
    reader.readAsDataURL(file);
  },
};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
