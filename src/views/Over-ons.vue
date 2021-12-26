<template>
    <div class="over-ons">
        <img src="@/assets/main-image.jpg" />
        <div class="text">
            <h1>Over ons</h1>
            <p>
                Wij zijn burgir house, het lekkerste burgerrestaurant van Nederland, in 2018 hebben we ons restaurant geopend
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
            <a href="https://twitter.com" target="_blank">Bezoek onze twitter pagina</a>
        </div>
    </div>
</template>

<script>
export default {
    name: "Over Ons"
}
</script>

<style lang="scss" scoped>
    .over-ons {
        padding: 50px;
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        background: var(--primary-color);
    }
        img {
            height: 250px;
        }
        .text {
            color: var(--secondary-color);
            text-align: left;
            padding: 10px 100px;
        }
            li {
                font-weight: 500;
            }
            a {
                font-weight: 500;
                text-decoration: none;
                color: var(--primary-color);
                padding: 10px 15px;
                background-color: var(--secondary-color);
                border-radius: 10px;
            }
            a:hover {
                cursor: pointer;
                background-color: var(--secondary-color-shade);
            }
@media screen and (max-width: 1200px) {
    .over-ons {
        flex-direction: column;
    }
        .text {
            padding: 10px 40px;
            text-align: center;
        }
}
</style>