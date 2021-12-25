<template>
    <div class="card">
        <img :src="this.image" />
        <div class="text">
            <h2>{{ this.title }}</h2>
            <p>{{ this.desc }}</p>
        </div>
        <div class="price">
            <h3>{{ this.price }}</h3>
        </div>

    </div>
</template>

<script>
export default {
    name: 'ProductCard',
    props: {
        title: String,
        desc: String,
        price: String,
        image: String
    },
}
</script>

<style lang="scss" scoped>
    .card:hover {
        transform: translateY(-5px);
        cursor: pointer;
        background: rgb(224, 224, 224);
        filter: drop-shadow(0px 0px 3px rgba(0, 0, 0, 0.4));

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
        justify-content: space-between;

    }
        .text {
            padding: 0 15px;
        }
            h2 {
                font-size: 20px;
                line-height: 10px;
                font-weight: 500;
                color: var(--primary-color);

            }
            p {
                line-height: 14px;
                font-size: 12px;
                color: rgb(168, 168, 168);
            }
        .price {
            height: 50px;
            border-top: 2px solid var(--accent-color);
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