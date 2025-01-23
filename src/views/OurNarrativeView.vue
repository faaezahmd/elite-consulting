<script setup >
import NarrativeCoverSection from '../components/OurNarrativeTab/NarrativeCoverSection.vue';
import OurNarrative from '@/components/OurNarrative.vue';
import OurMission from '@/components/OurNarrativeTab/OurMission.vue';
import OurVission from '@/components/OurNarrativeTab/OurVission.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';


</script>

<template>
  <div class="narrative-page">
    <NarrativeCoverSection />
    <div class="re-use">
      <OurNarrative  data-aos="fade-up"
      heading="Our Core Beliefs" 
      textLine="" subHeading="" 
      borderRadius="15px 15px" 
      border="2px solid #fff" 
      background="linear-gradient(233deg, rgb(237 237 237) 20%, rgb(227 227 227) 33%)"/>
    </div>
    <OurMission />
    <OurVission />
    <Contact />
    <Footer />

  </div>
</template>

<style lang="scss">
.narrative-page{
overflow:hidden;
}
.re-use{
.heading{
  color: #001c29 !important;
  -webkit-text-fill-color: #001c29 !important;
}
.card-title{
  color: #001c29 !important;
}
 .card {
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
  .line{
    display: none;
    filter: brightness(0.5);
 }
}
.card-hover-text{
  background: #0000009e;
border-radius: 15px
}
.card:hover img{
  opacity: 0.7;
}
.splide .splide__slide{
  padding-left: 13px;
  margin-right: 18px !important;
}
}
@media (min-width: 1024px) {
}
</style>
