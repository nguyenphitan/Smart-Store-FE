<template>
    <div id="base-list-order-manager">
        <!-- Begin container -->
        <div id="list-order-manager-container">
            <div class="review-title t-flex">
                <div class="title-name">Order #</div>
                <div class="title-name">Status</div>
                <div class="title-name purchase-date">Order date</div>
                <div class="title-name" style="text-align: right;">Total</div>
                <div class="title-name"></div>
            </div>
            <base-order-reivew
                v-for="(order, index) in listOrders" 
                :key="index"
                :id="order.id"
                :code="order.code"
                :orderDate="formatDate(order.orderDate)"
                :status="getStatus(order.status)"
                :class="getClassWithStatus(order.status)"
                :total="order.total"
                @reloadPage="reloadPage"
            ></base-order-reivew>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseOrderReivew from '@/components/base/BaseOrderReivew.vue'

export default {
    name: 'list-order-manager',
    components: {
        BaseOrderReivew,
    },
    props: {
        listOrders: {
            type: Array,
            default: new Array()
        }
    },
    methods: {
        reloadPage(e) {
            this.$emit("reloadPage", e);
        },

        formatDate(dateTimeString) {
            let date = new Date(dateTimeString);
            let day = date.getDate();
            let month = date.getMonth() + 1;
            let year = date.getFullYear();
            return (day < 10 ? '0' : '') + day + '/' + (month < 10 ? '0' : '') + month + '/' + year;
        },

        getStatus(status) {
            if(status == 0) {
                return 'processing';
            }

            if(status == 1) {
                return 'delivered';
            }
            
            if(status == 2) {
                return 'cancelled';
            }
        },
        getClassWithStatus(status) {
            if(status == 0) {
                return 't-color-processing';
            }

            if(status == 1) {
                return 't-color-delivered';
            }
            
            if(status == 2) {
                return 't-color-cancelled';
            }
        },
    },

}
</script>

<style>

</style>