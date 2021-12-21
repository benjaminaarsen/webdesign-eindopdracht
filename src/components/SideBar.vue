<template>
    <div class="container">
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
    </div>
</template>


<script>
export default {
    name: "SideBar"
}
</script>

<style lang="scss" scoped>
    .container {
        width: 20vw;
        position: absolute;
        height: 100%;
        overflow: auto;
        margin: 0;
        padding: 0;
    }
</style>