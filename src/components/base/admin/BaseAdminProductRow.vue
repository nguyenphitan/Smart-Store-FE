<template>
    <div id="base-product-row">
        <!-- Container -->
        <div id="product-row-container" class="t-flex t-align-center">
            <div style="margin-right: 24px;">
                <img :src="require('@/assets/imgs/' + imgSrc)" alt="product image" width="80px">
            </div>
            <div class="t-flex" style="width: 100%; flex-wrap: wrap;">
                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Name:</span>
                    <input :class="'edit-product-' + id" class="input-field input-name" readonly type="text" :value="name">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Price:</span>
                    <input :class="'edit-product-' + id" class="input-field input-price" readonly type="number" min="1" :value="price">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Inventory:</span>
                    <input :class="'edit-product-' + id" class="input-field input-inventory" readonly type="number" min="0" :value="quantity">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Category:</span>
                    <select 
                        :class="'product-category-' + id"
                        class="product-category" 
                        name="product-category" 
                        style="border: 1px solid #ccc; outline: none; border-radius: 8px; margin-left: 12px; padding: 4px 8px; display: none;">
                        <option
                            v-for="(item, key) in listCategory" 
                            :key="key" 
                            :value="item.id"
                            :selected="item.id == categoryId"
                        > {{ item.name }} </option>
                    </select>
                    <input :class="'edit-product-' + id" class="input-field input-category" readonly type="text" :value="category">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Discount:</span>
                    <input :class="'edit-product-' + id" class="input-field input-discount" readonly type="text" min="0" :value="discount + '%'">
                </div>

            </div>
            <div style="width: 100px; display: flex;">
                <i @click="saveUpdate($event, id)" :class="'icon-save-' + id" style="display: none; padding: 8px; margin-right: 8px;" class="t-save-cancel t-pointer fa-regular fa-floppy-disk"></i>
                <i @click="hideSaveAndCancel(id)" :class="'icon-cancel-' + id" style="display: none; padding: 8px;" class="t-save-cancel t-pointer fa-solid fa-ban"></i>

                <i @click="enableInput(id)" :class="'icon-edit-' + id" style="padding: 8px; margin-right: 8px;" class="t-edit-delete t-pointer fa-regular fa-pen-to-square"></i>
                <i @click="deleteEvent($event, id)" :class="'icon-delete-' + id" style="padding: 8px;" class="t-edit-delete t-pointer fa-regular fa-trash-can"></i>
            </div>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>
import axios from 'axios'

