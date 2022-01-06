<template>
    <div class="container" id="footer">
        <div class="text">
            <p>Disclaimer: <br>Deze website is een project voor school, en is dus niet van een bedrijf. De adres- en contactgegevens moeten dus ook als puur fictief beschouwd worden.</p>
            <span><Icon icon="ant-design:mail-filled" />benjaminaarsen@outlook.com</span>
        </div>
    </div>
</template>

<script>
import {Icon} from '@iconify/vue'
export default {
    name: 'Footer',
    components: {
        Icon
    }
}
</script>

<style lang="scss" scoped>
    .container {
        background-color: var(--primary-color);
        color: var(--secondary-color);
        padding: 20px;
        .text {
            margin-top: 150px;
            p {
                text-align: center;
                font-size: 15px;
            }
            span {
                color: white;
                font-weight: 500;
                padding: 10px 5px;
                svg {
                    margin-right: 5px;
                    vertical-align: middle;
                    margin-bottom: 3px;
                }
            }
        }
    }
</style>