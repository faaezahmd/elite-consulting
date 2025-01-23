<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;" data-aos="fade-up">
                    <h1 class="heading">Services</h1>
                <p class="sub-title">
                    Elite Consulting was founded so you can experience freedom. <br>Here is a list of the services that allow you to pursue that freedom. 
                </p>
                <div class="buttons-wrapper">
                    <button>Schedule Now</button>
                </div>
            </div>
        </div>
    
    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
height: auto;
padding: 100px 0;
background-image: url('../../assets/images/service-cover.jpg');
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
    // background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // background-clip: text;
    // text-fill-color: transparent;
    color: #24414f;
   
}
.sub-title{
    font-size: 20px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    padding: 0 15px;
    color: #24414f;
    margin-top: 30px;
    
}
.negative-content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding: 100px 30px;
   
}

.buttons-wrapper{
    display: flex;
    gap: 10px;
    justify-content: center;
    margin-top: 30px;
}
    button{
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
    color: #fff;
    min-width: 165px;
    padding: 15px 30px;
    cursor: pointer;
    background: linear-gradient(180deg, #24414f 20%, #001c29 53%);
    display: inline-block;
    border: none;
    transition: 0.2s;

    border-radius: 10px;
    &:hover{
      color: #61b4db;
      // background: linear-gradient(2deg, rgb(255, 255, 255) 4%, hsl(208.89, 8.46%, 48.2%) 96%);
    }
  }
@media screen and (max-width: 991px) {
    .negative-content {
        grid-template-columns: repeat(1, 1fr); 
        gap: 70px;
        column-gap: 30px;

    }
}
@media screen and (max-width: 575px) {
    .heading {
       font-size: 40px;
    }
    .negative-content{
        padding: 50px 20px;
    }
}
</style>