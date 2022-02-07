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
            <a href="#footer" class="button">
                <p>Contact</p>
            </a>
            <div class="close-button"><p>Menu sluiten</p><Icon icon="ep:circle-close-filled" /></div>
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
        const cssProps = () => { //zodat de css van de sidebar in parent element bestuurd kan worden
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
        position: fixed;
        height: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        transform: translateX(var(--slide));
        background-color: var(--secondary-color);
        border-radius: 0 15px 0px 0;
        box-shadow: black 4px 4px 15px;
        transition-duration: 200ms;

    }
        .buttons {
            margin-top: 50px;
            text-align: left;
            a {
                text-decoration: none;
                text-align: left;
                p {
                    font-weight: 800;
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
            }
            .close-button {
                text-align: left;
                display: flex;
                flex-direction: row;
                align-items: center;
                p {
                    color: var(--primary-color);
                    font-weight: 800;
                    font-size: 30px;
                    line-height: 30px;
                    margin: 0;
                    padding: 15px;
                }
                svg {
                    font-size: 20px;
                    margin-top: 4px;
                }
            }
            .close-button:hover {
                background-color: var(--secondary-color-shade);
                cursor: pointer;
            }
        }
           
@media screen and (min-width: 600px) {
    .container { 
        transition-duration: 200ms;
        --slide: -450px;
        transform: scaleX(0) translateX(var(--slide));

    }
}
</style>