<template>
    <div @mouseenter="showDeleteCategoryIcon(id)" 
        @mouseleave="hideDeleteCategoryIcon(id)" 
        id="base-category-item">
        <!-- Container -->
        <div id="category-item-container" 
            class="t-align-center t-pointer"
            style="background-color: #fff; box-shadow: rgba(3, 0, 71, 0.09) 0px 1px 3px; display: inline-flex; padding: 12px;
            border-radius: 8px; width: 180px; margin: 12px;">
            <span><img :src="require('@/assets/imgs/' + imgSrc)" alt="category image" width="20px"></span>
            <div class="category-item-name" style="font-size: 14px; font-weight: 600; margin-left: 10px;">{{ name }}</div>
            <i @click="deleteCategory(id)" :class="'delete-category-' + id" class="delete-category fa-solid fa-xmark"></i>
        </div> 
        <!-- End Container -->
    </div>
</template>

<script>
import axios from 'axios';

export default {
    name: 'base-category-item',
    props: {
        id: {
            type: Number,
            default: 1
        },
        imgSrc: {
            type: String,
            default: 'urus.webp'
        },
        name: {
            type: String,
            default: 'Mobile Phone'
        },
    },
    methods: {
        // Show delete category icon
        showDeleteCategoryIcon(id) {
            let categoryQuery = '#base-list-category-container #base-category-item .delete-category-' + id;
            let iconDelete = document.querySelector(categoryQuery);
            iconDelete.style.display = 'block';
        },
        // End show delete category icon

        // hide delete category icon
        hideDeleteCategoryIcon(id) {
            let categoryQuery = '#base-list-category-container #base-category-item .delete-category-' + id;
            let iconDelete = document.querySelector(categoryQuery);
            iconDelete.style.display = 'none';
        },
        // End hide delete category icon

        // Click delete category
        deleteCategory(id) {
            if(confirm("If you delete this category, all products in the category will also be deleted. Are you sure?")) {
                axios
                    .delete(`http://localhost:8080/api/v1/category/${id}`)
                    .then((response) => {
                        console.log('Delete success!');
                        console.log(response);
                        window.location.reload();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
        },
        // End click delete category
    },

}
</script>

<style scoped>
#category-item-container {
    position: relative;
}

.delete-category {
    position: absolute;
    top: 0;
    right: 0;
    padding: 8px;
    color: #ccc;
    display: none;
    /* opacity: 0;
    pointer-events: none; */
}

.delete-category:hover {
    color: #9a9999;
}
</style>