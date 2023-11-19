<template>
    <div @click="hideRegisterForm" id="the-register">
        <div class="wrapper">
            <!-- The register -->
            <div id="register-container">
                <!-- Begin header -->
                <div id="register-header">
                    <h3 style="font-weight: bold">Sign Up</h3>
                    <h5 class="register-description">Please enter your information</h5>
                </div>
                <!-- End header -->

                <!-- Begin body -->
                <div id="register-body">
                    <form>
                        <!-- Fullname -->
                        <div class="enter-firstname">
                            <label for="#">Fisrt Name <span style="color: rgb(233, 69, 96);">*</span></label>
                            <base-input
                                class="firstname-register"
                                :inputPlaceholder="'Nguyen'"
                                :inputType="'text'"
                                :required="true"
                            >
                            </base-input>
                        </div>

                        <!-- Fullname -->
                        <div class="enter-lastname">
                            <label for="#">Last Name <span style="color: rgb(233, 69, 96);">*</span></label>
                            <base-input
                                class="lastname-register"
                                :inputPlaceholder="'Tan'"
                                :inputType="'text'"
                                :required="true"
                            >
                            </base-input>
                        </div>

                        <!-- Email -->
                        <div class="enter-email">
                            <label for="#">Enter your email <span style="color: rgb(233, 69, 96);">*</span></label>
                            <base-input
                                class="email-register"
                                :inputPlaceholder="emailPlaceholder"
                                :inputType="emailType"
                                :required="true"
                            >
                            </base-input>
                        </div>

                        <!-- Password -->
                        <div class="enter-password">
                            <label for="#">Password <span style="color: rgb(233, 69, 96);">*</span></label>
                            <base-input 
                                class="password-register"
                                :iconClass="iconClass"
                                :inputType="passwordType"
                                :required="true"
                            ></base-input>
                        </div>

                        <!-- Confirm Password -->
                        <div class="enter-password-confirm">
                            <label for="#">Confirm Password <span style="color: rgb(233, 69, 96);">*</span></label>
                            <base-input 
                                class="password-confirm"
                                :iconClass="iconClass"
                                :inputType="passwordType"
                                :required="true"
                            ></base-input>
                        </div>
                        
                        <!-- register button -->
                        <base-button :buttonType="'submit'" @onClickEvent="registerNewAccount" class="btn-register" :buttonName="registerBtn"></base-button>
                        
                    </form>
                </div>
                <!-- End body -->
            </div>

            <!-- Footer -->
            <div id="register-footer">
                <div class="forgot-password">
                    <span>Already have account?</span>
                    <a style="font-weight: bold; cursor: pointer;" @click="openLoginForm">Log in</a>
                </div>
            </div>
            <!-- End footer -->
        </div>
    </div>
</template>

<script>
import BaseInput from '../../base/BaseInput.vue'
import BaseButton from '../../base/BaseButton.vue'
import axios from 'axios';

export default {
    name: 'the-register',
    props: {
        shopName: {
            type: String,
            default: "T.A.N"
        }
    },
    components: {
        BaseInput,
        BaseButton,
    },
    data() {
        return {
            iconClass: 'fa-regular fa-eye',
            registerBtn: 'Register',
            emailPlaceholder: 'phitan@gmail.com',
            emailType: 'email',
            passwordType: 'password',
            faceBookName: 'Continue with FaceBook',
            facebookIcon: 'fa-brands fa-facebook',
            googleName: 'Continue with Google',
            googleIcon: 'fa-brands fa-google',
        }
    },
    methods: {
        // Hide register form
        hideRegisterForm(e) {
            // console.log(e.target);
            // console.log(e.target.id);
            if(e.target.id == 'the-register') {
                e.target.style.display = 'none';
            }
        },

        // Clear form data
        clearFormData() {
            let loginInputs = document.querySelectorAll("#the-login input");
            for(let input of loginInputs) {
                input.value = "";
            }

            let registerInputs = document.querySelectorAll("#the-register input");
            for(let input of registerInputs) {
                input.value = "";
            }
        },

        // Open login form
        openLoginForm() {
            document.getElementById('the-register').style.display = 'none';
            document.getElementById('the-login').style.display = 'block';
            this.clearFormData();
        },

        // Register
        registerNewAccount() {
            let firstName = document.querySelector('#the-register .firstname-register input').value;
            let lastName = document.querySelector('#the-register .lastname-register input').value;
            let email = document.querySelector('#the-register .email-register input').value;
            let password = document.querySelector('#the-register .password-register input').value;

            if(email == "" || password == "" || firstName == "" || lastName == "") {
                return;
            }

            axios
                .post(`http://localhost:8080/api/v1/auth/register?firstName=${firstName}&lastName=${lastName}&username=${email}&password=${password}`)
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                    alert("Register fail!");
                });
        },


    },
    
}
</script>

<style scoped>
@import url('../../../styles/layout/register.css');
</style>