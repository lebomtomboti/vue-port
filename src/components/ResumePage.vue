<template>
  <div class="container">
    <div class="row">
      <div v-for="(skill, index) in skills" :key="index" class="col-md-4 mb-4">
        <div class="card">
          <img :src="skill.image" class="card-img-top" :alt="skill.name">
          <div class="card-body">
            <h5 class="card-title">{{ skill.name }}</h5>
            <p class="card-text">{{ skill.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ResumePage',
  data() {
    return {
      skills: [
        {
          name: 'HTML',
          description: 'Beginner level HTML skills.',
          image: 'https://lebomtomboti.github.io/vue-pictures/htm%20icon.png',
        },
        {
          name: 'CSS',
          description: 'Beginner level CSS skills.',
          image: 'https://lebomtomboti.github.io/vue-pictures/css%20icon.png',
        },
        {
          name: 'Bootstrap',
          description: 'Beginner level Bootstrap skills.',
          image: 'https://lebomtomboti.github.io/vue-pictures/bootstrap%20icon.jpg',
        },
        {
          name: 'Javascript',
          description: 'Beginner level Bootstrap skills.',
          image: 'https://lebomtomboti.github.io/vue-pictures/js%20icon.png',
        },
      ],
    };
  },
};
</script>

<style scoped>
.container {
  padding-top: 20px;
}
.card {
  border: 1px solid #ccc;
  border-radius: 5px;
  transition: box-shadow 0.3s;
  width: 300px;
  height: 50%;
  
}
.card:hover {
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}
.card-title {
  font-size: 1.25rem;
  font-weight: bold;
}
.card-text {
  font-size: 1rem;
}

</style>
