<template>
    <div class="over-ons">
        <h1>Over ons</h1>
        <div class="text">
            <article>
                <p>
                    Wij zijn Burgir House, het lekkerste burgerrestaurant van Nederland, in 2018 hebben we ons restaurant geopend
                    en sindsdien zijn we veel gegroeid. We hopen met uw hulp, ondanks de huidige moeilijke tijden, binnenkort meerdere
                    locaties te openen zodat over in Nederland van onze burgers genoten kan worden. De betreffende locaties zijn: 
                </p>
                <ul>
                    <li>Amersfoort</li>
                    <li>Rotterdam</li>
                    <li>Den Haag</li>
                </ul>
                <p>
                    Andere locaties zullen natuurlijk ook in rekening genomen worden, reageer op onze twitter poll met uw locatie.
                    Dan kunnen wij beter inschatten waar we het hardst nodig zijn!
                </p>
                <a href="https://twitter.com" target="_blank"><Icon icon="akar-icons:twitter-fill" />Bezoek onze twitter pagina</a>
            </article>
            <article>
                <h3>U vraagt zich vast af: hoe komen we aan de naam Burgir House?. De volgende video verklaart alles:</h3>
                <iframe width="535" height="300" src="https://www.youtube.com/embed/yjNcXPtNQdE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </article>
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
    name: "Over Ons",
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
    h1 {
        color: var(--primary-color);  
    }
    .over-ons {
        background: var(--secondary-color-shade);
    }
     .text {
            color: var(--secondary-color);
            display: grid;
            padding: 10px 50px;
            grid-template-columns: 1fr 1fr;
            grid-column-gap: 80px;
            justify-content: center;
            // align-items: center;

        }
        article {
            margin-bottom: 150px;
            background-color: var(--primary-color);
            border-radius: 30px;
            padding: 10px 40px;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            display: flex;
        }
            li {
                font-weight: 500;
            }
            iframe {
                width: 535px;
            }
            a {
                font-weight: 500;
                text-decoration: none;
                width: 50%;
                color: var(--secondary-color);
                padding: 10px 15px;
                background-color: var(--primary-color);
                border-radius: 10px;
            }
                svg {
                    vertical-align: middle;
                    margin-bottom: 3px;
                    margin-right: 4px;
                }
            a:hover {
                cursor: pointer;
                background-color: var(--primary-color-shade);
            }
@media screen and (max-width: 1200px) {
    .text {
        padding: 10px 40px;
        text-align: center;
        grid-template-columns: 1fr;
        margin: 0 100px;
    }
}
@media screen and (max-width: 600px) {
    .text {
        margin: 0;
        padding: 10px 0;
    }
        iframe {
            width: 100%;
        }
        article {
            width: 80%;
        }


}
</style>