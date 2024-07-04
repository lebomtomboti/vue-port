<template>
  <div class="contact-form">
    <h2>Contact Me</h2>
    <form @submit.prevent="submitForm">
      <div class="form-group">
        <label for="name">Full Name</label>
        <input type="text" id="name" v-model="formData.name" required>
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input type="email" id="email" v-model="formData.email" required>
      </div>
      <div class="form-group">
        <label for="phone">Phone Number</label>
        <input type="tel" id="phone" v-model="formData.phone">
      </div>
      <div class="form-group">
        <label for="subject">Subject</label>
        <input type="text" id="subject" v-model="formData.subject">
      </div>
      <div class="form-group">
        <label for="message">Message</label>
        <textarea id="message" rows="5" v-model="formData.message" required></textarea>
      </div>
      <div class="form-group">
        <button type="submit">Send Message</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'ContactForm',
  data() {
    return {
      formData: {
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      }
    };
  },
  methods: {
    submitForm() {
      // Simulate form submission
      console.log('Form submitted with data:', this.formData);

      // Optionally, clear the form fields after submission
      this.formData.name = '';
      this.formData.email = '';
      this.formData.phone = '';
      this.formData.subject = '';
      this.formData.message = '';
    }
  }
};
</script>

<style scoped>
.contact-form {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  background-color: brown;
  border-radius: 8px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.contact-form h2 {
  text-align: center;
  margin-bottom: 20px;
}

.form-group {
  margin-bottom: 15px;
}

.form-group label {
  display: block;
  margin-bottom: 5px;
}

.form-group input,
.form-group textarea {
  width: 100%;
  padding: 10px;
  font-size: 16px;
  border: 1px solid brown;
  border-radius: 5px;
}

.form-group textarea {
  resize: vertical;
}

.form-group button {
  background-color: brown;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  border-radius: 5px;
}

.form-group button:hover {
  background-color: black;
}
</style>
