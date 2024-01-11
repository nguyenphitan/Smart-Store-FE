<template>
    <div id="base-user-profile">
        <h2 class="profile-account">
            <i class="fa-solid fa-gear"></i>
            <span>Account</span>
        </h2>
        <!-- Container -->
        <div id="the-profile-container">
            <!-- Avatar -->
            <div id="profile-avatar">
                <div class="cover-img">
                    <div class="change-cover">
                        <i class="fa-solid fa-camera"></i>
                    </div>
                    <div class="avatar-area">
                        <div class="avatar-img">
                            <img :src="userProfile.avatarUrl != null ? require('@/assets/imgs/' + userProfile.avatarUrl) : ''" alt="avatar image">
                            <label for="choose-avatar" class="change-avatar">
                                <input @change="changeAvatar" id="choose-avatar" type="file" style="display: none;"/>
                                <i class="fa-solid fa-camera"></i>
                            </label>
                        </div>
                    </div>
                </div>
            </div>
            <!-- End avatar -->

            <!-- Info -->
            <form>
                <div id="profile-Info" class="t-flex t-between">
                    <!-- col left -->
                    <div class="profile-info-left">
                        <div class="profile-item">
                            <p class="profile-title">First Name <span style="color: rgb(233, 69, 96);">*</span></p>
                            <input name="firstName" type="text" :value="userProfile.firstName" readonly required/>
                        </div>
                        <div class="profile-item">
                            <p class="profile-title">Email <span style="color: rgb(233, 69, 96);">*</span> </p>
                            <input name="email" type="email" :value="userProfile.username" readonly required/>
                        </div>
                        <div class="profile-item">
                            <p class="profile-title">Country</p>
                            <input name="country" type="text" :value="userProfile.country" readonly/>
                        </div>
                        <div class="t-flex">
                            <base-button class="edit-button" @onClickEvent="enableEdit" :buttonName="'Edit'"></base-button>
                            <base-button class="save-changes" :buttonType="'submit'" style="display: none;" @onClickEvent="saveChanges" :buttonName="'Save Changes'"></base-button>
                            <base-button class="cancel-changes" style="display: none;" @onClickEvent="cancelChanges" :buttonName="'Cancel'"></base-button>
                        </div>
                    </div>

                    <!-- col right -->
                    <div class="profile-info-right">
                        <div class="profile-item">
                            <p class="profile-title">Last Name <span style="color: rgb(233, 69, 96);">*</span></p>
                            <input name="lastName" type="text" :value="userProfile.lastName" readonly required/>
                        </div>
                        <div class="profile-item">
                            <p class="profile-title">Phone</p>
                            <input name="phone" type="text" :value="userProfile.phone" readonly/>
                        </div>
                        <div class="profile-item">
                            <p class="profile-title">City</p>
                            <input name="city" type="text" :value="userProfile.city" readonly/>
                        </div>
                    </div>
                </div>
            </form>
            <!-- End Info -->
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import BaseButton from '@/components/base/BaseButton.vue'
import axios from 'axios';
export default {
    name: 'base-user-profile',
    components: {
        BaseButton,
    },
    props: {
        userProfile: {
            type: Object,
            default: new Object()
        },
    },
    methods: {
        // Show save and cancel button
        showSaveAndCancel() {
            document.querySelector("#the-profile .save-changes").style.display = 'block';
            document.querySelector("#the-profile .cancel-changes").style.display = 'block';

            // Hide edit button
            document.querySelector("#the-profile .edit-button").style.display = 'none';
        },
        // End show save and cancel button

        // Hide save and cancel button
        hideSaveAndCancel() {
            document.querySelector("#the-profile .save-changes").style.display = 'none';
            document.querySelector("#the-profile .cancel-changes").style.display = 'none';

            // Hide edit button
            document.querySelector("#the-profile .edit-button").style.display = 'block';
        },
        // End Hide save and cancel button

        // Enable edit
        enableEdit(e) {
            console.log(e.target);
            // Show save and cancel button
            this.showSaveAndCancel();

            let inputs = document.querySelectorAll('.profile-item input');
            for(let input of inputs) {
                input.attributes.removeNamedItem("readonly");
            }
        },
        // End enable edit

        // Save changes
        saveChanges(e) {
            console.log(e.target);
            let inputs = document.querySelectorAll('.profile-item input');
            let firstName = inputs[0].value;
            let email = inputs[1].value;
            let country = inputs[2].value;
            let lastName = inputs[3].value;
            let phone = inputs[4].value;
            let city = inputs[5].value;

            if(firstName == '' || lastName == '' || email == '') {
                return;
            }

            // Token
            const token = localStorage.getItem('token');

            // header
            const headers = {
                Authorization: `Bearer ${token}`,
            };

            // Request
            let userDTO = {
                firstName: firstName,
                username: email,
                country: country,
                lastName: lastName,
                phone: phone,
                city: city
            };

            axios
                .put('http://localhost:8080/api/v1/users-profile', userDTO, {headers})
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch((reject) => {
                    alert("Email existed!");
                    console.log(reject);
                });

        },
        // End save changes

        // Cancel changes
        cancelChanges(e) {
            console.log(e.target);
            window.location.reload();
        },
        // Cancel changes

        // Change avatar
        changeAvatar() {
            let avatarImg = document.querySelector("#the-profile #choose-avatar").files[0];
            const formData = new FormData();
            formData.append('avatarImg', avatarImg);
            // Token
            const token = localStorage.getItem('token');
            // header
            const headers = {
                'Content-Type': 'multipart/form-data',
                Authorization: `Bearer ${token}`
            }

            // call api:
            axios
                .put('http://localhost:8080/api/v1/users-profile/avatar', formData, {headers})
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                    alert("Fail to add new product!");
                });
        }
        // End change avatar
    },
}
</script>

<style>

</style>