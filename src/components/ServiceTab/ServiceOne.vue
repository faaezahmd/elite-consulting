<template>
    <div class="service-card-wrapper">
        <div class="service-content">
            <div class="service-image" data-aos="zoom-in">
            <div class="mession-text">
                <div class="card-icon">
                    <img src="../../assets/images/home.png" alt="">
                </div>
                <h1 class="heading">Housing Consultations
                </h1>
                <p class="sub-title">Get one or both done in one visit

                </p>
               
            </div>

        </div>         
       
        <div class="service-text" data-aos="fade-left">

        <p class="descruption">We understand you need these documents for stable housing. We at Elite Consulting created visits just for you. Schedule your Housing Consultation and PSN in one visit. If you only need a PSN, we have a scheduling option for that as well.

            ​<br>

            Click 'Schedule Now'. Select Housing Consultation or Professional Statement of Need Only.

            ​​<br>

            If you need more information on what a Housing Consultation can provide through Housing Stabilization Services (HSS), click HERE.

            </p>
            <div class="buttons-wrapper">
                    <button>Schedule Now</button>
                </div>
        </div>
    </div>
            
    </div>
</template>
<style lang="scss" scoped>
*{
    box-sizing: border-box;
}
.service-card-wrapper {
    padding: 140px 0;
    background-color: #001c29;
    color: #fff;
    .buttons-wrapper{
        justify-content: start;
        margin: auto;
        max-width: 1200px;
        button{
            font-weight: 600;
            font-size: 15px;
            text-transform: capitalize;
            color: #000000;
            padding: 15px 30px;
            cursor: pointer;
            background: linear-gradient(180deg, rgb(255, 255, 255), hsl(208.89, 8.46%, 48.2%) 93%);
            display: inline-block;
            border: none;
            transition: 0.2s;
            border-radius: 10px;
            &:hover{
               color: #fff;
            }
        }
    }
}
.card-icon {
     
        img {
            width: 100px;
        }
    }
.heading {
    font-size: 50px;
    line-height: 65px;
    text-align: center;
    font-weight: 600;
    color: #ffffff;
}

.sub-title {
    font-size: 22px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    // transform: skew(12deg, 355deg);
    padding: 10px 15px;
    color: #ffffff;
}
.descruption{
    margin-bottom: 15px;
    font-size: 20px;
}

.service-content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding-bottom: 0;
    min-height: 450px;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    column-gap: 40px;
}
.service-image{
    cursor: pointer;
    background-size: cover;
    object-fit: cover;
    background-repeat: no-repeat;
    background-image: url(/src/assets/images/n8.jpg);
    border-radius: 0 70px;
    box-shadow: 6px 7px 0px 6px #61b4db;;
    &::after{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        border-radius: 0 70px;
        cursor: pointer;
        background-color: #001c297f;
        transition-duration: 0.5s;

    }
    &:hover::after{
        background-color: #001c29e8;
        cursor: pointer;
        border-radius: 0 70px;
        // top: 15px;
        // bottom: 15px;
        // left: 15px;
        // right: 15px;
    }
    &:hover{
        background-color: #001c29d4;
        cursor: pointer;

    }

}
.mession-text{
    align-content: center;
    position: relative;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    height: 100%;
    width: 100%;
    z-index: 1;
}
.service-image {
    position: relative;
   
}


@media screen and (max-width: 1020px) {
    .service-content {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        column-gap: 30px;
        padding: 0 20px;
        .service-image{
            box-shadow: 4px 3px 0px 0px #61b4db;
        }

    }
}

@media screen and (max-width: 575px) {
    .heading {
        font-size: 35px;
        line-height: 45px;
    }
    .sub-title{
        font-size: 18px;
    }
    .descruption{
        font-size: 16px;
    }
}
</style>