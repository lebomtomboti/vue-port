<template>
  <div class="testimonials">
    <h2>Testimonials</h2>
    <div class="testimonial-cards">
      <div v-for="(testimonial, index) in testimonials" :key="index" class="card">
        <img :src="testimonial.image" alt="Testimonial Image" class="card-img-top">
        <div class="card-body">
          <h5 class="card-title">{{ testimonial.name }}</h5>
          <h6 class="card-subtitle mb-2 text-muted">{{ testimonial.position }}</h6>
          <p class="card-text">{{ testimonial.message }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      testimonials: []
    };
  },
  mounted() {
    this.fetchTestimonials();
  },
  methods: {
    fetchTestimonials() {
      const testimonialsData = [
        {
          "name": "Akhona",
          "position": "Peer",
          "message": "Lebo demonstrates unwavering dedication to her goals and responsibilities, consistently putting in the time and effort required to achieve success. She has a strong sense of empathy, showing understanding and compassion towards others' feelings and perspectives. Working with Lebo has been an absolute pleasure.",
          "image": "https://lebomtomboti.github.io/portPhotos/20240422_113358.jpg"
        },
        {
          "name": "Yolanda",
          "position": "Peer",
          "message": "She is adaptable and flexible, able to adjust to new situations and environments with ease. Maintains a positive outlook on life, approaching challenges with optimism and a can-do attitude.",
          "image": "https://lebomtomboti.github.io/portPhotos/20240422_122239.jpg"
        },
        {
          "name": "Sihlandlo",
          "position": "Peer",
          "message": "Her attention to detail and creativity shine through in every task she undertakes. Her contributions never fail to impress and elevate our team's work to the next level. Her innovative thinking and problem-solving skills have made a significant impact on our projects. Her ability to think outside the box brings fresh perspectives to every challenge we face.",
          "image": "https://lebomtomboti.github.io/portPhotos/Mna.jpg"
        },
        {
          "name": "Nikilitha",
          "position": "Peer",
          "message": "Lebo is a remarkable team member known for her reliability and dedication. She consistently goes above and beyond to ensure tasks are completed on time and to a high standard. Her attention to detail and organized approach contribute greatly to our team's efficiency.",
          "image": "https://lebomtomboti.github.io/vue-pictures/image.png"
        },
      ];
      this.testimonials = testimonialsData;
    }
  }
};
</script>

<style scoped>
.testimonials {
  text-align: center;
  margin: 2rem 0;
  background-color: #0c1022;
  color: white;
}

.testimonial-cards {
  display: flex;
  flex-wrap: wrap;
  gap: 20px;
  justify-content: center;
}

.card {
  width: 300px;
  border: 1px solid brown;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
}

.card-img-top {
  width: 100%;
  object-fit: cover;
}

.card-body {
  padding: 1rem;
}

.card-title {
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
}

.card-subtitle {
  color:white;
  font-size: 1.3rem;
  margin-bottom: 1rem;
}
</style>
