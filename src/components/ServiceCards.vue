<template>
    <div class="service-card-wrapper">
        <div class="service-cards">
            <div class="card" data-aos-delay="100" data-aos="zoom-in">
                <div class="card-icon">
                    <img src="../assets/images/home.png" alt="">
                </div>
                <p>
                    Housing Consultations

                </p>
          
                <span>Get one or both done in one visit</span>

            </div>
            <div class="card" data-aos-delay="100" data-aos="zoom-in">
                <div class="card-icon">
                    <img src="../assets/images/faith.png" alt="">
                </div>
                <p>
                    Faith Based Therapy
                </p>
          
                <span>Creating the option of faith in healing</span>

            </div>
            <div class="card" data-aos-delay="100" data-aos="zoom-in">
                <div class="card-icon">
                    <img src="../assets/images/trama.png" alt="">
                </div>
                <p>
                    Trauma Therapy
                </p>
          
                <span>More than just talk therapy</span>
            </div>
            <div class="card" data-aos-delay="100" data-aos="zoom-in">
                <div class="card-icon">
                    <img src="../assets/images/faimly.png" alt="">
                </div>
                <p>
                    Family and Couples Therapy
                </p>
          
                <span>Options for all ages</span>
            </div>
        </div>
        <div class="buttons-wrapper" data-aos-delay="100" data-aos="fade-up">
            <!-- <button>Contact</button> -->
            <RouterLink to="/contact">Contact Us</RouterLink>
            <button>Schedule Now</button>
            <button class="read-more">Read More</button>


        </div>
    </div>
</template>
<style lang="scss" scoped>
.service-cards {
    margin: 0 auto;
    max-width: 1200px;
    padding: 100px 30px;
    display: grid;
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(2, 1fr); 
    gap: 70px;
    column-gap: 30px;

}

.service-card-wrapper {
    padding: 100px 0;
    background-image: url('../assets/images/sd.jpg');
    background-color: #e1e1e1;
    background-size: cover;
    background-repeat: no-repeat;
    
}

.buttons-wrapper{
    display: flex;
    gap: 10px;
    justify-content: center;
}
    button, a {
        text-decoration: none;
        text-align: center;
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
    color: #fff;
    min-width: 165px;
    padding: 15px 30px;
    cursor: pointer;
    background: linear-gradient(180deg, #24414f 20%, #001c29 53%);
    display: inline-block;
    border: none;
    transition: 0.2s;

    border-radius: 10px;
    &:hover{
      color: #61b4db;
      // background: linear-gradient(2deg, rgb(255, 255, 255) 4%, hsl(208.89, 8.46%, 48.2%) 96%);
    }
  }
  .read-more{
    background: transparent;
    border: 2px solid #001c29;
    color: #001c29;

  }

.card {
    position: relative;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
    color: #fff;
    border-radius: 15px;
    padding: 80px 30px 40px 30px;
    text-align: left;
    font-weight: 500;
    align-content: center;

    &:hover .card-icon {
        transform: translateY(-10px);

    }

    .card-icon {
        position: absolute;
        top: -50px;
        left: 20px;
        transition: transform 0.3s ease, box-shadow 0.3s ease;

        img {
            width: 100px;
        }
    }

    p {
        margin-bottom: 5px;
    font-size: 24px;

    }



    span {
        color: #61b4db;
        font-weight: 400;
        cursor: pointer;
        font-size: 18px;

    }

}

@media screen and (max-width: 1200px) {
    .service-cards {
        grid-template-columns: repeat(2, 1fr); 
        gap: 70px;
        column-gap: 30px;

    }
}
@media screen and (max-width: 767px) {
  
    .service-cards {
        grid-template-columns: repeat(1, 1fr); 
        gap: 70px;
        column-gap: 30px;

    }
    .buttons-wrapper{
        flex-wrap: wrap;
        padding: 0 20px;
    }
    button{
        min-width: 100px;
    }
}
</style>