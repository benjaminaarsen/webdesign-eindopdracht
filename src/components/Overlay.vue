<template>
    <div class="overlay" :style="cssProps()"/>
</template>

<script>
export default {
    name: "Overlay",
    props: {
        opacity: Number
    },
    setup(props) {
        console.log(props.opacity)
        const cssProps = () => {
            if (props.opacity !== 0) {
                return {
                '--opacity': props.opacity,
                '--display': "initial"
                }
            }
            else {
                return {
                    '--opacity': props.opacity,
                    '--display': 'none'
                }
            }
            
        }
        return {
            cssProps
        }
    }
}
</script>

<style lang="scss" scoped>
    .overlay {
        opacity: var(--opacity);
        display: var(--display);
        position: fixed;
        background: black;
        z-index: 1;
        width: 100%;
        height: 100%;
    }
</style>