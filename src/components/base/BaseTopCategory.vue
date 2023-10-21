<template>
    <div id="base-top-category">
        <!-- Top category card -->
        <div id="top-category-container">
            <div class="category-name">{{categoryName}}</div>
            <div class="order-quantity">{{orderQuantity}} orders this week</div>
            <img class="category-img" v-bind:src="imgURL" alt="top category">
            <div class="bg-overlay"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'top-category-card',
    props: {
        orderQuantity: {
            type: String,
            default: '3k'
        },
        categoryName: {
            type: String,
            default: 'Watch'
        },
        imgURL: {
            type: String,
            default: require('@/assets/imgs/category-2.webp')
        }
    }
}
</script>

<style scoped>
@import url('../../styles/base/topCategory.css');
</style>