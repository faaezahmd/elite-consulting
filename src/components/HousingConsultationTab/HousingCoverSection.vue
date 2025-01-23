<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;" data-aos="fade-up">
                <h1 class="heading">Housing Consultations for Housing Stabilization Services (HSS)</h1>
            </div>
            <div class="cunsulting-box">
                <p class="sub-title" data-aos="flip-left">
                    A Housing Consultation helps a person who doesn't have Medical Assistance case management develop a
                    person-centered plan to address the needs, wants, and goals for living in the community.


                </p>
                <p class="sub-title" data-aos="flip-left">
                    Elite Consulting has created a place for you to get everything you need for your Housing Consultation
                    in order for you to receive the Housing Stabilization Services from a provider of your choice.

                    ​
                </p>
                <p class="sub-title" data-aos="flip-left">
                    If you qualify, Elite Consulting can assist you in obtaining a Professional Statement of Need (PSN),
                    and complete the Housing Consultation by submitting the person-centered plan. This can be done all
                    in one visit!

                    ​</p>
               
            </div>
    
    <div style=" display: flex; flex-wrap: wrap; align-items: center; gap: 10px; width: 100%;  margin: auto;justify-content: center;margin-top: 30px;">
            <p class="sub-title">
                    Call or Text 000-000-0000 today or
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
    background-image: url('../../assets/images/sk.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-size: cover;
    background-attachment: fixed;
    background-position: top;
    color: #fff;
}
.buttons-wrapper{
        
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
.heading {
    font-size: 60px;
    line-height: 65px;
    text-align: center;
    font-weight: 600;
    background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    margin-bottom: 50px;

}

.sub-title {
    font-size: 20px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    
    color: #ffffff;

}
.cunsulting-box{
    display: flex;
    gap: 20px;
    .sub-title {
        color: #001c29e6;
        text-align: left;
        font-size: 18px;
    padding: 20px;
    background-color: #ffffffa7;

}
}
.negative-content {
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
    padding: 100px 30px;

}


@media screen and (max-width: 991px) {
    .negative-content {
        grid-template-columns: repeat(1, 1fr);
        gap: 70px;
        column-gap: 30px;
        padding: 100px 20px;
    }
    .cunsulting-box{
        flex-wrap:wrap ;
        flex-direction: column;
    }
}

@media screen and (max-width: 575px) {
    .heading {
        font-size: 40px;
        line-height: 45px;
    }

    .sub-title {
        font-size: 16px;
        padding: 0;
    }

    .narrative-cards {
        padding: 30px;
    }
}
</style>