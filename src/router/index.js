import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../components/HomePage.vue';
import AboutPage from '../components/AboutPage.vue';
import ProjectsPage from '../components/ProjectsPage.vue';
import ResumePage from '../components/ResumePage.vue';
import TestimonialsPage from '../components/TestimonialsPage.vue';
import ContactForm from '../components/ContactForm.vue';

const routes = [
  { path: '/',component: HomePage },
  { path: '/about',component: AboutPage },
  { path: '/projects',component: ProjectsPage },
  { path: '/resume',component: ResumePage },
  { path: '/testimonials',component: TestimonialsPage },
  { path: '/contact',component: ContactForm }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;

