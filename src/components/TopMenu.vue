<template>
    <div class="header">
        <div class="logo">
            <img class="logoimg" src="../assets/logo.png">
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
                <a href="#footer" class="button">
                    <p>Contact</p>
                </a>
            </div>
        </div>
    </div>
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
    .header {
        position: relative;
        width: 100%;
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
                    color: var(--secondary-color);

                }
                .button:hover {
                    background-color: var(--primary-color-shade);
                }
                    p {
                            font-size: 20px;
                            font-weight: 500;
                            margin: 0px 0px;
                        }
                .router-link-exact-active {
                    color: var(--accent-color);
                    border-bottom: 2px solid var(--accent-color);
                }

@media screen and (max-width: 600px){
    .header {
        height: 60px;
        padding: 0px 0px;
    }

    .logo {
        display: none;
    }
    .headermenu {
        display: none;
    }

    p {
        font-size: 15px;
    }
}

</style>