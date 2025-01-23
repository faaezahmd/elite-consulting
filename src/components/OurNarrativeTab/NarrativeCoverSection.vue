<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;" data-aos="fade-up">
                <h1 class="heading">Our Narrative </h1>
            <p class="sub-title">
                Elite Consulting was created to encourage and provide personalized solutions for those who have walked through negative experiences so that they can live in freedom. It is our belief you can have the "Elite Consulting" or the transformation out of Isaiah 61 described as "a crown of beauty instead of ashes, the oil of gladness instead of mourning, and a garment of praise instead of a spirit of despair".
                </p>
                <p class="sub-title">
                    ​

                        We have watched others talk and talk and talk and talk in therapy sessions to only move so far in healing. When you experienced that negative event or events-your body remembered it deep down inside of you. Through creativity and the "bottom up" approach, we have tools to help you unlock that memory and begin to heal again.  </p>

            </div>
   
       
    </div>
    
    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
height: auto;
padding: 100px 0;
background-image: url('../../assets/images/sj.jpg');
background-size: cover;
  background-repeat: no-repeat;
  background-size: cover; /* Cover the entire container */
  background-attachment: fixed; /* Make background static */
  background-position: top;
    color: #fff;
}
.heading{
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    font-weight: 600;
    background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
   
}
.sub-title{
    font-size: 20px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    padding: 0 15px;
    color: #ffffff;
    margin-top: 30px;
    
}
.negative-content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding: 100px 30px;
   
}


@media screen and (max-width: 991px) {
    .negative-content {
        grid-template-columns: repeat(1, 1fr); 
        gap: 70px;
        column-gap: 30px;
        padding: 100px 20px;
    }
}
@media screen and (max-width: 575px) {
    .heading {
       font-size: 40px;
    }
    .sub-title{
        font-size: 16px;
        padding: 0;
    }
    .narrative-cards{
        padding: 30px;
    }
}
</style>