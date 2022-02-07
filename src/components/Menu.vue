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
        window.addEventListener('resize', this.sizeListener) //elke keer als het scherm resized wordt word de functie sizeListener getriggerd
    },
    setup() {
        var showSideBar = false; //de sidebar wordt standaard niet gedisplayd
        var opacity = ref(0) //de opacity staat op 0 (ref betekent dat de waarde reactive is https://v3.vuejs.org/api/refs-api.html)
        const slide = ref("-450px") //side staat standaard op -450px, wat buiten het viewport is. Je ziet het dus niet
        const sizeListener = () => { //deze functie staat er zodat wanneer het venster weer groot gemaakt wordt, de sidebar automatisch verdwijnt
            if (visualViewport.width > 600) {
                showSideBar = false
                slide.value = "-450px"
                opacity.value = 0;
            }
           
        }
        
        const handleButtonClick = () => { //wanneer er er op een sidebar knopje geklikt word. (zodat na het klikken de sidebar verdwijnt)
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

        const handleOverlayClick = () => { //wanneer er naast de sidebar geklikt wordt. Dit werkt sluit de sidebar ook.
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
            svg {
                height: 100%;
                visibility: visible;
                margin: 15px 20px;
                filter: drop-shadow(0px 0px 3px black);
                color: var(--secondary-color);
            }
        }
        .menu-button:hover {
            cursor: pointer;
        }
    }
</style>