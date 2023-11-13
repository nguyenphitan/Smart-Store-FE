<template>
    <div id="base-list-category">
        <!-- Begin container -->
        <div id="base-list-category-container">
            <base-category-item
                v-for="(item, index) in listCategory"
                :key="index"
                :name="item.name"
                :imgSrc="item.imgSrc"
            ></base-category-item>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseCategoryItem from '../BaseCategoryItem.vue'

export default {
    name: 'base-list-category',
    components: {
        BaseCategoryItem,
    },
    props: {
        listCategory: {
            type: Array,
            default: new Array()
        },
    },

}
</script>

<style>
@import url('../../../styles/base/admin/listCategory.css');
</style>