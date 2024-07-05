<template>
  <div class="page-wrapper">
  <div class="about-me">
    <h2>About Me</h2>
    <div class="about-content" v-html="aboutMe"></div>
  </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      aboutMe: ''
    };
  },
  mounted() {
    this.fetchAboutMe();
  },
  methods: {
    async fetchAboutMe() {
      try {
        const response = await fetch('https://lebomtomboti.github.io/first-api/data/data.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        this.aboutMe = data.AboutMe; 
      } catch (error) {
        console.error('Error fetching data:', error);
        
      }
    }
  }
};
</script>

<style scoped>
.page-wrapper {
  background: #0c1022;
}
.about-me {
  max-width: 800px;
  margin: 0 auto;
  text-align: center;
  
}

.about-content {
  background:white;
  color: black;
  padding: 20px;
  border-radius: 8px;
  margin-top: 20px;
  text-align: left;
  line-height: 1.6; 
}

.about-content p {
  margin-bottom: 10px; 

}

</style>

