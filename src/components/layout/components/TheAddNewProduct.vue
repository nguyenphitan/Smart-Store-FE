<template>
    <div id="the-add-new-product">
        <form>
            <!-- Left -->
            <div class="product-img">
                <input type="file" name="product-img">
                <div class="show-img">
                    <!-- <img src="" alt=""> -->
                </div>
            </div>

            <!-- Right -->
            <div class="product-info">
                <p>Name:</p>
                <input class="product-name" type="text" name="product-name">
                <br>
                <p>Price:</p>
                <input class="product-price" type="number" name="product-price">
                <br>
                <p>Inventory:</p>
                <input class="product-quantity" type="number" name="product-quantity">
                <br>
                <p>Category:</p>
                <div class="div-category-save">
                    <select class="product-category" name="product-category">
                        <option value="Air Pods">Air Pods</option>
                        <option value="Smart Watch">Smart Watch</option>
                    </select>
                    <button class="save-new-product" type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
export default {
    name: 'add-new-product'
}
</script>

<style>
@import url('../../../styles/layout/addNewProduct.css');
</style>