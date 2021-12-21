<template>
    <div class="header">
        <div class="logo">
            <img class="logoimg" src="../assets/logo.png">
        </div>
        <div class="menu-button">
            <Icon icon="bx:bx-menu" width="30"/>
        </div>
        <div class="sidebar-button">
        </div>
        <div class="headermenu">
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
                <router-link to="/contact" class="button">
                    <p>Contact</p>
                </router-link>
            </div>
        </div>
    </div>
    <div class="header-curve"/>
</template>


<script>
import { Icon } from '@iconify/vue';

export default {
    name: "Menu",
    components: {
        Icon
    }
}
</script>

<style scoped lang="scss">
    .header-curve {
        width: 100%;
        background: var(--primary-color);
        height: 50vh;
        top: -15vh;
        left: 0;
        right: 0;
        bottom: auto;
        border-radius: 50%;
        transform: scale(1.4);
        position: fixed;
        z-index: -1;
    }
    .header {
        display: flex;
        background-color: var(--primary-color);
        padding: 10px 0px;
        }
        .logo {
            display: flex;
            justify-content: center;
            align-items: center;

        }
            .logoimg {
                width: 90px;
                }
        svg[class*="iconify iconify--bx"] {
            display:none;
        }
        .headermenu {
            display: flex;
            margin: 0px auto;

        }
            .buttons {
                display: flex;
                margin-left: -90px;
                align-items: center;
                justify-content: space-between;
            }
                .button {
                    display: flex;
                    text-decoration: none;
                    align-items: center;
                    cursor: pointer;
                    padding: 0px 20px;
                    height: 100%;
                }
                .button:hover {
                    background-color: var(--primary-color-shade);
                }
                .button:active {
                    color: red;
                }
                    p {
                            color: var(--secondary-color);
                            font-size: 20px;
                            margin: 0px 0px;
                        }

@media screen and (max-width: 600px){

    .logo {
        display: none;
    }
    .menu-button {
        display: flex;
        align-items: center;
        justify-content: center;
    }
    svg[class*="iconify iconify--bx"] {
        display: inline-block;
        position: relative;
        height: 100%;
        visibility: visible;
        margin: 15px 20px;
        color: var(--secondary-color);

    }
    .menu-button:hover {
        cursor: pointer;
        background-color: var(--primary-color-shade);
    }
    .headermenu {
        display: none;
    }

    p {
        font-size: 15px;
    }
}

</style>