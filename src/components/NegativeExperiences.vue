<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <h1 class="heading" data-aos="fade-up">Negative experiences  impact us <br> all differently</h1>
          
       
        <div class="negative-cards">
            
            <div class="card" data-aos="flip-up">
                <div class="decoration">
                    <img src="../assets/images/s1.png" alt="">

                </div>
                <div class="card-icon">
                    <img src="../assets/images/n4.jpg" alt="">
                </div>
                <p>
                    You feel out of <br>control

                </p>
          
            </div>
            <div class="card" data-aos="flip-up">
                <div class="decoration">
                    <img src="../assets/images/s2.png" alt="">

                </div>
                <div class="card-icon">
                    <img src="../assets/images/n2.jpg" alt="">
                </div>
                <p>
                    It takes a lot away <br> from you
                </p>
          

            </div>
            <div class="card" data-aos="flip-up">
                <div class="decoration">
                    <img src="../assets/images/s3.png" alt="">

                </div>
                <div class="card-icon">
                    <img src="../assets/images/n1.jpg" alt="">
                </div>
                <p>
                    You shouldn't have to<br>experience it

                </p>
          
                
            </div>
            
        </div>
        <p class="sub-heading" data-aos="fade-up">
                Negative experiences can create lasting impact, 61 Experience has brought a team of experts to help you get "un"-stuck so you can pursue your dreams. 
            </p>
    
    </div>
    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    padding: 100px 0;
    // background-image: url('../assets/images/sd.jpg');
    // background-size: cover;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
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
.negative-content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
}

.negative-cards {
    
    padding: 80px 0;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(3, 1fr); 
    gap: 70px;
    column-gap: 30px;

}
.card {
    position: relative;
    
    color: #fff;
    text-align: center;
    font-weight: 500;
    align-content: center;

    &:hover .card-icon {
        transform: translateY(-10px);

    }

    .card-icon {
        background: linear-gradient(0deg, #1f3c49 20%, #001c29 33%);
        padding: 30px;
        border-radius: 100%;

        transition: transform 0.3s ease, box-shadow 0.3s ease;

        img {
            width: 100%;
            border-radius: 100%;
        }
    }

    p {
        font-size: 24px;
        margin-top: 20px;
        line-height: 30px;
        color: #61b4db;

    }



    span {
        color: #61b4db;
        font-weight: 400;
        cursor: pointer;
        font-size: 18px;

    }

}
.decoration{
    position: absolute;
        top: 50px;
        z-index: 9;
        right: 15px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        img {
            width: 80px;
        }
}

@media screen and (max-width: 1200px) {
    .negative-cards {
        grid-template-columns: repeat(2, 1fr); 
        gap: 70px;
        column-gap: 30px;

    }
}
@media screen and (max-width: 575px) {
    .negative-cards {
        grid-template-columns: repeat(1, 1fr); 
        gap: 70px;
        column-gap: 30px;
    }
  .card{
    .card-icon{
        padding: 20px;
    }
}
    .heading{
        font-size: 40px;
        line-height: 45px;
    }
    .sub-heading{
            font-size: 20px;
        }
}
</style>