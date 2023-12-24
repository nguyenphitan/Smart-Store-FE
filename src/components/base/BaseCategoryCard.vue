<template>
    <div @click="filterByCategory($event, categoryId)" id="base-category-card">
        <!-- Base category card -->
        <div id="category-card-container" class="category-card-container">
            <div class="category-summary">
                <img :src="require('@/assets/imgs/' + imgSrc)" alt="category image" width="20px">
                <div class="category-card-name">{{cardName}}</div>
            </div>
            <i v-if="extendIcon" :class="iconClassRight"></i>
        </div>
    </div>
</template>

<script>
export default {
    name: 'base-category-card',
    props: {
        imgSrc: {
            type: String,
            default: 'all.jpg'
        },
        cardName: {
            type: String,
            default: 'Electronics'
        },
        extendIcon: {
            type: Boolean,
            default: true
        },
        iconClassRight: {
            type: String,
            default: 'fa-solid fa-chevron-right'
        },
        categoryId: {
            type: Number,
            default: 1
        },
    },

    methods: {
        // Filter product by category:
        filterByCategory(e, categoryId) {
            this.$emit("filterByCategory", e, categoryId);
        }
    },

}
</script>

<style scoped>
@import url('../../styles/base/categoryCard.css');
</style>