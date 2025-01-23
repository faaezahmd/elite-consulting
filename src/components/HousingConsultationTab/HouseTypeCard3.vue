<template>
    <div class="service-card-wrapper">
        <div class="service-content">
            <div class="service-text" data-aos="fade-right">
                <p class="heading">

                    Housing Consultation</p>
                <p class="descruption">

                    A housing consultant helps a person who doesn’t have MA case management develop a person-centered
                    plan that addresses their needs, wants, and goals for living in the community.

                    ​

                    ​<br>

                    o Examples: Developing a housing focused person-centered plan based on the person’s needs, wants,
                    and goals for housing; helping a person make an informed choice in their housing transition or
                    sustaining services provider; offering resources related to non-housing goals; and coordinating with
                    other service providers already working with the person.
                </p>

            </div>
            <div class="service-image" data-aos="zoom-in">
                <img src="../../assets/images/sn.jpg" alt="">

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