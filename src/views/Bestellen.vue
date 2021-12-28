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
        
        <div class="products" v-if="this.currentMenu === 'burger'">
            <ProductCard v-for="burger in burgers" :key="burger.id" :title="burger.title" :desc="burger.desc" :price="burger.price" :image="burger.image"/>
        </div>
        <div class="products" v-if="this.currentMenu === 'bijgerechten'">
            <ProductCard v-for="bijgerecht in bijgerechten" :key="bijgerecht.id" :title="bijgerecht.title" :desc="bijgerecht.desc" :price="bijgerecht.price" :image="bijgerecht.image" />
        </div>
        <div class="products" v-if="this.currentMenu === 'drank'">
            <ProductCard v-for="drank in dranken" :key="drank.id" :title="drank.title" :desc="drank.desc" :price="drank.price" :image="drank.image" />
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
                image: require('@/assets/chickenburger.jpg')
            },
            {
                title: "Beef Burgir",
                id: 1,
                desc: "Burgir met perfect gegaarde beef, bacon, sla, augurk en mosterd.", 
                price: "€5.00",
                image: require('@/assets/beef burger.jpg')
            },
            {
                title: "Fish Burgir",
                id: 2,
                desc: "Burgir met gegrilde vis, samen met een heerlijke salade en gepekelde komkommers.",
                price: "€5.50",
                image: require('@/assets/fish burger.jpeg')
            }
        ]
        const bijgerechten = [
            {
                title: "Patat",
                id: 0,
                desc: "Heerlijke friet van eigen aardappels",
                price: "€2.00",
                image: require("@/assets/patat.jpg")
            },
            {
                title: "Chicken Wings",
                id: 1,
                desc: "Heerlijk gekruide kipvleugeltjes in BBQ saus.",
                price: "€2.50",
                image: require("@/assets/chickenwings.jpg")
            },
            {
                title: "Aardappelschijfjes",
                id: 2,
                desc: "Aardappelschijfjes met lekkere kruiden en saus naar keuze.",
                price: "€3.00",
                image: require("@/assets/aardappelschijfjes.jpg")
            }
        ]
        const dranken = [
            {
                title: "Cola 25cl",
                id: 0,
                desc: "Cola 25cl",
                price: "€1.60",
                image: require("@/assets/cola.png")
            },
            {
                title: "Fanta 25cl",
                id: 1,
                desc: "Fanta 25cl",
                price: "1.60",
                image: require("@/assets/fanta.png")
            },
            {
                title: "Cassis 25cl",
                id: 2,
                desc: "Cassis 25cl",
                price: "1.60",
                image: require("@/assets/cassis.png")
            }
        ]
        const currentMenu = ref('burger')
        const handleClick = (menu) => {
            currentMenu.value = menu;
        }
        return {
            currentMenu, 
            handleClick,
            burgers,
            bijgerechten,
            dranken
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
        gap: 40px;
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
        padding: 20px;
    }
}
@media screen and (max-width: 600px) {
    .menu {
        justify-content: space-evenly;
    }
    .products {
        padding: 10px;
        gap: 20px;
    }
    .header {
        clip-path: none;
    }
    .container {
        margin: 0;
        // transition-duration: 200ms;
    }
    .button {
        padding: 15px 5px;
        transition-duration: 200ms;
        margin: 10px 0;
    }
}
</style>
