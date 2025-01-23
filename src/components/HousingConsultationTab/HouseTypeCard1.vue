<template>
    <div class="service-card-wrapper">
        <div class="service-content">
            <div class="service-text" data-aos="fade-right">
                <p class="heading">
                    Housing Transition Services</p>
                <p class="descruption">

                    A housing transition services provider (a person or agency) helps a person plan for, find, and move
                    into housing.

                    ​<br>

                    ​

                    o Examples: Helping the person think about preferred housing; with the housing search and
                    application processes; developing a budget; and understanding a lease.
                </p>

            </div>
            <div class="service-image" data-aos="zoom-in">
                <img src="../../assets/images/d1.avif" alt="">
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
    background: linear-gradient(233deg, rgb(237, 237, 237) 20%, rgb(227, 227, 227) 33%);
    color: #24414f;

   
}

.descruption {
    line-height: normal;
    text-align: left;
    font-weight: 400;
    margin-bottom: 15px;
    font-size: 22px;
}

.heading {
    font-size: 35px;
    line-height: 65px;
    text-align: left;
    font-weight: 600;
    color: #001c29;
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
.service-text{
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