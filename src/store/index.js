import { createStore } from 'vuex'

export default createStore({
  //variables
  state: {
    //data -> propertyName , null ->value
    education:null,
    about:null,
    workingExperience:null,
    projects:null,
    skills:null,
    testimonials:null,
  },
  getters: {
  },
  mutations: {
    //use this to change/update the state
    setAboutMe(state,payload){
     state.aboutMe = payload
   },
    setEducation(state,payload){
      state.education = payload
   },
    setProjects(state,payload){
      state.projects = payload
    },
      setTestimonials(state,payload){
        state.testimonials = payload
      },
        setWorkingExprience(state,payload){
          state.workingExperience = payload
 },
  setSkills(state,payload){
   state.skills = payload
  }
},
  actions: {
    //run all the async code
    //dispatching
    async getAboutMe({commit}){
      let fetchedInfo = await fetch('https://lebomtomboti.github.io/first-api/data/data.json')
      let data = await fetchedInfo.json()
      let {aboutMe,projects,education,skills,workingExperience,testimonials} = data
      console.log(data);
       commit('setAboutMe',aboutMe)
      commit('setEducation',education)
      commit('setSkills',skills)
       commit('setWorkingExperience',workingExperience)
      commit('setTestimonials',testimonials)
     commit('setProjects',projects)
   }
},
modules: {
}
})