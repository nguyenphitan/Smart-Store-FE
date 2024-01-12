<template>
    <div id="the-cart">
        <!-- Begin container -->
        <div id="the-cart-container">

            <!-- Top -->
            <div class="order-step">
                <router-link to="/cart" class="step step-add">1. Cart</router-link>
                
                <div class="step-line step-line-1"></div>

                <router-link to="/cart-details" class="step step-detail">2. Details</router-link>

                <div class="step-line step-line-2"></div>
                
                <!-- <router-link to="/cart-payment" class="step step-payment">3. Payment</router-link>
                
                <div class="step-line step-line-3"></div> -->
                
                <router-link to="/orders-review" class="step step-review">3. Review</router-link>
            </div>

            <!-- Bottom -->
            <section class="h-100 h-custom" style="background-color: rgb(246, 249, 252);">
                <div class="container py-5 h-100" style="padding-top: 20px !important;">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card">
                                <div class="card-body p-4">
                                    <div class="row">
                                        <!-- Begin cart left -->
                                        <div class="col-lg-7">
                                            <h5 class="mb-3">
                                                <a href="/" class="text-body">
                                                    <i class="fas fa-long-arrow-alt-left me-2"></i>
                                                    Continue shopping
                                                </a>
                                            </h5>
                                            <hr>

                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p class="mb-1">Shopping cart</p>
                                                <p class="mb-0">You have {{ cartData.length }} items in your cart</p>
                                            </div>
                                            <div>
                                                <p class="mb-0"><span class="text-muted">Sort by:</span> <a href="#!"
                                                    class="text-body">price <i class="fas fa-angle-down mt-1"></i></a></p>
                                            </div>
                                            </div>

                                            <!-- Begin product row -->
                                            <div 
                                                class="card mb-3"
                                                v-for="(data, key) in cartData" 
                                                :key="key"
                                            >
                                                <router-link :to="{ name: 'details', params: { id: data.product.id}}">
                                                    <div class="card-body">
                                                        <div class="d-flex justify-content-between">
                                                            <div v-if="data.product.discount > 0" class="d-flex justify-content-between p-3 position-absolute">
                                                                <div class="bg-info d-flex align-items-center justify-content-center shadow-1-strong sale-off" style="border-radius: 8px; padding: 2px 4px;">
                                                                    <p class="text-white mb-0 small">{{data.product.discount}}% off</p>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <div style="margin-right: 20px;">
                                                                    <img
                                                                        v-bind:src="require('@/assets/imgs/' + data.product.photos)"
                                                                        class="img-fluid rounded-3" alt="Shopping item" style="width: 100px;">
                                                                </div>
                                                                <div class="ms-3">
                                                                    <h5 style="font-weight: bold;">{{ data.product.name }}</h5>
                                                                    <div style="display: flex; justify-content: space-between; width: 200px;">
                                                                        <p style="font-weight: 600;" class="small mb-0">{{ data.categoryName }}</p>
                                                                    </div>
                                                                    <div style="display: flex; justify-content: space-between; width: 200px;">
                                                                        <p class="small mb-0">Price: {{ data.product.price }}</p>
                                                                        <p class="small mb-0">Quantity: {{ data.quantity }}</p>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div class="d-flex flex-row align-items-center">
                                                                <!-- <div style="width: 50px;">
                                                                    <h5 class="fw-normal mb-0">2</h5>
                                                                </div> -->
                                                                <div style="width: 120px;">
                                                                    <span class="mb-0">{{ formatPrice((data.product.price - data.product.price * data.product.discount / 100) * data.quantity) }} VND</span>
                                                                </div>
                                                                <span class="btn-delete-product-out-cart" @click="deleteProduct($event, data.id)" style="color: #cecece; cursor: pointer; padding: 4px;">
                                                                    <i class="fas fa-trash-alt"></i>
                                                                </span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </router-link>
                                            </div>
                                            <!-- End product row -->

                                        </div>
                                        <!-- End cart left -->

                                        <div class="col-lg-5">
                                            <div class="card text-white rounded-3" style="background-color: rgb(233, 69, 96); position: sticky; top: 124px; right: 0; z-index: 2;">
                                                <div class="card-body">
                                                    <div for="payment-by-card"  
                                                        class="pay-card payment-by-card t-flex t-pointer"
                                                    >
                                                        <input @focus="getPaymentMethod($event)" class="pay-card t-pointer" id="payment-by-card" type="radio" checked name="payment-method" style="width: 20px; height: 24px; margin-right: 16px;">
                                                        <h5 class="pay-card t-pointer"><label class="pay-card t-pointer" for="payment-by-card">Card details</label></h5>
                                                    </div>

                                                    <p class="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" class="text-white">
                                                        <i class="fab fa-cc-mastercard fa-2x me-2"></i>
                                                    </a>
                                                    <a style="margin: 0 4px;" href="#!" type="submit" class="text-white">
                                                        <i class="fab fa-cc-visa fa-2x me-2"></i>
                                                    </a>
                                                    <a href="#!" type="submit" class="text-white">
                                                        <i class="fab fa-cc-amex fa-2x me-2"></i>
                                                    </a>
                                                    <a style="margin: 0 4px;" href="#!" type="submit" class="text-white">
                                                        <i class="fab fa-cc-paypal fa-2x"></i>
                                                    </a>

                                                    <form class="mt-4">
                                                        <!-- <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                                            placeholder="Cardholder's Name" />
                                                            <label class="form-label" for="typeName">Cardholder's Name</label>
                                                        </div> -->

                                                        <div class="form-outline form-white mb-4">
                                                            <input type="text" id="typeText" class="form-control form-control-lg" siez="17"
                                                            placeholder="1234 5678 9012 3457" minlength="19" maxlength="19" />
                                                            <label class="form-label" for="typeText">Card Number</label>
                                                        </div>

                                                        <div class="row mb-4">
                                                            <div class="col-md-6">
                                                            <div class="form-outline form-white">
                                                                <input type="text" id="typeExp" class="form-control form-control-lg" placeholder="MM/YYYY" size="7" minlength="7" maxlength="7" />
                                                                <label class="form-label" for="typeExp">Expiration</label>
                                                            </div>
                                                            </div>
                                                            <div class="col-md-6">
                                                            <div class="form-outline form-white">
                                                                <input type="password" id="typeText" class="form-control form-control-lg"
                                                                placeholder="&#9679;&#9679;&#9679;" size="1" minlength="3" maxlength="3" />
                                                                <label class="form-label" for="typeText">Cvv</label>
                                                            </div>
                                                            </div>
                                                        </div>

                                                    </form>

                                                    <div
                                                        class="pay-delivery cash-on-delivery t-flex t-pointer"
                                                    >
                                                        <input @focus="getPaymentMethod($event)" id="cash-on-delivery" class="pay-delivery t-pointer" type="radio" name="payment-method" style="width: 20px; height: 24px; margin-right: 16px;">
                                                        <h5 class="pay-delivery t-pointer"><label class="pay-delivery t-pointer" for="cash-on-delivery">Cash On Delivery</label></h5>
                                                    </div>

                                                    <hr class="my-4">

                                                    <div class="d-flex justify-content-between mb-4">
                                                    <p class="mb-2">Total(Incl. taxes)</p>
                                                    <p class="mb-2">{{ formatPrice(Number(totalPrice)) }} VND</p>
                                                    </div>

                                                    <div @click="notificationNotProductToPayment" v-if="this.paymentMethod == 0 && this.productPaymentDTOs.length < 1" 
                                                        class="btn btn-info btn-block btn-lg" style="background-color: rgb(233, 176, 69); border: none;">
                                                        <div class="d-flex justify-content-between">
                                                            <span>{{ formatPrice(Number(totalPrice)) }} VND</span>
                                                            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </div>

                                                    <router-link v-if="this.paymentMethod == 0 && this.productPaymentDTOs.length > 0" :to="{ name: 'cartDetails', params: { method: paymentMethod}}" class="btn btn-info btn-block btn-lg" style="background-color: rgb(233, 176, 69); border: none;">
                                                        <div class="d-flex justify-content-between">
                                                            <span>{{ formatPrice(Number(totalPrice)) }} VND</span>
                                                            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </router-link>

                                                    <div @click="paymentOnline(totalPrice)" v-if="this.paymentMethod == 1" class="btn btn-info btn-block btn-lg" style="background-color: rgb(233, 176, 69); border: none;">
                                                        <div class="d-flex justify-content-between">
                                                            <span>{{ formatPrice(Number(totalPrice)) }} VND</span>
                                                            <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                        </div>
                                                    </div>

                                                    <!-- <button @click="paymentByVNPay(totalPrice)">Payment by VNPay</button> -->

                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios';
