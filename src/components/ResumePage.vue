<template>
  <div class="resume-page">
    <div class="section">
      <h2 class="section-title">Education</h2>
      <div class="section-content">
        <div class="row">
          <div v-for="(edu, index) in education" :key="index" class="col-md-6 mb-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">{{ edu.description }}</h5>
                <p class="card-text">{{ edu.year }}</p>
                <p class="card-text">{{ edu.Institution }}</p>
                <p v-if="edu.contact.length > 0" class="card-text">Contact: {{ edu.contact[0].name }} - {{ edu.contact[0].contactDetails }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="section">
      <h2 class="section-title">Skills</h2>
      <div class="section-content">
        <div class="row">
          <div v-for="(skill, index) in skills" :key="index" class="col-md-4 mb-4">
            <div class="card">
              <img :src="skill.image" :alt="skill.name" class="card-img-top">
              <div class="card-body">
                <h5 class="card-title">{{ skill.name }}</h5>
              </div>
            </div>
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
      education: [
        {
          "image": "https://lebomtomboti.github.io/portPhotos/LIFE-CHOICES-ACADEMY-LOGO-ON-BLUE-800x400.jpg",
          "description": "Bootcamp",
          "year": "2nd April - to current",
          "Institution": "Life Choices Academy",
          "contact": [
            {
              "name": "Life Choices",
              "contactDetails": ""
            }
          ]
        },
        {
          "image": "https://lebomtomboti.github.io/portPhotos/school.png",
          "description": "High school",
          "year": "2016-2020",
          "Institution": "Chris Hani Arts And Culture School",
          "contact": [
            {
              "name": "Chris Hani",
              "contactDetails": ""
            }
          ]
        }
      ],
      skills: [
        {
          "name": "HTML",
          "image": "https://lebomtomboti.github.io/vue-pictures/htm%20icon.png"
        },
        {
          "name": "CSS",
          "image": "https://lebomtomboti.github.io/vue-pictures/css%20icon.png"
        },
        {
          "name": "Bootstrap",
          "image": "https://lebomtomboti.github.io/vue-pictures/bootstrap%20icon.jpg"
        },
        {
          "name": "Javascript",
          "image": "https://lebomtomboti.github.io/vue-pictures/js%20icon.png"
        },
      ]
    };
  }
};

</script>

<style scoped>
.resume-page {
  font-family: Arial, sans-serif;
  padding: 20px;
  background-color: black; 
  color: white; 
}

.section {
  margin-bottom: 30px;
}

.section-title {
  font-size: 24px;
  font-weight: bold;
}

.section-content {
  margin-top: 10px;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  gap: 50px; 
}

.card {
  flex: 1 1 300px; 
  border: 1px solid brown;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
  padding: 20px;
  margin: 60px;
  width: 400px;
}
</style> 






