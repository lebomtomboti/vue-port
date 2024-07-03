import Vuex from 'vuex';
import Vue from 'vue';
Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    about: {
      paragraphs: [] 
    }
  },
  mutations: {
    SET_ABOUT(state, aboutData) {
      state.about.paragraphs = aboutData; 
    }
  },
  actions: {
    async fetchAbout({ commit }) {
      try {
        
        const response = await fetch('https://api.example.com/about');
        if (!response.ok) {
          throw new Error('Failed to fetch about data');
        }
        const aboutData = await response.json();
        commit('SET_ABOUT', aboutData); 
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
    }
  }
});

