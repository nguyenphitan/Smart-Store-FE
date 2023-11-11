<template>
    <div id="base-order-review">
        <!-- Container -->
        <div id="base-review-container" class="t-flex t-align-center t-color-processing">
            <div class="order-content order-code">{{ code }}</div>
            <div class="order-content">
                <span id="order-status" class="order-status">{{ status }}</span>
            </div>
            <div class="order-content order-date">{{ orderDate }}</div>
            <div class="order-content order-total">{{ formatPrice(total) }} VND</div>
            <div class="order-content order-icon t-pointer"><i class="fa-regular fa-trash-can"></i></div>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
export default {
    name: 'base-order-review',
    props: {
        code: {
            type: String,
            default: "#f0ba538b"
        },
        status: {
            type: String,
            default: "processing"
        },
        orderDate: {
            type: String,
            default: "11/11/2023"
        },
        total: {
            type: Number,
            default: 199000
        }
    },
    // mounted() {
    //     let processStatus = "Processing";
    //     let deliveredStatus = "Delivered";

    //     let statusElement = document.querySelector('#the-cart-review #order-status');
    //     let orderStatus = statusElement.innerText;

    //     console.log(orderStatus.toLowerCase());

    //     // Processing status
    //     if(orderStatus.toLowerCase() == processStatus.toLowerCase()) {
    //         statusElement.classList.add('t-color-processing');

    //         // Delete delivered status if have
    //         if(statusElement.classList.contains('t-color-delivered')) {
    //             statusElement.classList.remove('t-color-delivered');
    //         }
    //     }
    //     else if(orderStatus.toLowerCase() == deliveredStatus.toLowerCase()) {  
    //         // Delivered status
    //         statusElement.classList.add('t-color-delivered');
            
    //         // Delete processing status if have
    //         if(statusElement.classList.contains('t-color-processing')) {
    //             statusElement.classList.remove('t-color-processing');
    //         }
    //     }

    // },
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },

}
</script>

<style>
@import url('../../styles/base/review.css');
</style>