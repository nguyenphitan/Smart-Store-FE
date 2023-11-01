<template>
    <div id="the-detail">
        <!-- Top -->
        <div class="order-step">
            <div class="step-add">1. Cart</div>
            <div class="step-detail">2. Details</div>
            <div class="step-payment">3. Payment</div>
            <div class="step-review">4. Review</div>
        </div>

        <!-- Bottom -->
        <div class="product-detail">
            <!-- Image -->
            <div class="product-img">
                <!-- Big image -->
                <div class="big-img"></div>

                <!-- Small image -->
                <div class="small-img"></div>
            </div>

            <!-- Information -->
            <div class="product-info">
                <h2 class="product-name">Lord 2019</h2>
                <div class="product-category">Category: <span style="font-weight: bold;">Smart Watch</span> </div>
                <div class="product-rated">Rated:</div>
                <div class="product-price">99.000đ</div>
                <!-- if product.quantity > 0 show: Stock Variable else show: Non-Stock -->
                <div class="product-inventory">Stock Variable</div>
                <base-button class="add-to-cart" :buttonName="'Add to Cart'"></base-button>
            </div>
        </div>
    </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue';

export default {
    name: "the-detail",
    components: { 
        BaseButton,
    },
    props: {
        
    },

}
</script>

<style>

</style>