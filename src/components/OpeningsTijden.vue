<template>
    <div class="container">
        <div class="col">
            <Icon icon="carbon:location-filled" />
            <h3>Locatie</h3>
            <div class="text">
                <p><strong>Burgir House</strong></p>
                <p>Johan Huizingalaan 104</p>
                <p>1065 JE Amsterdam</p>
            </div>
        </div>
        <div class="col">
            <Icon icon="carbon-scooter" />
            <h3>Bezorg/Afhaal tijden</h3>
            <div class="content">
                <table>
                    <tr>
                        <td>Maandag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Dinsdag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Woensdag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Donderdag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Vrijdag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Zaterdag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                    <tr>
                        <td>Zondag</td>
                        <td>16:00 - 22:00</td>
                    </tr>
                </table>
            </div>
        </div>
    </div>
</template>

<script>
import {Icon} from '@iconify/vue'
export default {
    name: "OpeningsTijden",
    components: {
        Icon
    }

}
</script>

<style lang="scss" scoped>
    .container {
        padding: 40px;
        background-color: var(--primary-color);
        color: var(--secondary-color);
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
    }

    .text {
        // margin: auto;
    }
    .col {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;
    }
    h3 {
        font-size: 30px;
        line-height: 15px;
        margin-top: 25px;
        margin-bottom: 40px;
    }
    p {
       margin: 0;
    }
    svg {
        width: 32px;
        height: 32px;
    }
</style>
