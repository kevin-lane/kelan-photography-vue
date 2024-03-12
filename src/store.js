import { createApp } from 'vue';
import { createStore } from 'vuex';

const store = createStore({
  state: {
    title: 'Your Photo Name',
    description: '',
    image: ''
  },
  mutations: {
    setPhotoTitle(state, title){
      state.title = title;
    },
    setPhotoDescription(state, description){
      state.description = description;
    }
  }
})

export default store;