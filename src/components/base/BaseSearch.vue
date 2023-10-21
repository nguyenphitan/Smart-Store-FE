<template>
    <div id="base-search">
        <!-- Base search -->
        <div id="search-container">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input type="text" placeholder="Search and hit enter ...">
            <div class="category-search"> 
                <span>All Categories </span> 
                <i class="fa-solid fa-chevron-down"></i> 
            </div>
            <base-list-header class="category-list" :data="data"></base-list-header>
        </div>
    </div>
</template>

<script>
import BaseListHeader from './BaseListHeader.vue';

export default {
    name: 'base-search',
    components: {
        BaseListHeader,
    },
    data() {
        return {
            data: ['All Categories', 'Car', 'Clothes', 'Electronics', 'Laptop'],
            
        }
    },


}
</script>

<style scoped>
@import url('../../styles/base/search.css');
</style>