import { EventBus } from '@/eventBus';

export default {
    name: "the-cart",
    created() { // Get cart detail:
        let me = this;
        // Token
        const token = localStorage.getItem('token');
        console.log(token);

        // header
        const headers = {
            Authorization: `Bearer ${token}`,
        };

        // Call API
        axios
            .get('http://localhost:8080/api/v1/cart', { headers })
            .then((response) => {
                console.log("Get cart detail success!");
                console.log(response.data);
                this.cartData = response.data;

                for(let cartResponse of response.data) {
                    let productPrice = cartResponse.product.price;
                    let discount = cartResponse.product.discount;
                    let realPrice = productPrice - productPrice * discount / 100;

                    this.totalPrice += (realPrice * cartResponse.quantity);

                    // build productItem to payment
                    let productItem = {
                        productId: cartResponse.product.id,
                        quanitySelected: cartResponse.quantity
                    };

                    me.productPaymentDTOs.push(productItem);
                }

            })
            .catch((reject) => {
                console.log(reject);
            });
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // List product in cart:
            cartData: [],

            // Total price:
            totalPrice: 0,

            // Payment method:
            paymentMethod: 1,

            // list product for payment:
            productPaymentDTOs: [],

        }
    },
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Notification payment product is empty
        notificationNotProductToPayment() {
            alert("Your cart is empty!");
        },

        // Payment method: (online: 1 ; offline: 0)
        getPaymentMethod(e) {
            // console.log(e.target.checked);
            if(e.target.classList.contains("pay-delivery")) {
                // Cash on delivery
                this.paymentMethod = 0;
                console.log("Cash on delivery");
            } else {
                // Payment Online
                this.paymentMethod = 1;
                console.log("Payment online");
            }
        },

        // reload product in cart:
        reloadProductInCart() {
            let me = this;
            me.totalPrice = 0;
            // Token
            const token = localStorage.getItem('token');
            console.log(token);

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Call API
            axios
                .get('http://localhost:8080/api/v1/cart', { headers })
                .then((response) => {
                    console.log("Get cart detail success!");
                    console.log(response.data);
                    this.cartData = response.data;

                    for(let cartResponse of response.data) {
                        let productPrice = cartResponse.product.price;
                        let discount = cartResponse.product.discount;
                        let realPrice = productPrice - productPrice * discount / 100;

                        this.totalPrice += (realPrice * cartResponse.quantity);

                        // build productItem to payment
                        let productItem = {
                            productId: cartResponse.product.id,
                            quanitySelected: cartResponse.quantity
                        };

                        me.productPaymentDTOs.push(productItem);
                    }

                })
                .catch((reject) => {
                    console.log(reject);
                });
        },

        // Delete product out to cart:
        deleteProduct(e, productId) {
            e.preventDefault();

            let me = this;
            const token = localStorage.getItem('token');

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            axios
                .delete(`http://localhost:8080/api/v1/cart/${productId}`, {headers})
                .then((response) => {
                    console.log(response);
                    console.log('Delete product success!');
                    EventBus.$emit("reloadCartSize");
                    me.reloadProductInCart();
                    // window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },

        // Payment online by VNPay
        paymentOnline(amount) {
            if(this.productPaymentDTOs.length == 0) {
                alert("Your cart is empty!");
                return;
            }

            const token = localStorage.getItem('token');

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Request:
            let paymentRequest = {
                productInfo: this.productPaymentDTOs,
                fullName: "NGUYEN VAN A",
                phone: "0934998386",
                zip: "100000",
                district: "Dong Da",
                email: "xonv@vnpay.vn",
                company: "Cong Ty Co Phan Giai Phap Thanh Toan Viet Nam",
                city: "Ha Noi",
                detailAddress: "22 Lang Ha",
                total: amount
            };

            axios
                .post(`http://localhost:8080/api/v1/cart/payment/request`, paymentRequest, {headers})
                .then((response) => {
                    console.log(response);
                    window.location.href = `http://localhost:8080/api/v1/cart/payment/${amount}`;
                })
                .catch((reject) => {
                    console.log(reject);
                });

        },

    },

}
</script>

<style>
@import url('../../../styles/layout/cart.css');
</style>