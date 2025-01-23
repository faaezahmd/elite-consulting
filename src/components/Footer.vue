<template>
    <div class="footer">
        <div class="footer-wrapper">
            <div class="footer-content">
                <h1>Elite Consulting</h1>
                <h2>Your Trauma Experts</h2>
                

            </div>
            <div class="social-icon">
                <h2>Follow:</h2>
                <img src="../assets/images/facebook-svgrepo-com.png" alt="">
                <img src="../assets/images/instagram-round-svgrepo-com.png" alt="">

            </div>
        </div>
        <p class="all-rights">©2025
        </p>
    </div>
</template>
<style lang="scss" scoped>
.footer{
    padding: 50px;
    border-top: 1px solid rgba(255, 255, 255, 0.7294117647);
    background: linear-gradient(233deg, rgb(237, 237, 237) 20%, rgb(227, 227, 227) 33%);
}
.all-rights{
    max-width: 1200px;
    padding: 0 30px;
    margin: auto;
    margin-top: 20px;
}
.footer-wrapper{
    display: flex;
    align-items: start;
    justify-content: space-between;
    position: relative;
    max-width: 1200px;
    padding: 0 30px;
    margin: auto;
    color: #24414f;
    h1{
        font-weight: 300;
        font-size: 40px;
        line-height: 37px;
    }
    h2{
        color: hsl(0, 0%, 62%);
        font-size: 20px;
        font-weight: 300;
    }
    p{
        font-size: 16px;
        margin-top: 30px;
        
    }
}
.social-icon{
    display: flex;
    align-items: center;
    gap: 20px;
    img{
        width: 35px;
        cursor: pointer;
    }
    h2{
        font-size: 16px;
        color: #24414f;
        
    }
}
@media screen and (max-width: 767px) {
    .footer{
        padding: 50px 0;
    }
    .footer-wrapper{
        flex-direction: column;
        gap: 10px;
        h1{
        font-size: 30px;
        }
        h2{
        }
    }
    .social-icon{
 h2{
    font-size: 15px;
 }
    img{
        width: 30px;
        cursor: pointer;
    }
}
}
</style>