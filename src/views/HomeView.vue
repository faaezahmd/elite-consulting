<script setup>
import TheWelcome from '../components/TheWelcome.vue';
import ServiceCards from '../components/ServiceCards.vue';
import NegativeExperiences from '../components/NegativeExperiences.vue';
import Freedom from '../components/Freedom.vue';
import OurNarrative from '../components/OurNarrative.vue';
import ExperienceSection from '../components/ExperienceSection.vue';
import Contact from '../components/Contact.vue';
import Footer from '../components/Footer.vue';
</script>

<template>
  <main>
    <TheWelcome />
    <ServiceCards />
    <NegativeExperiences />
    <Freedom />
    <OurNarrative />
    <ExperienceSection />
    <Contact />
    <Footer />
  </main>
</template>
<style>
main{
overflow:hidden;
}
</style>