<template>
    <div class="header-image">
        <h1>Burgir House</h1>
        <div class="circle-holder">
            <!-- <img class="logoimg" src="../assets/logo.png"> -->
        </div>
    </div>
</template>

<script>
export default {
    name: 'HeaderImage'
}
</script>

<style lang="scss" scoped>
    .header-image {
        width: 100%;
        display: flex;
        z-index: -1;
        justify-content: flex-start;
        background-image: url("../assets/main-image.jpg");
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        height: 30vh;
        position: relative;
        overflow: hidden;
    }
    h1 {
            color: var(--secondary-color);
            z-index: 1;
            position: absolute;
            margin-top: 10vh;
            // margin-left: 10vw;
        }
    .circle-holder {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        background-color: var(--primary-color);
        width: 25vw;
        transform: scale(3);
        rotate: 15deg;
        // margin: 0 auto;
        bottom: 0;
        vertical-align: middle;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.616));
    }
        .logoimg {
            width: 80px;
            margin-left: -25px;
        }
@media screen and (max-width: 600px){
    h1 {
            margin-left: 10vw;
        }
}
</style>