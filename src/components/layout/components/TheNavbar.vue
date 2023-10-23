<template>
    <div id="the-navbar">
        <!-- The navbar -->
        <div id="the-navbar-container">
            <base-category-card 
                v-for="(item, key) in data" :key="key" 
                :cardName="item.name"
                :iconClassLeft="item.iconClassLeft"
                :extendIcon="item.extendIcon"
            ></base-category-card>
        </div>
    </div>
</template>

<script>
import BaseCategoryCard from '../../base/BaseCategoryCard.vue'

export default {
    name: 'the-navbar',
    components: {
        BaseCategoryCard
    },
    props: {
        data: {
            type: Array,
            default: new Array()
        }
    }

}
</script>

<style scoped>
@import url('../../../styles/layout/navbar.css');
</style>