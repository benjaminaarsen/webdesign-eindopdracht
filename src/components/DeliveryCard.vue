<template>
    <div class="card">
        <div class="card-content">
            <Icon :icon="this.icontype" :width="this.width" style="flex-grow: 1"/>
            <h1>{{ text }}</h1>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue';
export default {
    name: "DeliveryCard",
    props: {
        text: String,
        icontype: String,
        width: Number
    },
    components: {
        Icon
    }
}
</script>

<style scoped>
    .card {
        color: var(--primary-color);
        display: flex;
        justify-content: center;
        background-color: var(--secondary-color);
        border-radius: 10px;
        height: 225px;
        transition-duration: 300ms;
        box-shadow: 0 8px  rgba(0, 0, 0, 0.5);
        margin-left: 15px;
        margin-right: 15px;

    }
    .card:hover {
        cursor: pointer;
        background-color: var(--secondary-color-shade);
        transform: translateY(4px);
        box-shadow: 0 4px  rgba(0, 0, 0, 0.7);
    }
        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-around;
            width: 200px;
        }

            h1 {
                font-size: 30px;
                margin: 40px 0px;
            }


    @media screen and (max-width: 600px) {
        .card {
            height: 150px;
        }
        .card-content {
            width: 130px;
        }
            h1 {
                font-size: 20px;
                margin: 20px 0px;
            }
        svg {
            transform: scale(0.7);
        }
    }
</style>    