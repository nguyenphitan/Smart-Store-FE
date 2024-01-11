<template>
    <div id="the-add-category" class="t-flex t-align-center t-justify-center" style="z-index: 20;">
        <!-- Begin container -->
        <div id="add-category-container" class="t-flex t-align-center t-justify-center"
            style="flex-direction: column; height: 250px; width: 42%; max-width: 500px; background-color: #fff;
            border-radius: 8px;"
        >
            <div>
                <div class="add-category-title">New Category</div>
                <div class="t-flex t-align-center t-justify-center" style="margin-bottom: 24px; margin-top: 32px;">
                    <input id="categoryName"
                        style="width: 300px; height: 40px; border-radius: 8px; 
                        border: 1px solid #ccc; outline: none; padding: 8px 16px;" 
                        type="text" placeholder="Enter category name" 
                        required
                        @focus="clearInput"
                    />
                    <button
                        type="submit"
                        @click="addNewCategory"
                        class="btn-add-category t-pointer" style="margin-left: 8px; border-radius: 8px; 
                        border: 1px solid #ccc; width: 80px; height: 40px;
                        line-height: 40px; text-align: center;"
                    >
                        Add
                    </button>
                </div>
                <div>
                    <input type="file" name="categoryImg" id="categoryImg" required>
                </div>
                <i @click="closePopupAddCategory" class="exit-add-category fa-solid fa-xmark"></i>
            </div>
        </div>
        <!-- End container -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'the-add-category',
    methods: {
        // clear input:
        clearInput() {
            document.getElementById("categoryName").style.border = '1px solid rgb(218, 225, 231)';
        },

        // Add new category
        addNewCategory() {
            let categoryName = document.getElementById("categoryName").value;
            let imgFile = document.getElementById("categoryImg").files[0];
            let valueImgSrc = document.getElementById("categoryImg").value;

            if(categoryName == '') {
                document.getElementById("categoryName").style.borderColor = 'red';
                return;
            }

            if(valueImgSrc == '') {
                alert("Please select image for category!");
                return;
            }

            const formData = new FormData();
            formData.append('name', categoryName);
            formData.append('image', imgFile);

            axios
                .post('http://localhost:8080/api/v1/category', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject.response.data);
                    alert(reject.response.data);
                });
        },
        // End add new category

        // Close popup add new category
        closePopupAddCategory() {
            let theAddNewCategory = document.querySelector('#the-add-category');
            theAddNewCategory.style.opacity = '0';
            theAddNewCategory.style.pointerEvents = 'none';
        },
        // End close popup add new category
    },

}
</script>

<style>

</style>