<template>
  <div>
    <div class="page-wrapper">
    <h1>Contact Me</h1>
    <form class="cf" @submit.prevent="submitForm">
      <div class="half left cf">
        <input type="text" v-model="formData.name" placeholder="Name" id="input-name" required>
        <input type="text" v-model="formData.last" placeholder="Last Name" id="input-Last Name" required>
        <input type="text" v-model="formData.email" placeholder="email" id="input-email" required>
      </div>
      <div class="half right cf">
        <textarea v-model="formData.message" placeholder="Message" id="input-message" required></textarea>
      </div>
      <input type="submit" value="Submit" id="input-submit">
    </form>
    <div class="social-icons">
      <a href="#"><i class='bx bxl-github'></i></a>
      <a href="#"><i class='bx bxl-linkedin-square' ></i></a>
    </div>
  </div>
</div>
</template>

<script>
import { ref } from 'vue';

export default {
  setup() {
    const formData = ref({
      name: '',
      email: '',
      subject: '',
      message: ''
    });

    const submitForm = () => {
      console.log('Form submitted:', formData.value);
      formData.value = {
        name: '',
        email: '',
        subject: '',
        message: ''
      };
    };

    return {
      formData,
      submitForm
    };
  }
};
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Merriweather:wght@300&display=swap');

*,
*:before,
*:after {
  box-sizing: border-box;
}
.page-wrapper {
  background:  #0c1022;
}

html,
body {
  background: #f1f1f1;
  font-family: 'Merriweather', sans-serif;
  padding: 1em;
}

h1 {
  text-align: center;
  color: white;
  text-shadow: 1px 1px 0 rgba(255, 255, 255, 1);
}

form {
  max-width: 600px;
  text-align: center;
  margin: 20px auto;
}

form input,
form textarea {
  border: 0;
  outline: 0;
  padding: 1em;
  border-radius: 8px;
  display: block;
  width: 100%;
  margin-top: 1em;
  font-family: 'Merriweather', sans-serif;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.1);
  resize: none;
}

form input:focus,
form textarea:focus {
  box-shadow: 0 0px 2px rgba(231, 76, 60, 1);
}

#input-submit {
  color: white;
  background: #e74c3c;
  cursor: pointer;
}

#input-submit:hover {
  box-shadow: 0 1px 1px 1px rgba(170, 170, 170, 0.6);
}

textarea {
  height: 126px;
}

.half {
  float: left;
  width: 48%;
  margin-bottom: 1em;
}

.right {
  width: 50%;
}

.left {
  margin-right: 2%;
}

@media (max-width: 480px) {
  .half {
    width: 100%;
    float: none;
    margin-bottom: 0;
  }
}
.cf:before,
.cf:after {
  content: " ";
  display: table;
}

.cf:after {
  clear: both;
}
.social-icons {
  margin-top: 20px;
}

.social-icons a {
  text-decoration: none;
  color: #f06;
  font-size: 24px;
  margin: 0 10px;
}

</style>

