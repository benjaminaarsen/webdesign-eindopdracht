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
        const cssProps = () => {
            if (props.opacity !== 0) { //als de opacity niet 0 is, dus we willen dat hij zichtbaar is, moet het display normaal zijn
                return {
                '--opacity': props.opacity,
                '--display': "initial"
                }
            }
            else {
                return {
                    '--opacity': props.opacity, //als de opacity wel 0 is, en we willen hem dus niet zien, moet display op none want anders is er interferentie met andere elementen
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