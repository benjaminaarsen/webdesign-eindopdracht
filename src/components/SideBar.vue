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
export default {
    name: "SideBar",
    inject: ["width"],
    computed: {
        cssProps() {
            return {
                '--container-width':  this.width
            }
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        width: var(--container-width);
        z-index: 1;
        position: absolute;
        height: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
        background-color: var(--primary-color);
        box-shadow: black 2px 2px 15px;
        border-radius: 15px;
        margin-left: -20px;
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
</style>