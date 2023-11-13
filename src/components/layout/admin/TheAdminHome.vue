<template>
    <div id="the-admin">
        <!-- Begin container -->
        <div id="admin-container">
            <!-- Begin Navbar left -->
            <div class="admin-nav">
                <!-- Category -->
                <div class="manager-category">
                    <h5>Categories</h5>
                </div>
                <!-- End category -->

                <!-- Product -->
                <div class="manager-product">
                    <h5>Products</h5>
                </div>
                <!-- End product -->

                <!-- Product -->
                <div class="manager-order">
                    <h5>Orders</h5>
                </div>
                <!-- End product -->



                <!-- Discount -->
                <!-- End Discount -->
                <!-- ... -->
            </div>
            <!-- End Navbar left -->

            <!-- Begin view right -->
            <div class="admin-context-view">
                <base-list-category :listCategory="listCategory"></base-list-category>
            </div>
            <!-- End view right -->
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseListCategory from '@/components/base/admin/BaseListCategory.vue'
import axios from 'axios';

export default {
    name: 'the-admin',
    components: {
        BaseListCategory,
    },

    beforeCreate() {
        // Get all category
        let me = this;

        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                console.log(response.data);
                me.listCategory = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
    },
    
    data() {
        return {
            listCategory: [
                {name: 'Car', imgSrc: 'urus.webp'},
                {name: 'Mobile Phone', imgSrc: '30.webp'},
            ]
        }
    },
    


}
</script>

<style>
@import url('../../../styles/layout/admin/adminHone.css');
</style>