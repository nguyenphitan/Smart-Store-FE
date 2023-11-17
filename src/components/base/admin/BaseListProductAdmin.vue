<template>
    <div id="base-list-product-admin" style="height: 600px; overflow: scroll;">
        <!-- Container -->
        <div id="product-admin-container">
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
                :editEvent="editEvent"
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
}
</script>

<style>

</style>