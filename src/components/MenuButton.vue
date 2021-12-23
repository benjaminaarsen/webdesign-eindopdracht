<template>
    <div class="button">
        <span><Icon :icon="icon" />{{ text }}</span>
        <div class="dropdown">
        </div>
    </div>
</template>

<script>
import { Icon } from '@iconify/vue'
export default {
    name: 'MenuButton',
    props: {
        text: String,
        icon: String
    },
    components: {
        Icon
    }
}
</script>
<style lang="scss" scoped>
        .button {
            color: var(--primary-color);
            display: flex;
            text-align: center;
            display: flex;
            padding: 5px 10px;
            width: fit-content;
            align-items: center; 
        }
            span {
                display: flex;
                align-items: center;
            }
                svg {
                    margin-right: 5px;
                }
        .button:hover {
            color: var(--accent-color);
            cursor: pointer;
            border-bottom: 2px solid var(--accent-color);
        }
</style>