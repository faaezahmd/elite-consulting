<script setup>


</script>

<template>
 <div class="Home-cover">
  <div class="cover-content">
    <h1>Elite Consulting</h1>
    <h2>Your Trauma Experts
    </h2>
    <p data-aos="fade-up">
      Mental health services that work <br>
      Housing Consultations with the PSN provided
    </p>
 
</div>
<div class="cover-image-box"  data-aos="fade-left">
  <img class="" src="../assets/images/imagebox.jpg" alt="">

</div>
 </div>
</template>
<style lang="scss" scoped>
.Home-cover{
  text-align: left;
  padding: 200px 30px;
  padding-right: 0;
  align-content: center;
  height: 120vh;
  overflow: hidden;
  position: relative;
  color: #fff;
  background-image: url('../assets/images/se.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  background-size: cover; /* Cover the entire container */
  background-attachment: fixed; /* Make background static */
  background-position: center;
  display: grid;
  grid-template-columns: 60% 40%;
}
.cover-content{
  align-content: center;
  h1{
    font-size: 90px;
    line-height: 130px;
    font-weight: 300;
    background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }
  h2{
    font-size: 68px;
    width: fit-content;
    padding: 0 30px;
    color: #fff;
    background-color: #f0f8ff3b;
    // margin: auto;
    animation: fadeIn 1s ease-in-out;
  }
  p{
    font-size: 25px;
    margin-top: 20px;
  }
  ul{
    display: flex;
    width: 100%;
    gap: 16px;
    margin-top: 20px;
    justify-content: center;
  }
}
.cover-image-box{
width: 100%;
img{
  width: 100%;
  border-radius: 200px 0 0 200px;
  box-shadow: 0 4px 25px rgb(0 0 0 / 35%);
}
}
@keyframes fadeIn {
    from {
        opacity: 0;
        transform: translateY(50px);
    }

    to {
        opacity: 1;
        transform: translateY(0);
    }
}
.cover-image{
  width: 100%;
  position: absolute;
    top: 0;
    left: 0;
    z-index: -1;
}

@media screen and (max-width: 1400px) {

.cover-content{
  align-content: center;
  h1{
    font-size: 5vw;
    line-height: normal;
  }
  h2{
    font-size: 4.5vw;

  }
  p{
    font-size: 25px;
    margin-top: 20px;
  }
 
}
}
@media screen and (max-width: 1200px) {
  .Home-cover{
    height: 140vh;
    grid-template-columns: repeat(1, 1fr); 
    gap: 40px;
  }
  .cover-image-box {
      width: 50%;
      margin-left: auto;
  }
  .cover-content{
  align-content: center;
  padding-right: 30px;
  h1{
    font-size: 7vw;
    line-height: normal;
  }
  h2{
    font-size: 6vw;

  }
  p{
    font-size: 20px;
    margin-top: 30px;
  }
 
}
}
@media screen and (max-width: 1200px) {
  .Home-cover{
    height: 140vh;
    grid-template-columns: repeat(1, 1fr); 
    gap: 40px;
  }
  .cover-image-box {
      width: 50%;
      margin-left: auto;
  }
  .cover-content{
  align-content: center;
  padding-right: 30px;
  h1{
    font-size: 7vw;
    line-height: normal;
  }
  h2{
    font-size: 6vw;

  }
  p{
    font-size: 20px;
    margin-top: 30px;
  }
 
}
}

@media screen and (max-width: 575px) {
  .Home-cover{
    height: 100vh;
    grid-template-columns: repeat(1, 1fr); 
    gap: 10px;
  }
  .cover-image-box {
      width: 65%;
      margin-left: auto;
  }
  .cover-content{
    margin-top: 50px;
  align-content: center;
  padding-right: 30px;
  h1{
    font-size: 10vw;
    line-height: normal;
    margin-bottom: 15px;
  }
  h2{
    font-size: 6vw;
    padding: 30px 25px;
  }
  p{
    font-size: 20px;
    margin-top: 30px;
  }
  br{
    display: none;
  }
 
}
}
</style>
