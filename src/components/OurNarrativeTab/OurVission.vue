<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">


            <div class="negative-image" data-aos="fade-right">
                <div class="decuration"><img src="../../assets/images/s5.png" alt=""></div>
                <img class="m-img" src="../../assets/images/vission.png" alt="">
            </div>
            <div class="mession-text" data-aos="fade-left">
                <h1 class="heading">Our Vision
                </h1>
                <p class="sub-title">Everyone will have the ability to chase their dreams</p>
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    padding: 100px 0;

    background: linear-gradient(233deg, rgb(237, 237, 237) 20%, rgb(227, 227, 227) 33%);
    color: #fff;
}

.heading {
    font-size: 60px;
    line-height: 65px;
    text-align: left;
    font-weight: 600;
    color: #001c29;
}

.sub-title {
    font-size: 22px;
    line-height: normal;
    font-weight: 400;
    margin-top: 20px;
    padding: 16px 20px;
    color: #ffffff;
    background-color: #04364d;
}

.decuration {
    position: absolute;
    top: 17px;
    transform: scaleX(-1);
    z-index: 9;
    right: -90px;
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    img {
        width: 100%;
        width: 150px;
    }
}

.negative-content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding: 100px 30px;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(2, 1fr);
    gap: 70px;
    column-gap: 0;
}

.mession-text {
    z-index: 1;
    align-content: center;
}

.negative-image {
    position: relative;

    .m-img {
        width: 100%;
        border-radius: 30px 100px;
    }
}


@media screen and (max-width: 1020px) {
    .negative-content {
        grid-template-columns: repeat(1, 1fr);
        gap: 30px;
        column-gap: 30px;
        padding: 80px 20px;
    }

    .heading {
        text-align: center;
    }

    .negative-image {
        order: 2;
    }

    .mession-text {
        order: 1;
    }

    .sub-title {
        margin-left: 0;
        margin-right: 0;
    }

    .decuration {
        top: -29px;
        z-index: 9;
        right: 0;
    }
}

@media screen and (max-width: 575px) {
    .heading {
        font-size: 40px;
    }
}
</style>