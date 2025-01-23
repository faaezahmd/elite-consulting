<script setup>
import { ref } from 'vue';
import { defineProps } from 'vue';
import { Splide, SplideSlide } from '@splidejs/vue-splide';
import '@splidejs/vue-splide/css/sea-green';
// import { AutoScroll } from '@splidejs/splide-extension-auto-scroll';
const options = ref({
    type  : 'loop',
  autoplay: true, 
  interval: 3500,
  perPage: 6,
  perMove: 1,
  snap   : true,
  focus  : 0,
  omitEnd: true,
  gap: '1rem',
  arrows: false,
  wheel  : true,
  pagination: true,
  speed: 1500,
  breakpoints: {
    575: {
    perPage: 1.5,
    perMove: 1,
    gap: '0.7rem',
    },
},
  });

// Define props for heading and subHeading
const props = defineProps({
  heading: {
    type: String,
    default: 'Our Narrative'
  },
  subHeading: {
    type: String,
    default: 'At 61 Experience we watched negative experiences steal life from those we love. Talk therapy is only part of the healing process. There is a reason your body remembers moments differently than your mind. 61 incorporates "bottom up" therapy and other tools to help your body get "un"-stuck so you can live in freedom.'
  },
  textLine: {
    type: String,
    default: 'We have created a team with strong values to guide you in your journey.'
  },
  background: {
    type: String,
    default: 'linear-gradient(233deg, #1f3c49 20%, #001c29 33%)' // Default gradient background
  },
  borderRadius: {
    type: String,
    default: '15px 80px'
  },
  border: {
    type: String,
    default: ''
  },
});
</script>
<template>
    <div class="narrative-card-wrapper"  :style="{ background: props.background }">
        <div class="narrative-content" data-aos="fade-up">
            <h1 class="heading">{{ props.heading }}</h1>
            <p class="sub-heading">
                {{ props.subHeading }}
           </p>
   
        <div class="narrative-cards" data-aos="zoom-in">
            
            <Splide :options="options"  >
                <SplideSlide>
                    <div class="card" :style="{  borderRadius: props.borderRadius, }">
                    <img src="../assets/images/card/narretive1.jpg" alt="Card Image" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                    <div class="card-title">Community</div>
                    <img class="line" src="../assets/images/card/line.png" alt="Card Image">
                    <div class="card-hover-text">An interdependent network</div>
                    </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="card" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <img src="../assets/images/card/narretive3.jpg" alt="Card Image"  :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <div class="card-title">Justice</div>
                        <img class="line" src="../assets/images/card/line.png" alt="Card Image">
                        <div class="card-hover-text">Capacity to move forward  </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="card" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <img src="../assets/images/card/narretive2.jpg" alt="Card Image" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <div class="card-title">Hope</div>
                        <img class="line" src="../assets/images/card/line.png" alt="Card Image">
                        <div class="card-hover-text">To believe in possibility </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="card" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <img src="../assets/images/card/narretive6.jpg" alt="Card Image" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <div class="card-title">Grace</div>
                        <img class="line" src="../assets/images/card/line.png" alt="Card Image">
                        <div class="card-hover-text">To trust in second chances  </div>
                        </div>
                    </SplideSlide>
                    <SplideSlide>
                        <div class="card" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <img src="../assets/images/card/narretive5.jpg" alt="Card Image" :style="{ border: props.border,  borderRadius: props.borderRadius, }">
                        <div class="card-title">Joy</div>
                        <img class="line" src="../assets/images/card/line.png" alt="Card Image">
                        <div class="card-hover-text">The journey should be full of laughter </div>
                        </div>
                    </SplideSlide>
            </Splide>
        </div>
       
    <p class="sub-heading">{{ props.textLine }} </p>
       
    </div>

    </div>
</template>

<style lang="scss" scoped>
.narrative-card-wrapper {
    padding: 100px 0;
    // background-image: url('../assets/images/sd.jpg');
    // background-size: cover;
    // background: linear-gradient(233deg, #1f3c49 20%, #001c29 33%);
    // background-repeat: no-repeat;
    color: #fff;
}
.heading{
    font-size: 60px;
    line-height: normal;
    text-align: center;
    font-weight: 600;
    background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
.sub-heading{
    font-size: 24px;
    line-height: normal;
    text-align: center;
    font-weight: 300;
}
.narrative-content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
 
}

.narrative-cards {
    
    padding: 80px 0;
    display: flex;
      justify-content: space-between;
      gap: 20px;
      max-width: 1200px;
      width: 100%;
      overflow: hidden;

}
.card {
    // border-radius: 15px 80px;
    border: none !important;
    width: 200px;
    text-align: center;
    position: relative;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    }
.line {
    position: absolute;
    bottom: -20px;
    width: 74% !important;
    height: auto !important;
    margin: auto;
    left: 15px;
    right: 0;
}
    .card:hover {
    //   transform: translateY(-5px);
    //   box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
    }

    .card img {
        width: 100%;
        height: 270px;
        object-fit: cover;
        border-radius: 15px 80px;
        transition: opacity 0.3s ease;
    }

    .card:hover img {
      opacity: 0.3;
    //   filter: grayscale(100%);
    }
    .card:hover .line{
        opacity: 1;
    }
    .card-title {
        font-size: 24px;
        color: #ffffff;
        margin: 4px 0;
        font-weight: 600;

    }

    .card-hover-text {
        position: absolute;
        top: 15px;
        left: 15px;
        border-radius: 15px 80px;
        right: 15px;
        bottom: 70px;
        font-size: 16px;
        font-weight: 400;
        color: #ffffff;
        background: rgb(255 255 255 / 40%);
        opacity: 0;
        text-align: center;
        pointer-events: none;
        transition: opacity 0.3s ease;
        align-content: center;
    }

    .card:hover .card-hover-text {
      opacity: 1;
    }
    @media screen and (max-width: 575px) {
        .heading{
            font-size: 40px;
            margin-bottom: 15px;
        }
        .sub-heading{
          font-size: 18px;
        }
    }
</style>
<style lang="scss">
 .narrative-cards .splide:not(.is-overflow) .splide__pagination{
    // display: block !important;
  }
  .narrative-cards  .splide{
    padding: 0;
      .splide__slide{
        min-width: 200px;
        max-width: 210px;
        padding-bottom: 20px;
        // padding-top: 25px;
      }
  }
  
  .narrative-cards .splide__pagination{
    align-items: start;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 0;
    pointer-events: none;
    height: 100%;
    padding-bottom: 20px;
    padding-right: 0;
}

.narrative-cards .splide__pagination__page{
    border: 0;
    border-radius: 8.5px;
    display: block;
    height: 10px;
    margin: 5px;
    padding: 0;
    position: relative;
    transition: background-color .2s linear;
    width: 10px;
}
.narrative-cards  .splide__pagination__page.is-active {
    background: #0ead69;
    z-index: 1;
}
.narrative-cards .splide__pagination__page:hover{
    background: #12d17e;
    z-index: 1;
}
  @media screen and (max-width: 575px) {
    .narrative-cards .splide{
      .splide__slide{
        min-width: unset !important;
        // max-width: 300px;
      }
  }
  }
 
</style>