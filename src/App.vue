<script setup>
import { ref } from 'vue';
import { RouterLink, RouterView } from 'vue-router';

const isMenuOpen = ref(false);
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
</script>

<template>
  <header data-aos="fade-down">
    <div class="wrapper">
      <div class="logo">Elite Consulting</div>
      <button class="hamburger" @click="toggleMenu" aria-label="Toggle navigation">
        <span></span>
        <span></span>
        <span></span>
      </button>
      <nav :class="{ open: isMenuOpen }">
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/our-narrative">Our Narrative</RouterLink>
        <RouterLink to="/services">Services</RouterLink>
        <RouterLink to="/housing-consultation">Housing Consultation</RouterLink>
        <RouterLink to="/contact">Contact Us</RouterLink>
        <RouterLink to="">
          <button>Schedule Now</button>
        </RouterLink>
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped lang="scss">
header {
  background-color: #001c29;
  position: fixed;
  top: 0;
  border-bottom: 1px solid #ffffffba;
  width: 100%;
  z-index: 99;
  backdrop-filter: blur(30px);
  -webkit-backdrop-filter: blur(30px);
}

.logo {
  font-size: 22px;
  font-weight: 600;
  color: #fff;
  cursor: pointer;
}

.hamburger {
  display: none;
  flex-direction: column;
  justify-content: space-between;
  width: 33px;
  height: 19px;
  background: none;
  border: none;
  cursor: pointer;

  span {
    display: block;
    width: 100%;
    height: 3px;
    background-color: #fff;
    border-radius: 2px;
  }
}

nav {
  font-size: 12px;
  text-align: center;
  align-items: center;
  display: flex;
  button {
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
    color: #000000;
    padding: 15px 30px;
    cursor: pointer;
    background: linear-gradient(180deg, rgb(255 255 255), hsl(208.89deg 8.46% 48.2%) 93%);
    display: inline-block;
    border: none;
    transition: 0.2s;

    border-radius: 10px;
    &:hover {
      color: #fff;
    }
  }
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  font-size: 16px;
  font-weight: 500;
}

nav.open {
  display: block;
}

nav a:first-of-type {
  border: 0;
}

header .wrapper {
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  align-items: center;
  width: 100%;
  justify-content: space-between;
  padding: 20px 30px;
}

@media (max-width: 1200px) {
  .hamburger {
    display: flex;
  }
  header .wrapper {
  padding: 20px 20px;
}
  nav {
    display: none;
    flex-direction: column;
    position: absolute;
    top: 100%;
    left: 0;
    background-color: #001c29;
    width: 100%;
    padding: 1rem 0;
  }

  nav.open {
    display: flex;
  }

  nav a {
    padding: 0.7rem 1rem;
    border-top: 1px solid rgba(84, 84, 84, 0.48) !important;
    width: 100%;
  }
}
</style>
