<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;" data-aos="fade-up">
                <h1 class="heading">If you think you are eligible please </h1>
            </div>
            <div class="scroll-down">
                <div class="buttons-wrapper">
                    <RouterLink to="/contact">Contact Us</RouterLink>
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    height: 300px;
    padding: 0;
    background-image: url('../../assets/images/sh.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    color: #fff;
}

.heading {
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    font-weight: 600;
    color: #001c29;
    margin-bottom: 10px
}



.buttons-wrapper {

    button,
    a {
        text-decoration: none;
        font-weight: 600;
        font-size: 15px;
        text-transform: capitalize;
        color: #fff;
        padding: 15px 50px;
        cursor: pointer;
        background: linear-gradient(180deg, #24414f 20%, #001c29 53%);
        display: inline-block;
        border: none;
        transition: 0.2s;
        border-radius: 10px;

        &:hover,
        &:active,
        &:focus {
            color: #fff;
        }
    }
}

.scroll-down {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 10px;
    justify-content: start;
    margin-top: 30px;

    svg {
        width: 30px;
    }
}

.negative-content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding: 70px 30px;

}


@media screen and (max-width: 575px) {
    .heading {
        font-size: 35px;
        line-height: 44px;
        text-align: center;
        font-weight: 600;
        color: #001c29;
        margin-bottom: 0px;
    }

    .negative-content {

        padding: 50px 30px;
    }

    .narrative-cards {
        padding: 30px;
    }
}
</style>
