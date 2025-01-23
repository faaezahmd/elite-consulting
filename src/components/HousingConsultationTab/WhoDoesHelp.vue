<template>
    <div class="who-dose-wrapper">
        <p class="heading">Who Does it Help? </p>
        <div  class="rich-text">
            <p style="font-size:20px; font-family:sans-serif; color:#FAFAFA;">
                To get <a href="/" target="_blank" style="text-decoration:underline;">Housing Stabilization Services</a>, you must:
            </p>

            <ul style="font-size:20px; font-family:sans-serif; color:#FAFAFA;">
                <li>Have Medical Assistance (MA) coverage</li>
                <li>Be 18 years or older</li>
                <li>
                Have a disability
                <ul>
                    <li>
                    Your disability does not have to meet Social Security adult standards for disability. Disabilities can include physical disabilities, mental illness, substance use disorder, and other conditions.
                    </li>
                    <li>The program manual has details about which types of disability may qualify.</li>
                </ul>
                </li>
                <li>
                Be in one of the following situations:
                <ul>
                    <li>Homeless</li>
                    <li>
                    At risk of homelessness (including being doubled up, needing services to keep your housing, or if you were previously homeless and are discharging from a correctional, medical, mental health, or substance use disorder treatment center without a permanent place to live)
                    </li>
                    <li>
                    Moving out of (or moved out of in the last six months) an institution, nursing facility, or certain other group settings like Board and Lodge or Adult Foster Care.
                    </li>
                    <li>At risk of institutionalization</li>
                </ul>
                </li>
                <li>
                Be assessed to need help with at least one of these disability-related areas:
                <ul>
                    <li>Communication</li>
                    <li>Mobility</li>
                    <li>Decision-making</li>
                    <li>Managing moods or behaviors</li>
                </ul>
                </li>
                <li>
                Not be getting similar services from other programs, like Moving Home MN, Assertive Community Treatment, Housing Access Coordination, or Relocation Service Coordination.
                </li>
            </ul>
            </div>

    </div>
</template>
<style scoped lang="scss">
.who-dose-wrapper{
    padding: 100px 0;
    background: linear-gradient(115deg, #1f3c49 20%, #001c29 33%);
    color: #fff;
}
.rich-text{
    margin: 0 auto;
    max-width: 1200px;
    padding: 0 30px;
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
@media screen and (max-width: 575px) {
    .heading {
        font-size: 40px;
        padding:0  20px;
    }
}
</style>