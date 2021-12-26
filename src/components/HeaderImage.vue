<template>
    <div class="bg" />
    <div class="header-image">
        <h1>Burgir House</h1>
        <div class="circle-holder" />
    </div>
</template>

<script>
export default {
    name: 'HeaderImage'
}
</script>

<style lang="scss" scoped>
    .bg {
        background: var(--primary-color);
        width: 100vw;
        height: 30vh;
        position: absolute;
        z-index: -2;
    }
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
        clip-path: ellipse(80% 100% at top center);
    }
    h1 {
            color: var(--secondary-color);
            z-index: 1;
            position: absolute;
            margin-top: 10vh;
            margin-left: 10vw;
        }
    .circle-holder {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        // border-radius: 50%;
        background-color: var(--primary-color);
        width: 25vw;
        transform: scale(3);
        rotate: 15deg;
        // margin: 0 auto;
        bottom: 0;
        vertical-align: middle;
        filter: drop-shadow(0 0 10px rgba(0, 0, 0, 0.616));
    }
@media screen and (max-width: 600px){
    .header-image {
        clip-path:fill-box;
    }
    h1 {
            margin-left: 2vw;
            font-size: 30px;
        }
}
</style>