<template>
    <div class="card">
        <img src="@/assets/chickenburger.jpg" />
        <div class="text">
            <h2>Chicken Burger</h2>
            <p>Lekker burger met kip</p>
        </div>
        <div class="price">
            <h3>€4.60</h3>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        title: String,
        price: String,
        image: String
    }
}
</script>

<style lang="scss" scoped>
    .card:hover {
        transform: translateY(-5px);
        cursor: pointer;
        background: rgb(224, 224, 224);
        filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.6));

    }
    .card {
        transition-duration: 200ms;
        display: flex;
        flex-direction: column;
        width: 200px;
        height: 270px;
        background: whitesmoke;
        border-radius: 10px;
        padding: 10px;
        overflow: hidden;
        justify-content: space-evenly;

    }
        .text {
            padding: 0 15px;
        }
            h2 {
                line-height: 15px;
                font-weight: 500;
                color: var(--primary-color);

            }
            p {
                color: rgb(168, 168, 168);
            }
        .price {
            border-top: 2px solid lightgrey;
        }
            h3 {
                line-height: 10px;
            }
        img {
            object-fit:cover;
            height: 120px;
            border-radius: 5px;
        }
</style>