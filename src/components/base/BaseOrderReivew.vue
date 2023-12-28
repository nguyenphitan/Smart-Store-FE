<template>
    <div id="base-order-review">
        <!-- Container -->
        <router-link :to="{ name: 'orderDetails', params: { orderId: id}}">
            <div id="base-review-container" class="t-flex t-align-center">
                <div class="order-content order-code">{{ code }}</div>
                <div class="order-content">
                    <span id="order-status" class="order-status">{{ status }}</span>
                </div>
                <div class="order-content order-date">{{ orderDate }}</div>
                <div style="text-align: right;" class="order-content order-total">{{ formatPrice(total) }} VND</div>
                <div class="order-content order-icon-delete">
                    <i v-if="this.userRole == 'ADMIN' && status == 'processing'" @click="deliveredOrder($event, id)" style="cursor: pointer;" class="fa-regular fa-square-check"></i>
                    <i v-if="this.userRole == 'USER' && status == 'processing'" @click="cancelOrder($event, id)" class="t-pointer fa-solid fa-ban"></i>
                    <!-- <i v-if="status == 'cancelled'" @click="deleteOrder($event, id)" class="t-pointer fa-regular fa-trash-can"></i> -->
                </div>
            </div>
        </router-link>
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
    created() {
        this.userRole = localStorage.getItem('role');
        console.log(this.userRole);
    },
    data() {
        return {
            // User role
            userRole: 'USER',
        }
    },
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Delete order:
        deleteOrder(e, orderId) {
            e.preventDefault();
            let me = this;
            
            if(confirm("Are you sure delete order?")) {
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
                        // window.location.reload();
                        me.$emit("reloadPage", e);
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
        },
        // End delete order

        // Delivered order
        deliveredOrder(e, orderId) {
            e.preventDefault();

            let me = this;
            
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
                    console.log('Delivered order status success!');
                    // window.location.reload();
                    me.$emit("reloadPage", e);
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },
        // End delivered order

        // Cancel order (USER)
        cancelOrder(e, orderId) {
            e.preventDefault();
            let me = this;
            
            if(confirm("Are you sure cancel order?")) {
                // token
                const token = localStorage.getItem('token');

                // header
                const headers = {
                    Authorization: `Bearer ${token}`,
                };

                axios
                    .put(`http://localhost:8080/api/v1/order/cancel/${orderId}`, {headers})
                    .then((response) => {
                        console.log(response);
                        console.log('Cancel order status success!');
                        alert("Order Cancelled!")
                        // window.location.reload();
                        me.$emit("reloadPage", e);
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
        }
        // End cancel order (USER)

    },

}
</script>

<style>
@import url('../../styles/base/review.css');
</style>