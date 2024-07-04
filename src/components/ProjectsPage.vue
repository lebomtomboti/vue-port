<template>
    <div class="container">
      <h2 class="text-center mt-5 mb-4">Projects</h2>
      <div class="row row-cols-1 row-cols-md-3 g-4">
        <div class="col" v-for="(project, index) in projects" :key="index">
          <div class="card h-100">
            <img :src="project.image" class="card-img-top" alt="Project Image">
            <div class="card-body">
              <h5 class="card-title">{{ project.name }}</h5>
              <p class="card-text">{{ project.Description }}</p>
            </div>
            <ul class="list-group list-group-flush">
              <li class="list-group-item"><a :href="project.Github" target="_blank">GitHub Repo</a></li>
              <li class="list-group-item"><a :href="project.vercel" target="_blank">Vercel Deployment</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        projects: []
      };
    },
    mounted() {
      this.fetchProjects();
    },
    methods: {
      async fetchProjects() {
        try {
          const response = await fetch('https://lebomtomboti.github.io/first-api/data/data.json');
          if (!response.ok) {
            throw new Error('Network response was not ok');
          }
          const data = await response.json();
          this.projects = data.projects;
        } catch (error) {
          console.error('There was a problem fetching the projects:', error);
        }
      }
    }
  };
  </script>
  
  <style scoped>
  .card {
    border: 1px solid brown;
    border-radius: 8px;
    overflow: hidden;
    transition: box-shadow 0.3s ease;
    background-color:white;
    margin: 100px;
    width: 500px;
    
  }
  
  .card:hover {
    box-shadow: 0 0 15px rgba(0, 0, 0, 0.3);
  }
  
  .card-title {
    font-size: 1.25rem;
    font-weight: bold;
    
  }
  
  .card-text {
    margin-bottom: 1rem;
  }
  </style>