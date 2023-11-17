<template>
    <div id="base-order-review">
        <!-- Container -->
        <div id="base-review-container" class="t-flex t-align-center">
            <div class="order-content order-code">{{ code }}</div>
            <div class="order-content">
                <span id="order-status" class="order-status">{{ status }}</span>
            </div>
            <div class="order-content order-date">{{ orderDate }}</div>
            <div style="text-align: right;" class="order-content order-total">{{ formatPrice(total) }} VND</div>
            <div class="order-content order-icon-delete">
                <i @click="deliveredOrder(id)" style="margin-right: 8px; cursor: pointer;" class="fa-regular fa-square-check"></i>
                <i @click="deleteOrder(id)" class="t-pointer fa-regular fa-trash-can"></i>
            </div>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'base-order-review',
    props: {
        id: {
            type: Number,
            default: 1
        },
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
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Delete order:
        deleteOrder(orderId) {
            if(confirm("Are you sure?")) {
                // token
                const token = localStorage.getItem('token');

                // header
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                axios
                    .delete(`http://localhost:8080/api/v1/order/${orderId}`, {headers})
                    .then((response) => {
                        console.log(response);
                        console.log('Delete order success!');
                        window.location.reload();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
        },
        // End delete order

        // Delivered order
        deliveredOrder(orderId) {
            // token
            const token = localStorage.getItem('token');

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            axios
                .put(`http://localhost:8080/api/v1/order/${orderId}`, {headers})
                .then((response) => {
                    console.log(response);
                    console.log('Update order status success!');
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End delivered order

    },

}
</script>

<style>
@import url('../../styles/base/review.css');
</style>