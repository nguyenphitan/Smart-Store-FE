<template>
    <div id="the-add-new-product">
        <form @submit="addNewProduct">
            <!-- Left -->
            <div class="product-img">
                <input required @change="uploadImg" type="file" name="product-img">
                <div class="show-img">
                    <img src="" alt="image">
                </div>
            </div>

            <!-- Right -->
            <div class="product-info">
                <p>Name:</p>
                <input required class="product-name" type="text" name="product-name">
                <br>
                <p>Price:</p>
                <input required class="product-price" type="number" name="product-price">
                <br>
                <p>Inventory:</p>
                <input required class="product-quantity" type="number" name="product-quantity">
                <br>
                <p>Category:</p>
                <div class="div-category-save">
                    <select class="product-category" name="product-category">
                        <option
                            v-for="(item, key) in listCategory" 
                            :key="key" 
                            :value="item.id"
                        > {{ item.name }} </option>
                    </select>
                    <button class="save-new-product" type="submit">Save</button>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from 'axios';
// axios.defaults.withCredentials = true;
// axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';

export default {
    name: 'add-new-product',
    beforeCreate() {
        let role = localStorage.getItem("role");
        if(role != "ADMIN") {
            window.location.href = "/#/";
            return;
        }
        
        let me = this;
        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                me.listCategory = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all category
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // List of category
            listCategory: [],
        }
    },
    methods: {
        
        // Upload img
        uploadImg() {
            let imgFile = document.querySelector("#the-add-new-product input[name='product-img']").files[0];
            let imgUrl = URL.createObjectURL(imgFile);
            let showImg = document.querySelector("#the-add-new-product .show-img img");
            showImg.src = imgUrl;
        },

        // Add new product
        addNewProduct() {
            let productName = document.querySelector('#the-add-new-product .product-name').value;
            productName = encodeURIComponent(productName);
            let productPrice = document.querySelector('#the-add-new-product .product-price').value;
            let productQuantity = document.querySelector('#the-add-new-product .product-quantity').value;
            let categoryId = document.querySelector('#the-add-new-product .product-category').value;
            let imgFile = document.querySelector("#the-add-new-product input[name='product-img']").files[0];
            // let formData = new FormData();
            // formData.append("file", imgFile);

            const formData = new FormData();
            formData.append('name', productName);
            formData.append('price', productPrice);
            formData.append('quantity', productQuantity);
            formData.append('categoryId', categoryId);
            formData.append('image', imgFile);

            // call api:
            axios
                .post('http://localhost:8080/admin/api/v1/products', formData, {
                    headers: {
                        'Content-Type': 'multipart/form-data'
                    }
                })
                .then((response) => {
                    console.log(response);
                    alert("Add new product successful");
                    window.location.reload();
                })
                .catch((reject) => {
                    console.log(reject);
                    alert("Fail to add new product!");
                });



        },

    }
}
</script>

<style>
@import url('../../../styles/layout/addNewProduct.css');
</style>