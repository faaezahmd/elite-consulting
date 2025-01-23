<script setup>
import ContactCoverSection from '../components/ContactTab/ContactCoverSection.vue';
import Contact from '@/components/Contact.vue';
import Footer from '@/components/Footer.vue';


</script>

<template>
  <div class="narrative-page">
    <ContactCoverSection />
    
  <Contact />
  <Footer />

  </div>
</template>

<style lang="scss" scoped>
.narrative-page{
overflow:hidden;
}

// .buttons-wrapper{
//     display: flex;
//     gap: 10px;
//     justify-content: center;
//     margin-top: 30px;
// }
//     button{
//     font-weight: 600;
//     font-size: 15px;
//     text-transform: capitalize;
//     color: #fff;
//     min-width: 165px;
//     padding: 15px 30px;
//     cursor: pointer;
//     background: linear-gradient(180deg, #24414f 20%, #001c29 53%);
//     display: inline-block;
//     border: none;
//     transition: 0.2s;

//     border-radius: 10px;
//     &:hover{
//       color: #61b4db;
//       // background: linear-gradient(2deg, rgb(255, 255, 255) 4%, hsl(208.89, 8.46%, 48.2%) 96%);
//     }
//   }
@media (min-width: 1024px) {
}
</style>