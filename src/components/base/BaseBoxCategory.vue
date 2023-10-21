<template>
    <div id="base-box-category">
        <!-- Base box category -->
        <div id="box-category-container">
            <img v-bind:src="imgURL" alt="category image">
            <div class="category-name">{{categoryName}}</div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'box-category',
    props: {
        imgURL: {
            type: String,
            default: require('@/assets/imgs/12.webp')
        },
        categoryName: {
            type: String,
            default: 'Watch'
        }
    }
}
</script>

<style scoped>
@import url('../../styles/base/boxCategory.css');
</style>