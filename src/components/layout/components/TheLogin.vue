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
                    <div>
                        <!-- Email -->
                        <div class="enter-email">
                            <label for="#">Enter your email <span style="color: #4a4d51;">*</span></label>
                            <base-input
                                class="email-login"
                                :required="true"
                                :inputPlaceholder="emailPlaceholder"
                                :inputType="emailType"
                                @enterEvent="checkLogin"
                            >
                            </base-input>
                        </div>

                        <!-- Password -->
                        <div class="enter-password">
                            <label for="#">Password <span style="color: #4a4d51;">*</span></label>
                            <base-input 
                                class="password-login"
                                :required="true"
                                :iconClass="iconClass"
                                :inputType="passwordType"
                                @enterEvent="checkLogin"
                            ></base-input>
                        </div>
                        
                        <!-- Login button -->
                        <base-button @onClickEvent="checkLogin" :buttonType="'submit'" class="btn-login" :buttonName="loginBtn"></base-button>
                    </div>
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
            default: "Furniture"
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
            emailPlaceholder: 'dnh@gmail.com',
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
                this.clearFormData();
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
                input.style.border = "1px solid rgb(218, 225, 231)";
            }

            let registerInputs = document.querySelectorAll("#the-register input");
            for(let input of registerInputs) {
                input.value = "";
                input.style.border = "1px solid rgb(218, 225, 231)";
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
            // let me = this;
            let email = document.querySelector('#the-login .email-login input').value;
            let password = document.querySelector('#the-login .password-login input').value;
            if(email == "") {
                document.querySelector('#the-login .email-login input').style.borderColor = 'red';
                return;
            }

            if(password == "") {
                document.querySelector('#the-login .password-login input').style.borderColor = 'red';
                return;
            }
            
            axios
                .post(`http://localhost:8080/api/v1/auth/login?username=${email}&password=${password}`)
                .then((response) => {
                    console.log(response.data);
                    if(response.data.token == null) {
                        alert("Login fail!");
                        return;
                    }

                    localStorage.setItem('token', response.data.token); 
                    localStorage.setItem('role', response.data.role);
                    console.log(response.data.role);
                    window.location.reload();
                    // if(response.data.role == "ADMIN") {
                    //     me.clearFormData()
                    //     me.hideLogin();
                    //     window.location.href = '/#/admin';
                    //     return;
                    // } else {
                    //     window.location.reload();
                    //     return;
                    // }
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