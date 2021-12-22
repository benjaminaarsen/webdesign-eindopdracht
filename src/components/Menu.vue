<template>
    <div class="menu-button" @click="handleButtonClick">
        <Icon icon="bx:bx-menu" width="30"/>
    </div>
    <SideMenu :slide="slide" @click="handleOverlayClick"/>
    <Overlay :opacity="opacity" @click="handleOverlayClick"/>
    <TopMenu />
</template>

<script>
import TopMenu from './TopMenu.vue'
import SideMenu from './SideMenu.vue'
import Overlay from './Overlay.vue'
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
export default {
    components: {
        TopMenu,
        SideMenu,
        Icon,
        Overlay
    },
    mounted() {
        window.addEventListener('resize', this.sizeListener)
    },
    setup() {
        var showSideBar = false;
        var opacity = ref(0)
        const slide = ref("-450px")
        const sizeListener = () => {
            if (visualViewport.width > 600) {
                showSideBar = false
                slide.value = "-450px"
                opacity.value = 0;
            }
           
        }
        
        const handleButtonClick = () => {
            showSideBar = !showSideBar
            if (showSideBar) {
                opacity.value = 0;
                slide.value = "0px"
                opacity.value = 0.5;
            }
            else {
                slide.value = "-450px"
                opacity.value = 0;
            }
        }

        const handleOverlayClick = () => {
            showSideBar = false
            opacity.value = 0;
            slide.value = "-450px"
        }

        return {
            handleButtonClick,
            handleOverlayClick,
            sizeListener,
            slide,
            opacity
        }
    }
}
</script>

<style lang="scss" scoped>
    .menu-button {
        display: none;
        z-index: 2;
    }
    TopMenu {
        z-index: 0
    }
    SideMenu {
        z-index: 1
    }
@media screen and (max-width: 600px){
    .overlay {
        position: absolute;
        width: 100%;
        height: 100%;
    }
    .menu-button {
        position: fixed;
        display: flex;
        align-items: center;
        justify-content: flex-start;
    }
    svg[class*="iconify iconify--bx"] {
        height: 100%;
        visibility: visible;
        margin: 15px 20px;
        color: var(--secondary-color);

    }
    .menu-button:hover {
        cursor: pointer;
        background-color: var(--primary-color-shade);
    }
}
</style>