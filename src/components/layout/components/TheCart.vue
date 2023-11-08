<template>
    <div id="the-cart">
        <!-- Begin container -->
        <div id="the-cart-container">
            <section class="h-100 h-custom" style="background-color: rgb(246, 249, 252);">
                <div class="container py-5 h-100">
                    <div class="row d-flex justify-content-center align-items-center h-100">
                        <div class="col">
                            <div class="card">
                                <div class="card-body p-4">
                                    <div class="row">
                                        <!-- Begin cart left -->
                                        <div class="col-lg-7">
                                            <h5 class="mb-3"><a href="#!" class="text-body"><i
                                                class="fas fa-long-arrow-alt-left me-2"></i>Continue shopping</a></h5>
                                            <hr>

                                            <div class="d-flex justify-content-between align-items-center mb-4">
                                            <div>
                                                <p class="mb-1">Shopping cart</p>
                                                <p class="mb-0">You have 4 items in your cart</p>
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
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between">
                                                        <div class="d-flex flex-row align-items-center">
                                                            <div>
                                                                <img
                                                                    v-bind:src="require('@/assets/imgs/' + data.product.photos)"
                                                                    class="img-fluid rounded-3" alt="Shopping item" style="width: 100px;">
                                                            </div>
                                                            <div class="ms-3">
                                                                <h5 style="font-weight: bold;">{{ data.product.name }}</h5>
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
                                                                <span class="mb-0">{{ formatPrice(data.product.price * data.quantity) }} VND</span>
                                                            </div>
                                                            <a href="#!" style="color: #cecece;"><i class="fas fa-trash-alt"></i></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <!-- End product row -->

                                        </div>
                                        <!-- End cart left -->

                                        <div class="col-lg-5">
                                            <div class="card text-white rounded-3" style="background-color: rgb(233, 69, 96);">
                                                <div class="card-body">
                                                    <div class="d-flex justify-content-between align-items-center mb-4">
                                                    <h5 class="mb-0">Card details</h5>
                                                    <img src="https://mdbcdn.b-cdn.net/img/Photos/Avatars/avatar-6.webp"
                                                        class="img-fluid rounded-3" style="width: 45px;" alt="Avatar">
                                                    </div>

                                                    <p class="small mb-2">Card type</p>
                                                    <a href="#!" type="submit" class="text-white"><i
                                                        class="fab fa-cc-mastercard fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" class="text-white"><i
                                                        class="fab fa-cc-visa fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" class="text-white"><i
                                                        class="fab fa-cc-amex fa-2x me-2"></i></a>
                                                    <a href="#!" type="submit" class="text-white"><i class="fab fa-cc-paypal fa-2x"></i></a>

                                                    <form class="mt-4">
                                                    <div class="form-outline form-white mb-4">
                                                        <input type="text" id="typeName" class="form-control form-control-lg" siez="17"
                                                        placeholder="Cardholder's Name" />
                                                        <label class="form-label" for="typeName">Cardholder's Name</label>
                                                    </div>

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

                                                    <hr class="my-4">

                                                    <div class="d-flex justify-content-between">
                                                    <p class="mb-2">Subtotal</p>
                                                    <p class="mb-2">$4798.00</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between">
                                                    <p class="mb-2">Shipping</p>
                                                    <p class="mb-2">$20.00</p>
                                                    </div>

                                                    <div class="d-flex justify-content-between mb-4">
                                                    <p class="mb-2">Total(Incl. taxes)</p>
                                                    <p class="mb-2">$4818.00</p>
                                                    </div>

                                                    <button type="button" class="btn btn-info btn-block btn-lg" style="background-color: rgb(233, 176, 69); border: none;">
                                                    <div class="d-flex justify-content-between">
                                                        <span>$4818.00</span>
                                                        <span>Checkout <i class="fas fa-long-arrow-alt-right ms-2"></i></span>
                                                    </div>
                                                    </button>

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

export default {
    name: "the-cart",
    created() { // Get cart detail:
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
            })
            .catch((reject) => {
                console.log(reject);
            });
    },
    data() {
        return {
            // List product in cart:
            cartData: [],

        }
    },
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
@import url('../../../styles/layout/cart.css');
</style>