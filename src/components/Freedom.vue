<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <h1 class="heading">You deserve to live in FREEDOM </h1>
          <p class="sub-title">The process is simple
        </p>
       
        <div class="negative-cards" >
            
            <RouterLink to="/contact" class="card" data-aos="flip-left">
                <div class="card-icon">
                    <img src="../assets/images/call.svg" alt="">
                </div>
                <p>
                    Contact Us
                </p>
            </RouterLink>
            <div class="card" data-aos="flip-left">
                <div class="card-icon">
                    <img src="../assets/images/user.svg" alt="">
                </div>
                <p>
                    Work with your expert
                </p>
          
            </div>
            <div class="card" data-aos="flip-left">
                <div class="card-icon">
                    <img src="../assets/images/home.svg" alt="">
                </div>
                <p>
                    Live in Freedom


                </p>
          
                
            </div>
            
        </div>
       
    </div>
    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    // height: 100vh;
    padding: 100px 0;
    background-image: url('../assets/images/sg.jpg');
    background-size: cover;
  background-repeat: no-repeat;
  background-size: cover; /* Cover the entire container */
  background-attachment: fixed; /* Make background static */
  background-position: center;
    color: #fff;
}
.heading{
    font-size: 60px;
    line-height: normal;
    text-align: center;
    font-weight: 600;
   color: #001c29;
}
.sub-title{
    font-size: 24px;
    line-height: normal;
    text-align: center;
    font-weight: 300;
   color: #001c29;
}
.negative-content{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
}

.negative-cards{
    position: relative;
    display: flex;
    padding: 80px 0;
    gap: 25px;
    justify-content: center;
    align-items: center;
}
.card {
    position: relative;
    display: flex;
    align-items: center;
    border-radius: 15px;
    margin-bottom: 10px;
    color: #fff;
    background-color: #ffffff6e;
    border: 2px solid #ffffffe4;
    padding: 20px 25px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
cursor: pointer;
    gap: 10px;
    &:hover {
    border: 2px solid #001c29;
    background-color: #ffffff;

    }

    .card-icon {

        img {
            width: 50px;
        }
    }

    p, a {
        text-decoration: none;
        font-size: 20px;
        line-height: 30px;
        color: #001c29;
    }



    span {
        color: #61b4db;
        font-weight: 400;
        cursor: pointer;
        font-size: 18px;

    }

}

@media screen and (max-width: 1200px) {
    .negative-cards {
       flex-wrap: wrap;
       justify-content: start;
        gap: 20px;
        column-gap: 30px;
    }
    .negative-card-wrapper {
    background-position: right;
    }
}
@media screen and (max-width: 575px) {
    .heading{
        font-size: 40px;
        line-height: 45px;
        .sub-heading{
            font-size: 20px;
        }
    }
    .card{
        padding: 5px 20px;
        border-radius: 10px;
        margin-bottom: 0;
        p{
            font-size: 18px;
        }
        .card-icon {
            img{
                width: 30px;
            }
        }

    }
}
</style>