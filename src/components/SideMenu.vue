<template>
    <div class="container" :style="cssProps()">
        <div class="buttons">
            <router-link to="/" class="button">
                <p>Home</p>
            </router-link>
            <router-link to="/bestellen" class="button">
                <p>Bestellen</p>
            </router-link>
            <router-link to="/over-ons" class="button">
                <p>Over Ons</p>
            </router-link>
            <router-link to="/contact" class="button">
                <p>Contact</p>
            </router-link>
            <!-- <span><Icon icon="fa-regular:window-close" /><p>Menu sluiten</p></span> -->
        </div>
    </div>
</template>


<script>
import {Icon} from '@iconify/vue'
export default {
    name: "SideMenu",
    components: {
        Icon
    },
    props: {
        slide: String
    },
    setup(props) {
        const cssProps = () => {
            return {
                '--slide': props.slide
            }
        }
        return {
            cssProps
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        z-index: 2;
        width: 70%;
        position: absolute;
        height: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        transform: translateX(var(--slide));
        background-color: var(--secondary-color);
        border-radius: 0 15px 15px 0;
        box-shadow: black 4px 4px 15px;
        transition-duration: 200ms;

    }
        .buttons {
            margin-top: 50px;
        }
        a {
            text-decoration: none;
            text-align: left;

        }
        p {
            font-size: 30px;
            color: var(--primary-color);
            line-height: 30px;
            margin: 0;
            padding: 15px;
            transition-duration: 200ms;

        }
        p:hover {
            background-color: var(--secondary-color-shade)
        }

@media screen and (min-width: 600px) {
    .container { 
        transition-duration: 200ms;
        --slide: -450px;
        transform: scaleX(0) translateX(var(--slide));

    }
}
</style>