export default {
    name: 'base-product-row',
    props: {
        id: {
            type: Number,
            default: 1
        },
        imgSrc: {
            type: String,
            default: 'urus.webp'
        },
        name: {
            type: String,
            default: 'IPhone 15 Promax'
        },
        price: {
            type: Number,
            default: 199000
        },
        quantity: {
            type: Number,
            default: 100
        },
        category: {
            type: String,
            default: 'Mobile Phone'
        },
        categoryId: {
            type: Number,
            default: 1
        },
        discount: {
            type: Number,
            default: 0
        },
    },
    beforeCreate() {
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
    data() {
        return {
            // List of category:
            listCategory: [],
        }
    },
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },

        // Hide select category
        hideCategory(id) {
            // hide select category
            let selectCategory = '.product-category-' + id;
            let inputCategory = '.edit-product-' + id + '.input-category';
            document.querySelector(selectCategory).style.display = 'none';
            document.querySelector(inputCategory).style.display = 'inline-block';
        },

        // Hide select category
        hideAllCategory() {
            // hide select category
            let selectCategory = '#base-product-row .product-category';
            let selects = document.querySelectorAll(selectCategory);
            for(let select of selects) {
                select.style.display = 'none';
            }

            // Show input
            let inputCategoryQuery = '.input-category';
            let inputCategorys = document.querySelectorAll(inputCategoryQuery);
            for(let input of inputCategorys) {
                input.style.display = 'inline-block';
            }
            // console.log(document.querySelector(inputCategory));
        },

        // Show select category
        showCategory(id) {
            // show select category
            let selectCategory = '.product-category-' + id;
            let inputCategory = '.edit-product-' + id + '.input-category';
            document.querySelector(selectCategory).style.display = 'inline-block';
            document.querySelector(inputCategory).style.display = 'none';
        },

        // Show icon: Save & Cancel
        showSaveAndCancel(id) {
            // Hide save and cancel of another
            let saveAndCancels = document.querySelectorAll('.t-save-cancel');
            for(let icon of saveAndCancels) {
                icon.style.display = 'none';
            }

            // Show edit and delete of another
            let editAndDeletes = document.querySelectorAll('.t-edit-delete');
            for(let icon of editAndDeletes) {
                icon.style.display = 'block';
            }

            // Show in target row
            let saveIconQuery = '.icon-save-' + id;
            let cancelIconQuery = '.icon-cancel-' + id;
            document.querySelector(saveIconQuery).style.display = 'block';
            document.querySelector(cancelIconQuery).style.display = 'block';

            let editIconQuery = '.icon-edit-' + id;
            let deleteIconQuery = '.icon-delete-' + id;
            document.querySelector(editIconQuery).style.display = 'none';
            document.querySelector(deleteIconQuery).style.display = 'none';
        },

        // Hide icon: Save & Cancel
        hideSaveAndCancel(id) {
            let saveAndCancels = document.querySelectorAll('.t-save-cancel');
            for(let icon of saveAndCancels) {
                icon.style.display = 'none';
            }

            let editIconQuery = '.icon-edit-' + id;
            let deleteIconQuery = '.icon-delete-' + id;
            document.querySelector(editIconQuery).style.display = 'block';
            document.querySelector(deleteIconQuery).style.display = 'block';

            this.disAbleAllInput();

            // Hide select category:
            this.hideCategory(id);
        },

        // Disable all input:
        disAbleAllInput() {
            let inputs = document.querySelectorAll('.input-field');
            
            for(let input of inputs) {
                input.setAttribute("readonly", "true");
                input.style.border = 'none';
            }
        },

        // Enable input:
        enableInput(id) {
            this.disAbleAllInput(id);
            let classNameQuery = '.edit-product-' + id;
            let inputs = document.querySelectorAll(classNameQuery);
            
            for(let input of inputs) {
                input.attributes.removeNamedItem("readonly");
                input.style.border = '1px solid #ccc';
                input.style.borderRadius = '8px';
            }

            // show icon save & cancel
            this.showSaveAndCancel(id);

            // Hide all category select
            this.hideAllCategory();

            // show category select
            this.showCategory(id);
        },

        // Validate only number:
        isNumeric(value) {
            return /^\d+$/.test(value);
        },

        // Save update product:
        saveUpdate(e, id) {
            let me = this;
            console.log(e.target);
            let classNameQuery = '.edit-product-' + id;
            let selectcategoryQuery = '.product-category-' + id;

            let inputs = document.querySelectorAll(classNameQuery);
            let categoryIdUpdate = document.querySelector(selectcategoryQuery).value;
            console.log("category id: " + categoryIdUpdate);

            if(inputs[0].value == '') {
                alert("Product name is require!");
                return;
            }

            // Validate:
            if(inputs[1].value == '' || inputs[2].value == '' 
                || inputs[4].value == '' || !this.isNumeric(inputs[4].value.split("%")[0])) {
                alert("Wrong format number!");
                return;
            }

            if(Number(inputs[1].value) < 0 || Number(inputs[2].value) < 0 
                || Number(inputs[4].value.split("%")[0]) < 0 
                || Number(inputs[4].value.split("%")[0]) > 100 ) 
            {
                alert("Wrong format number!");
                return;
            }

            // request
            let productDTO = {
                name: inputs[0].value,
                price: Number(inputs[1].value),
                quantity: Number(inputs[2].value),
                category: {
                    id: Number(categoryIdUpdate)
                },
                discount: Number(inputs[4].value.split("%")[0])
            }

            // call api
            axios
                .put(`http://localhost:8080/api/v1/products/${id}`, productDTO)
                .then((response) => {
                    console.log(response);
                    alert("Update success!");
                    // window.location.reload();
                    // Hide save and cancel of another
                    let saveAndCancels = document.querySelectorAll('.t-save-cancel');
                    for(let icon of saveAndCancels) {
                        icon.style.display = 'none';
                    }

                    // Show edit and delete of another
                    let editAndDeletes = document.querySelectorAll('.t-edit-delete');
                    for(let icon of editAndDeletes) {
                        icon.style.display = 'block';
                    }
                    
                    me.disAbleAllInput();
                    me.hideAllCategory();
                    me.$emit("reloadPage", e);
                })
                .catch((reject) => {
                    console.log(reject);
                });
        },

        // Delete product:
        deleteEvent(e, id) {
            let me = this;
            console.log(e);
            if(confirm("Are you sure?")) {
                axios
                    .delete(`http://localhost:8080/api/v1/products/${id}`)
                    .then((response) => {
                        console.log(response);
                        alert("Delete success!")
                        // window.location.reload();
                        me.disAbleAllInput();
                        me.hideAllCategory();
                        me.$emit("reloadPage", e);
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }
        }
    },
}
</script>

<style scoped>
#base-product-row #product-row-container {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 26px;
    margin: 12px;
    padding: 4px;
}

#base-product-row i.t-pointer:hover {
    color: rgb(233, 69, 96);
}

#base-product-row input, .t-readOnly {
    border: none;
    outline: none;
    font-style: italic;
    font-size: 14px;
    margin-left: 2px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 4px 8px;
}

#base-product-row .input-inventory {
    width: 100px;
}


</style>