const state = () => ({
  canvasObjects: [],
  activeObject: null,
});

const getters = {
  canvasObjects: (state) => state.canvasObjects,
  activeObject: (state) => state.activeObject,
};

const mutations = {
  ADD_CANVAS_OBJECT: (state, canvasObject) => {
    state.canvasObjects.push(canvasObject);
  },
  SET_ACTIVE_OBJECT: (state, activeObject) => {
    state.activeObject = activeObject;
  },
};

const actions = {

};


export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
