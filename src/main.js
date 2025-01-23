import './assets/main.scss'

import VueSplide from '@splidejs/vue-splide';
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
// Initialize AOS


  AOS.init({
    duration: 1500, // Adjust animation speed
    once: false, // Set to true if you want the animation only once
    mirror: false,
    easing: "ease-in-out", // Smoother animation easing
  });


const app = createApp(App)

app.use(router)
app.use( VueSplide );
app.mount('#app')
