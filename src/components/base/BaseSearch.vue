<template>
    <div id="base-search">
        <!-- Base search -->
        <div id="search-container">
            <i class="fa-solid fa-magnifying-glass search-icon"></i>
            <input class="t-input-search" @keyup="searchProductByName" type="text" placeholder="Search and hit enter ...">
            <div class="category-search"> 
                <span>All Categories </span> 
                <!-- <i class="fa-solid fa-chevron-down"></i>  -->
            </div>
            <base-list-header class="category-list" :data="data"></base-list-header>
            <div class="t-search-result">
                <div 
                    @click="viewDetailResult(product.id)"
                    class="t-result-item"
                    v-for="(product, index) in searchResult"
                    :key="index"
                >
                    {{ product.name }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios';
import BaseListHeader from './BaseListHeader.vue';

export default {
    name: 'base-search',
    components: {
        BaseListHeader,
    },
    data() {
        return {
            data: ['All Categories', 'Car', 'Clothes', 'Electronics', 'Laptop'],
            searchResult: [],
        }
    },
    methods: {
        // Search product by name:
        searchProductByName(e) {
            let me = this;
            let search = e.target.value;
            if(search == '') {
                me.searchResult = [];
                return;
            }

            console.log(search);
            axios
                .get(`http://localhost:8080/api/v1/products?search=${search}&size=6`)
                .then((response) => {
                    me.searchResult = response.data.content;
                })
                .catch((reject) => {
                    alert("Search product fail!");
                    console.log(reject);
                });
        },

        // View detail search result:
        viewDetailResult(id) {
            console.log(id);
            document.querySelector("#base-search .t-input-search").value = '';
            this.searchResult = [];
            this.$router.push(`/details/${id}`);
        },
    },


}
</script>

<style scoped>
@import url('../../styles/base/search.css');
</style>