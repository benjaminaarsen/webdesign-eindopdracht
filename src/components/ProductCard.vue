<template>
    <div class="card">
        <img src="@/assets/chickenburger.jpg" />
        <h2>Chicken Burger</h2>
        <h3>€4.60</h3>

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
    .card {
        filter: drop-shadow(0 0 5px rgba(0, 0, 0, 0.6));
        display: flex;
        flex-direction: column;
        width: 250px;
        height: 300px;
        background: whitesmoke;
        border-radius: 25px;
            overflow: hidden;

    }
        h2 {
            line-height: 15px;
            margin-bottom: 0;
            margin-top: 40px;
        }
        h3 {
            line-height: 10px;
        }
        img {
            object-fit:cover;
            height: 160px;
        }
</style>