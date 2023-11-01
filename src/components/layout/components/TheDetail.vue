<template>
    <div id="the-detail">
        <!-- Top -->
        <div class="order-step">
            <div class="step step-add">1. Cart</div>
            <div class="step-line"></div>
            <div class="step step-detail">2. Details</div>
            <div class="step-line"></div>
            <div class="step step-payment">3. Payment</div>
            <div class="step-line"></div>
            <div class="step step-review">4. Review</div>
        </div>

        <!-- Bottom -->
        <div class="product-detail">
            <!-- Image -->
            <div class="product-img">
                <!-- Big image -->
                <div class="big-img">
                    <img src="../../../assets/imgs/1.Ford2019.png" alt="" width="300px">
                </div>

                <!-- Small image -->
                <div class="small-img">
                    <img src="../../../assets/imgs/1.Ford2019.png" alt="" width="65px">
                    <img src="../../../assets/imgs/1.Ford2019.png" alt="" width="65px">
                </div>
            </div>

            <!-- Information -->
            <div class="product-info">
                <h2 class="product-name">Lord 2019</h2>
                <div class="product-category">Category: <span style="font-weight: bold;">Smart Watch</span> </div>
                <div class="product-rated">Rated:
                    <div style="display: inline; padding: 0 4px;" class="ms-auto text-warning">
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                        <i class="fa fa-star"></i>
                    </div>
                    (50)
                </div>
                <div class="product-price">99.000đ</div>
                <!-- if product.quantity > 0 show: Stock Available else show: Non-Stock -->
                <div class="product-inventory">Stock Available</div>
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
@import url('../../../styles/layout/details.css');
</style>