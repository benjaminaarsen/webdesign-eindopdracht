<template>
    <div class="container">
        <HeaderImage />
        <div class="menu">
            <MenuButton :class="{ active: this.currentMenu==='burger' }" text="Burgers" icon="mdi:hamburger" @click="handleClick('burger')" />
            <MenuButton :class="{ active: this.currentMenu==='bijgerechten' }" text="Bijgerechten" icon="whh:chicken" @click="handleClick('bijgerechten')" />
            <MenuButton :class="{ active: this.currentMenu==='drank' }" text="Drank" icon="fluent:drink-to-go-24-filled" @click="handleClick('drank')" />
        </div>
    </div>
</template>

<script>
import HeaderImage from '@/components/HeaderImage.vue'
import MenuButton from '@/components/MenuButton.vue'
import {ref} from 'vue'
export default {
    name: "Bestellen",
    components: {
        HeaderImage,
        MenuButton
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
    }
    .menu {
        background: var(--secondary-color);
        display: flex;
    }
    .active {
        color: var(--accent-color);
        cursor: default;
        border-bottom: 2px solid var(--accent-color);
    }
</style>
