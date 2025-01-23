<template>
    <div class="service-card-wrapper">
        <div class="service-content">
            <div class="service-image" data-aos="zoom-in">

                <img src="../../assets/images/so.jpg" alt="">
            </div>
            <div class="service-text" data-aos="fade-right">
                <p class="heading">
                    Housing Sustaining Services</p>
                <p class="descruption">
                    A housing sustaining services provider (a person or agency) helps a person keep their housing after
                    they have moved in.
                    ​
                    <br>
                    ​
                    o Examples: Education on tenant-landlord rights and responsibilities; coaching to develop
                    relationships with property managers and neighbors; training on how to be a good tenant; lease
                    compliance; and problem-solving to maintain housing stability
                </p>

            </div>

        </div>

    </div>
</template>
<style lang="scss" scoped>
* {
    box-sizing: border-box;
}

.service-card-wrapper {
    padding: 140px 0;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
    color: #fff;


}

.descruption {
    line-height: normal;
    text-align: left;
    font-weight: 400;
    margin-bottom: 15px;
    font-size: 22px;
    color: #fff;
}

.heading {
    font-size: 35px;
    line-height: 65px;
    text-align: left;
    font-weight: 600;
    color: #fff;
}




.service-content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    min-height: 450px;
    padding-bottom: 0;
    display: flex;
    gap: 30px;

}

.service-text {
    flex: 0.9;
    cursor: pointer;
    align-content: center;
}

.service-image {
    flex: 1.1;
    position: relative;
    border-radius: 70px;
    overflow: hidden;
    max-height: 485px;
    
    img{
        width: 100%;
    height: 100%;
    object-fit: cover;
    }
    
}




@media screen and (max-width: 1020px) {
    .service-content {
       flex-direction: column;

    }
    .service-image {
    border-radius: 30px;
    order: 2;
    }
}

@media screen and (max-width: 575px) {
    .heading {
        font-size: 35px;
        line-height: 45px;
    }

    .sub-title {
        font-size: 18px;
    }

    .descruption {
        font-size: 16px;
    }
}
</style>