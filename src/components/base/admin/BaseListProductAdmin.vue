<template>
    <div id="base-list-product-admin" style="height: 600px; overflow: scroll;">
        <!-- Container -->
        <div id="product-admin-container">
            <div class="btn-add-new-product">
                <router-link to="/add-new-product" class="add-new-page" >Add New</router-link>
            </div>
            <base-admin-product-row
                v-for="(product, index) in listProduct"
                :key="index"
                :id="product.id"
                :name="product.name"
                :imgSrc="product.photos"
                :category="product.category.name"
                :categoryId="product.category.id"
                :quantity="product.quantity"
                :price="product.price"
                :discount="product.discount"
                @reloadPage="reloadPage"
            >
            </base-admin-product-row>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
import BaseAdminProductRow from './BaseAdminProductRow.vue';

export default {
    name: 'base-product-admin',
    components: {
        BaseAdminProductRow,
    },
    props: {
        listProduct: {
            type: Array,
            default: new Array()
        },
    },
    methods: {
        reloadPage(e) {
            this.$emit("reloadPage", e);
        }
    },
}
</script>

<style scoped>
.btn-add-new-product {
    display: flex;
    justify-content: right;
}

.btn-add-new-product .add-new-page {
    padding: 8px 12px;
    background-color: rgb(233, 69, 96);
    color: white;
    border-radius: 8px;
    margin-right: 16px;
    margin-top: 16px;
}
</style>