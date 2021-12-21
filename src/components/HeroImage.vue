<template>
    <div class="hero-image">
        <div class="cards">
            <delivery-card text="Bestellen" icontype="carbon-scooter" width="60"/>
            <delivery-card text="Afhalen" icontype="fa-solid:shopping-bag" width="30"/>
        </div>
        <div class="hero-text">
            <h1>Burger House</h1>
            <p>Echte Amerikaanse burgers aan de deur</p>
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

<style scoped>
    .hero-image {
        border-radius: 20px;
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
    }
    .cards {
        width: 30vw;
        display: flex;
        justify-content: space-around;
        flex-direction: row;
    }
    .hero-text {
        display: flex;
        /* padding: 0px 150px; */
        /* padding-right: 100px; */
        flex-direction: column;
        justify-content: center;
        align-items: flex-end;
        text-shadow: black 4px 4px 10px ;

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
</style>