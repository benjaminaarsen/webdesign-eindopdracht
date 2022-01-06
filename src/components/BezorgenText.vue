<template>
    <div class="content">
        <div class="text">
            <h2>Bezorgen</h2>
            <p>Heeft u even geen tijd om lekker eten op tafel te zetten?
                Dan hebben wij de perfecte oplossing voor u: wij komen 
                de lekkerste burgers van Nederland bij u aan de deur brengen
                op de door u gekozen tijd. Betalen kan veilig en snel met iDeal,
                zodat u niet aan de deur hoeft te betalen. 
            </p>
            <router-link to="/bestellen" class="button">
                <span><Icon icon="ic:outline-restaurant-menu" />Bestellen</span>
            </router-link>
        </div>
        <img src="@/assets/burgers.jpg"/>
        
    </div>
</template>


<script>
import { Icon } from '@iconify/vue'
export default {
    name: "BezorgenText",
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
    .content {
        display: flex;
        padding: 100px 60px;
        flex-direction: row;
        background: var(--primary-color);
        justify-content: space-evenly;
        align-items: center;
        .text {
            text-align: left;
            color: var(--secondary-color);
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
                color: var(--primary-color);
                background-color: var(--secondary-color);
                text-decoration: none;
                border-radius: 10px;
                svg {
                    vertical-align: middle;
                    margin-bottom: 3px;
                    margin-right: 6px;
                }
            }
            a:hover {
                background-color: var(--secondary-color-shade);
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