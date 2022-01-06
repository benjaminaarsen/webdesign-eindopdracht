<template>
    <div class="content">
        <div class="text">
            <h2>Afhalen</h2>
            <p>Ook is het mogelijk om de bestelling bij ons af te halen.
                Bestel het eten online en wij zullen het klaar hebben staan op
                het door u gekozen tijdstip. Betalen kan online via iDeal, of bij ons
                in de winkel.
            </p>
            <router-link to="/bestellen" class="button">
                <span><Icon icon="ic:outline-restaurant-menu" />Bestellen</span>
            </router-link>
        </div>
        <img src="@/assets/Burger.png"/>
        
    </div>
</template>


<script>
import { Icon } from '@iconify/vue'
export default {
    name: "AfhalenText",
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        padding: 100px 60px;
        flex-direction: row-reverse;
        background: var(--secondary-color);
        justify-content: space-evenly;
        align-items: center;
        .text {
            text-align: left;
            color: var(--primary-color);
            padding: 20px;
            width: 40vw;
            h2 {
                font-size: 50px;
                line-height: 20px;
            }
            p {
                margin-bottom: 50px;
                overflow: wrap;
            }
            a {
                padding: 10px 20px;
                margin-bottom: 40px;
                color: var(--secondary-color);
                background-color: var(--primary-color);
                text-decoration: none;
                border-radius: 10px;
                svg {
                    vertical-align: middle;
                    margin-bottom: 3px;
                    margin-right: 6px;
                }
            }
            a:hover {
                background-color: var(--primary-color-shade);
                cursor: pointer;
            }
        }
        img {
            object-fit: contain;
            height: 30vh;
        }
    }
    
@media screen and (max-width: 800px) {
    .content {
        flex-direction: column;
        .text {
            width: 60vw;
            text-align: center;
        }
        img {
            margin-top: 20px;
            width: 90vw;
        }
    }
        
    
}
</style>