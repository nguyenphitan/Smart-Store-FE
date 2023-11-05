<template>
    <div @click="hideLoginForm" id="the-login">
        <div class="wrapper">
            <!-- The login -->
            <div id="login-container">
                <!-- Begin header -->
                <div id="login-header">
                    <h3 style="font-weight: bold">Welcome To {{shopName}}</h3>
                    <h5 class="login-description">Log in with email & password</h5>
                </div>
                <!-- End header -->

                <!-- Begin body -->
                <div id="login-body">
                    <form>
                        <!-- Email -->
                        <div class="enter-email">
                            <label for="#">Enter your email</label>
                            <base-input
                                @enterEvent="checkLogin"
                                class="email-login"
                                :required="true"
                                :inputPlaceholder="emailPlaceholder"
                                :inputType="emailType"
                            >
                            </base-input>
                        </div>

                        <!-- Password -->
                        <div class="enter-password">
                            <label for="#">Password</label>
                            <base-input 
                                @enterEvent="checkLogin"
                                class="password-login"
                                :required="true"
                                :iconClass="iconClass"
                                :inputType="passwordType"
                            ></base-input>
                        </div>
                        
                        <!-- Login button -->
                        <base-button :buttonType="'submit'" @onClickEvent="checkLogin" class="btn-login" :buttonName="loginBtn"></base-button>
                    </form>
                    <div class="login-on">on</div>
                    <base-button class="login-on-facebook" :buttonName="faceBookName" :iconClass="facebookIcon"></base-button>
                    <base-button class="login-on-google" :buttonName="googleName" :iconClass="googleIcon"></base-button>
                    
                    <div class="sign-up">
                        <span>Don’t have account?</span>
                        <a style="font-weight: bold; cursor: pointer;" @click="openRegisterForm" >Sign Up</a>
                    </div>
                </div>
                <!-- End body -->
            </div>

            <!-- Footer -->
            <div id="login-footer">
                <div class="forgot-password">
                    <span>Forgot your password?</span>
                    <a style="font-weight: bold" href="#">Reset It</a>
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
    name: 'the-login',
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
            loginBtn: 'Login',
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
        // Hide login form
        hideLoginForm(e) {
            // console.log(e.target);
            // console.log(e.target.id);
            if(e.target.id == 'the-login') {
                e.target.style.display = 'none';
            }
        },

        hideLogin() {
            document.getElementById('the-login').style.display = 'none';
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

        // Open register
        openRegisterForm() {
            document.getElementById('the-register').style.display = 'block';
            this.clearFormData();
            this.hideLogin();
        },

        // Check login
        checkLogin() {
            let email = document.querySelector('#the-login .email-login input').value;
            let password = document.querySelector('#the-login .password-login input').value;
            if(email == "" || password == "") {
                return;
            }
            axios
                .post(`http://localhost:8080/api/v1/auth/login?username=${email}&password=${password}`)
                .then((response) => {
                    console.log(response.data);
                    localStorage.setItem('token', response.data); 
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                    alert("Email or password incorrect!");
                });
        },


    },
    
}
</script>

<style scoped>
@import url('../../../styles/layout/login.css');
</style>