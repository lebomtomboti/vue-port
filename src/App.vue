<template>
  <div id="app">
    <Navbar />
    <AboutPage />
    <ResumePage />
    <ProjectsPage />
    <Spinner />
    <TestimonialsPage />
    <ContactForm />
    <footer />
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import AboutPage from './components/AboutPage.vue';
import ContactForm from './components/ContactForm.vue';
import ProjectsPage from './components/ProjectsPage.vue';
import ResumePage from './components/ResumePage.vue';
import TestimonialsPage from './components/TestimonialsPage.vue';
import Footer from './components/Footer.vue';
import Spinner from './components/Spinner.vue';


export default {
  components: {
    //eslint-disable-next-line vue/no-unused-components
    AboutPage,Navbar,ContactForm,ProjectsPage,ResumePage,TestimonialsPage,Footer,Spinner,
  }
};
</script>

<style>

</style>






