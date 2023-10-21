<template>
    <div id="base-category-card">
        <!-- Base category card -->
        <div id="category-card-container">
            <div class="category-summary">
                <i :class="iconClassLeft"></i>
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
        cardName: {
            type: String,
            default: 'Electronics'
        },
        iconClassLeft: {
            type: String,
            default: 'fa-solid fa-laptop-medical'
        },
        extendIcon: {
            type: Boolean,
            default: true
        },
        iconClassRight: {
            type: String,
            default: 'fa-solid fa-chevron-right'
        }
    }

}
</script>

<style scoped>
@import url('../../styles/base/categoryCard.css');
</style>