<template>
    <div class="contact-section">
        <h1 class="heading" data-aos="fade-up">CONTACT US </h1>
        <p class="sub-title" data-aos="fade-up">We want to work with you regardless of your circumstances. You are your greatest asset.</p>

    <div class="contact-wrapper">   
        <div class="contact-image" data-aos="fade-right">
            <img src="../assets/images/si.jpg" alt="">
        </div>
        <div class="contact-form" data-aos="fade-left">
            <form @submit.prevent="submitForm">
            <div class="name">
                <label for="name">Name</label>
                <div>
                    <input type="text" id="name" v-model="form.name">
                    <span v-if="errors.name">{{ errors.name }}</span>
                </div>
            </div>
            <div class="email">
                <label for="email">E-Mail</label>
                <div>
                    <input type="email" id="email" v-model="form.email">
                    <span v-if="errors.email">{{ errors.email }}</span>
                </div>
            </div>
            <div class="subject">
                <label for="subject">Subject</label>
                <div>
                    <input type="text" id="subject" v-model="form.subject">
                    <span v-if="errors.subject">{{ errors.subject }}</span>
                </div>
            </div>
            <div class="message">
                <label for="message">Message</label>
                <div>
                    <textarea id="message" v-model="form.message"></textarea>
                <span v-if="errors.message">{{ errors.message }}</span>
            </div>
            </div>
            
            <button class="submit-color" buttonMargin="25px auto 0;" buttonType="submit" buttonText="Send Message "> Submit</button>
    
            </form>
        </div>
    </div>
    </div>
  </template>
  
<script setup>
    import { reactive, computed } from 'vue'
  const form = reactive({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const errors = reactive({})
  
  const isValidEmail = (email) => {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return re.test(email)
  }
  
  const validateForm = () => {
    errors.name = form.name.length < 3 ? 'Name must be at least 3 characters long' : ''
    errors.email = !form.email ? 'Email is required' : !isValidEmail(form.email) ? 'Invalid email format' : ''
    errors.subject = !form.subject ? 'Subject is required' : ''
    errors.message = form.message.length < 10 ? 'Message must be at least 10 characters long' : ''
    
    return Object.values(errors).every(error => error === '')
  }
  

const submitForm = () => {
    if (validateForm()) {
        emailjs.send('service_47rrc29', 'template_xnuxqfq', {
            from_name: form.name,
            to_name: 'Umair',
            subject: form.subject,
            message: form.message,
            reply_to: form.email
        }, 'nJpzbX2_NqoOtAWdW')  // Ensure this is your correct EmailJS User ID
        .then((response) => {
          
            alert('Your Form is submitted!')
                
            console.log('Email successfully sent!', response.status, response.text);
            console.log('Form submitted:', subject)
            alert('Message sent successfully!');
        }, (error) => {
            console.error('Failed to send email.', error);
            alert('An error occurred. Please try again later.');
        });
    } else {
        console.log('Form has errors');
    }
}

</script>
<style lang="scss" scoped>
.contact-section{
    padding: 100px 0;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
}
.contact-wrapper{
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
.contact-image {
    img{
        width: 100%;
        border-radius: 30px;
    }
}
.heading{
    font-size: 60px;
    line-height: normal;
    text-align: center;
    font-weight: 600;
    padding: 0 20px;
    background: linear-gradient(180deg, hsla(0, 0%, 93%, 0.91) 41%, #ffffff 77%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
}
.sub-title{
    font-size: 24px;
    line-height: normal;
    text-align: center;
    font-weight: 300;
    color: #fff;
    padding: 0 20px;

}
input{
    width: 100%;
    border: 2px solid rgb(255 255 255 / 71%);
    border-radius: 10px;
    background: #001c29;
    color: #f5f5f5;
    padding: 20px;
    font-family: "Poppins", sans-serif;
    &::placeholder{
        color: #001c29;
    }
}
input:-webkit-autofill {
    -webkit-box-shadow: 0 0 0 1000px #fdfdfd inset;
    box-shadow: 0 0 0 1000px #fdfdfd inset;
    -webkit-text-fill-color: #001c29;
}
textarea{
    // width: 100%;
   
    border: 2px solid rgb(255 255 255 / 71%);
    font-family: "Poppins", sans-serif;
    border-radius: 10px;
    background: transparent;
    color: #fff;
    padding: 20px;
    resize: vertical;
    display: block;
    width: calc(100% - 0px) !important;
    height: 130px;
    &::placeholder{
        color: #001c29;
    }
   
}

.contact-form{
       
    .name,
    .email,
    .subject,
    .message,
    .textarea
    {
    font-family: "Poppins", sans-serif;
    display: block;
    margin-bottom: 20px;
    position: relative;
    width: calc(100% - 43px);
  
    label{
        position: absolute;
        left: 20px;
        color: #e2e2e2;
        top: -10px;
        background-color: #001c29;
        border-radius: 4px;
        padding: 0 8px;
    }
    span{
        color: crimson;
        font-size: 12px
    }
    }
}

.submit-color{
    font-weight: 600;
    font-size: 15px;
    text-transform: capitalize;
    color: #000000;
    padding: 15px 50px;
    cursor: pointer;
    background: linear-gradient(180deg, rgb(255, 255, 255), hsl(208.89, 8.46%, 48.2%) 93%);
    display: inline-block;
    border: none;
    transition: 0.2s;
    border-radius: 10px;
    margin-left: auto;
}

@media screen and (max-width: 991px) {
    .contact-wrapper{
   
    // grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-columns: repeat(1, 1fr); 
    gap: 30px;
    column-gap: 30px;
}
.contact-form{
       
       .name,
       .email,
       .subject,
       .message,
       .textarea
       {
     
       width: calc(100% - 0px);
       }
    }
}
@media screen and (max-width: 575px) {
    .heading{
        font-size: 40px;
    }
    .contact-wrapper{
        padding: 80px 20px;
    }
    .sub-title{
        font-size: 16px;
    }
}
</style>