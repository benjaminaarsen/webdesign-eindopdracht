<template>
    <div class="header">
        <HeaderImage />
        <div class="menu">
            <MenuButton :class="{ active: this.currentMenu==='burger' }" text="Burgirs" icon="mdi:hamburger" @click="handleClick('burger')" />
            <MenuButton :class="{ active: this.currentMenu==='bijgerechten' }" text="Bijgerechten" icon="whh:chicken" @click="handleClick('bijgerechten')" />
            <MenuButton :class="{ active: this.currentMenu==='drank' }" text="Drank" icon="fluent:drink-to-go-24-filled" @click="handleClick('drank')" />
        </div>
    </div>
    <div class="container">
        
        <div class="products">
            <ProductCard v-for="burger in burgers" :key="burger.id" :title="burger.title" :desc="burger.desc" :price="burger.price" :image="burger.image"/>
        </div>
    </div>
</template>

<script>
import HeaderImage from '@/components/HeaderImage.vue'
import MenuButton from '@/components/MenuButton.vue'
import ProductCard from '@/components/ProductCard.vue'
import {ref} from 'vue'
export default {
    name: "Bestellen",
    components: {
        HeaderImage,
        MenuButton,
        ProductCard
    },
    setup() {
        const burgers = [
            {
                title: "Chicken Burgir",
                id: 0,
                desc: "Burgir met krokant gepanneerde kipfilet, uitjes, wortelreepjes en mayonaise.",
                price: "€4.60",
                image: require('../assets/chickenburger.jpg')
            },
            {
                title: "Beef Burgir",
                id: 1,
                desc: "Burgir met perfect gegaarde beef, bacon, sla, augurk en mosterd.", 
                price: "€5.00",
                image: require('../assets/beef burger.jpg')
            },
            {
                title: "Fish Burgir",
                id: 2,
                desc: "Burgir met gegrilde vis, samen met een heerlijke salade en gepekelde komkommers.",
                price: "€5.50",
                image: require('../assets/fish burger.jpeg')
            }
        ]
        const currentMenu = ref('burger')
        const handleClick = (menu) => {
            currentMenu.value = menu;
        }
        return {
            currentMenu, 
            handleClick,
            burgers
        }
    }
}
</script>

<style lang="scss" scoped>
    .container {
        margin: 0 80px;
        transition-duration: 350ms;

    }
        .header {
            clip-path: ellipse(160% 100% at left top);
            overflow: hidden;
        }
    .menu {
        background: var(--primary-color);
        display: flex;
        align-items: center;
    }
    .products {
        padding: 40px;
        display: grid;
        row-gap: 40px;
        grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
    }
    .active {
        color: var(--accent-color);
        cursor: default;
        border-bottom: 2px solid var(--accent-color);
    }
@media screen and (max-width: 1200px) {
    .products {
        grid-template-columns: 1fr 1fr 1fr;
    }
}
@media screen and (max-width: 900px) {
    .products {
        grid-template-columns: 1fr 1fr;
    }
}
@media screen and (max-width: 600px) {
    .container {
        margin: 0;
        // transition-duration: 200ms;
    }
    .button {
        padding: 20px 5px;
        transition-duration: 200ms;
    }
}
</style>
