<template>
    <div class="container" :style="cssProps">
         <router-link style="text-decoration: none" to="/" class="button">
            <p>Home</p>
        </router-link>
        <router-link style="text-decoration: none" to="/bestellen" class="button">
            <p>Bestellen</p>
        </router-link>
        <router-link style="text-decoration: none" to="/over-ons" class="button">
            <p>Over Ons</p>
        </router-link>
        <router-link style="text-decoration: none" to="/contact" class="button">
            <p>Contact</p>
        </router-link>
    </div>
</template>


<script>
import { inject } from 'vue'
export default {
    name: "SideBar",
    setup() {
        const sideBarToggled = inject('sideBarToggled')
        console.log(sideBarToggled)
        return {
            sideBarToggled
        }
    },
    computed: {
        cssProps() {
            return {
                '--slide': this.sideBarToggledf
            }
        },
        sideBarToggledf: function () {
            var slide;
            if (this.sideBarToggled) {
                slide = "0px"
            }
            else {
                slide = "-150px"
            }
            console.log(slide)
            return slide
        }
    },
}
</script>

<style lang="scss" scoped>
    .container {
        width: 45%;
        z-index: 1;
        position: absolute;
        height: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        background-color: var(--primary-color);
        box-shadow: black 2px 2px 15px;
        border-radius: 0px 15px 15px 0px;
        transition-duration: 200ms;
        transform: translateX(var(--slide));
    }
        p {
            color: var(--secondary-color);
            font-size: 25px;
            padding: 20px 0px;
            margin: 0;
        }
        p:hover {
            background-color: var(--primary-color-shade)
        }
@media screen and (min-width: 600px){
    .container {
        transition-duration: 200ms;
        transform:translateX(-150px);
        width: 0px;
    }
}
</style>