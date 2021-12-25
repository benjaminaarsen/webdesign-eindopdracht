<template>
    <div class="header">
        <HeaderImage />
        <div class="menu">
            <MenuButton :class="{ active: this.currentMenu==='burger' }" text="Burgers" icon="mdi:hamburger" @click="handleClick('burger')" />
            <MenuButton :class="{ active: this.currentMenu==='bijgerechten' }" text="Bijgerechten" icon="whh:chicken" @click="handleClick('bijgerechten')" />
            <MenuButton :class="{ active: this.currentMenu==='drank' }" text="Drank" icon="fluent:drink-to-go-24-filled" @click="handleClick('drank')" />
        </div>
    </div>
    <div class="container">
        
        <div class="products">
            <ProductCard />
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
        const currentMenu = ref('burger')
        const handleClick = (menu) => {
            currentMenu.value = menu;
        }
        return {
            currentMenu, 
            handleClick
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
        // color: var(--secondary-color);
        display: flex;
        align-items: center;
    }
    .products {
        padding: 40px;
    }
    .active {
        color: var(--accent-color);
        cursor: default;
        border-bottom: 2px solid var(--accent-color);
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
