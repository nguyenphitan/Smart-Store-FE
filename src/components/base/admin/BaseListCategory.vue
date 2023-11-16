<template>
    <div id="base-list-category">
        <!-- Begin container -->
        <div id="base-list-category-container">
            <!-- List -->
            <base-category-item
                v-for="(item, index) in listCategory"
                :key="index"
                :id="item.id"
                :name="item.name"
                :imgSrc="item.imgSrc"
            ></base-category-item>
            <!-- End list -->

            <!-- Add category -->
            <div class="add-new-category t-flex t-align-center t-justify-center t-pointer"
                style="background-color: #fff; box-shadow: rgba(3, 0, 71, 0.09) 0px 1px 3px; 
                display: inline-flex; padding: 12px;
                border-radius: 8px; width: 180px; margin: 12px;"
                @click="openAddNewCategory"
            >
                <i style="font-size: 20px; font-weight: 600;" class="fa-solid fa-plus"></i>
            </div>
            <!-- End Add category -->
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
    methods: {
        // Open popup add new category
        openAddNewCategory() {
            let theAddNewCategory = document.querySelector('.admin-context-view #the-add-category');
            theAddNewCategory.style.opacity = '1';
            theAddNewCategory.style.pointerEvents = 'all';
        },
        // End open popup add new category
    },

}
</script>

<style>
@import url('../../../styles/base/admin/listCategory.css');
</style>