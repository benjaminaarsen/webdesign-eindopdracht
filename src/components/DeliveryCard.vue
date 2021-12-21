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
        color: var(--secondary-color);
        display: flex;
        justify-content: center;
        background-color: var(--primary-color);
        border-radius: 10px;
        height: 225px;
        transition-duration: 100ms;
        box-shadow: 0 8px  rgba(0, 0, 0, 0.5);
        margin-left: 30px;

    }
    .card:hover {
        cursor: pointer;
        background-color: var(--primary-color-shade);
        transform: translateY(4px);
        box-shadow: 0 4px  rgba(0, 0, 0, 0.7);
    }
        .card-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content:space-evenly;
            width: 200px;
        }
            icon {
                flex-grow: 1;
            }
            h1 {
                font-size: 30px;
                margin: 40px 0px;
            }
</style>    