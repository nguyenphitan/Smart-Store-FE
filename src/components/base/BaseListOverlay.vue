<template>
    <div @mouseleave="hideThis" id="base-list-overlay">
        <!-- Base list overlay -->
        <div id="list-overlay-container">
            <div class="overlay-item" v-for="(item, key) in data" :key="key">{{item}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'base-list-overlay',
    props: {
        data: {
            type: Array,
            default: new Array()
        },
    },
    methods: {
        hideThis(e) {
            this.$emit('hideThis', e);
        }
    },
}
</script>

<style scoped>
@import url('../../styles/base/listOverlay.css');
</style>