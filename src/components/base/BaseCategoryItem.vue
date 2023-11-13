<template>
    <div id="base-category-item">
        <!-- Container -->
        <div id="category-item-container" 
            class="t-align-center t-pointer" 
            style="background-color: #fff; box-shadow: rgba(3, 0, 71, 0.09) 0px 1px 3px; display: inline-flex; padding: 12px;
            border-radius: 8px; width: 180px; margin: 12px;">
            <span><img :src="require('@/assets/imgs/' + imgSrc)" alt="category image" width="52px"></span>
            <div class="category-item-name" style="font-size: 14px; font-weight: 600; margin-left: 10px;">{{ name }}</div>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
export default {
    name: 'base-category-item',
    props: {
        imgSrc: {
            type: String,
            default: 'urus.webp'
        },
        name: {
            type: String,
            default: 'Mobile Phone'
        },
    }

}
</script>

<style>
</style>