<template>
    <div class="hero-image">
        <div class="hero-text">
            <img class="logoimg" src="../assets/logo.png">
            <h1>Burgir House</h1>
            <p>Echte Amerikaanse burgers aan de deur</p>
        </div>
        <div class="cards">
            <delivery-card text="Bestellen" icontype="carbon-scooter" :width="60"/>
            <delivery-card text="Afhalen" icontype="fa-solid:shopping-bag" :width="30"/>
        </div>
    </div>
</template>

<script>
import DeliveryCard from './DeliveryCard.vue'
export default {
    name: "HeroImage",
    components: {
        DeliveryCard
    }
}
</script>

<style scoped lang="scss">
    .hero-image {
        margin: 0 100px;
        margin-bottom: 210px;
        z-index: 0;
        border-radius: 15px;
        display: flex;
        background-image: linear-gradient(to bottom, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),rgba(0, 0, 0, 0), rgba(0, 0, 0, 0),  rgba(0, 0, 0, 1)), url("../assets/main-image.jpg");
        height: 70vh;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        position: relative;
        color: white;
        align-items: center;
        justify-content: space-evenly;
        flex-direction: row;
        transition-duration: 200ms;
        .cards {
            width: 30vw;
            display: flex;
            justify-content: space-around;
            flex-direction: row;
        }
        .hero-text {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: flex-end;
            text-shadow: black 4px 4px 5px ;
            img {
                display: none;
            }
            h1 {
                font-size: 80px;
                margin: 0px 0px;
                line-height: 110px;
            }
            p {
                margin: 0px 0px;
                line-height: 40px;
            }
        }
    }
@media screen and (max-width: 1200px){
    .hero-image {
        margin: 0 50px;
        margin-bottom: 210px;
        flex-direction: column;
        .hero-text {
            align-items: center;
        }
    }
}
@media screen and (max-width: 600px) {
    .hero-image {
        margin: 0 0;
        margin-bottom: 210px;
        border-radius: 0px;
    }
    img {
        visibility: visible;
        display: inline-block;
        width: 120px;
        position: relative;
    }
    h1 {
        font-size: 50px;
    }
}
</style>