
<template>
    <div class="negative-card-wrapper">
        <div class="negative-content">
            <div style="align-content: center;" data-aos="fade-up">
                <h1 class="heading">What is Housing Stabilization Services (HSS)?
                </h1>
            </div>
            <div class="cunsulting-box">
                <p class="sub-title" data-aos="zoom-in">
                    <img src="../../assets/images/bulb.png" alt="">
                    Support an individual's transition into housing
                </p>
                <p class="sub-title" data-aos="zoom-in">
                    <img src="../../assets/images/house.png" alt="">
                    Increase long-term stability in housing in the community

                </p>
                <p class="sub-title" data-aos="zoom-in">
                    <img src="../../assets/images/member.png" alt="">
                    Avoid future periods of homelessness or institutionalization

                    ​</p>
               
            </div>
    
    <div class="scroll-down">
      
                <div class="buttons-wrapper">
                    <button>Schedule Now</button>
                </div>
            </div>

        </div>

    </div>
</template>
<style lang="scss" scoped>
.negative-card-wrapper {
    height: 110vh;
    padding: 0;
    background-image: url('../../assets/images/sm.jpg');
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
    margin-bottom: 70px

}


.sub-title {
    font-size: 20px;
    line-height: normal;
    text-align: center;
    font-weight: 400;
    
    color: #ffffff;

}
.buttons-wrapper{
        
    button{
        font-weight: 600;
        font-size: 15px;
        text-transform: capitalize;
        color: #fff;
        padding: 15px 30px;
        cursor: pointer;
        background: linear-gradient(180deg, #24414f 20%, #001c29 53%);
        display: inline-block;
        border: none;
        transition: 0.2s;
        border-radius: 10px;
        &:hover{
            color: #fff;
        }
    }
    }
.scroll-down{
    display: flex; flex-direction: column; align-items: center; gap: 10px;  justify-content: start;margin-top: 30px;
    
    svg{
        width: 30px;
    }
}
.cunsulting-box{
    display: flex;
    gap: 20px;
    .sub-title {
    text-align: center;
    align-content: center;
    padding: 25px;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
    border-radius: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex: 1;
    justify-content: start;
        img{
            width: 70px;
    padding: 10px;
    margin-top: -65px;
    border-radius: 20px;
    border: 3px solid #17313c;
    background-color: #fff;
        }
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
        gap: 50px;
    }
    .negative-card-wrapper {
        height: auto;
    }
}

@media screen and (max-width: 575px) {
    .heading {
        font-size: 35px;
        line-height: 45px;
    }

    .cunsulting-box .sub-title {
        font-size: 16px;
        padding: 35px 25px;
    }

    .narrative-cards {
        padding: 30px;
    }
}
</style>
