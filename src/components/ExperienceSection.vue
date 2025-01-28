<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;"  data-aos="fade-in" data-aos-delay="50" data-aos-offset="80">
                <h1 class="heading">You can experience true healing
                </h1>
                <p class="sub-title">We want to work with you regardless of your circumstances. You are your greatest
                    asset.</p>
            </div>
            <div class="negative-image" >
                <img src="../assets/images/people.jpg" alt="" data-aos="zoom-in" data-aos-delay="80"  data-aos-offset="100">
            </div>
        </div>

    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    padding: 100px 0;
    background-image: url('../assets/images/sh.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    /* Cover the entire container */
    background-attachment: fixed;
    /* Make background static */
    background-position: center;
    color: #fff;
}

.heading {
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    font-weight: 600;
    color: #001c29;
}

.sub-title {
    font-size: 20px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    transform: skew(12deg, 355deg);
    padding: 10px 15px;
    color: #ffffff;
    background-color: #61b4db;
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
    column-gap: 30px;
}

.negative-image {
    img {
        width: 100%;
        border-radius: 30px 100px;
        box-shadow: 0 8px 15px rgba(0, 0, 0, 0.4);
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
        line-height: 45px;
    }
}
</style>