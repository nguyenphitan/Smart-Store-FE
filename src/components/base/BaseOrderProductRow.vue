<template>
    <div id="base-order-product-row">
        <!-- Container -->
        <div id="order-product-row-container" class="t-flex t-align-center">
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
                    <input :class="'edit-product-' + id" class="input-field input-price" readonly type="text" :value="formatPrice(price) + ' VND'">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Quantity:</span>
                    <input :class="'edit-product-' + id" class="input-field input-inventory" readonly type="text" :value="quantity">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Category:</span>
                    <select 
                        :class="'product-category-' + id"
                        class="product-category" 
                        name="product-category" 
                        style="border: 1px solid #ccc; outline: none; border-radius: 8px; margin-left: 12px; padding: 4px 8px; display: none;">
                        <!-- <option
                            v-for="(item, key) in listCategory" 
                            :key="key" 
                            :value="item.id"
                            :selected="item.id == categoryId"
                        > {{ item.name }} </option> -->
                    </select>
                    <input :class="'edit-product-' + id" class="input-field input-category" readonly type="text" :value="category">
                </div>

                <div style="line-height: 12px;">
                    <span style="font-weight: 600;">Discount:</span>
                    <input :class="'edit-product-' + id" class="input-field input-discount" readonly type="text" :value="discount + '%'">
                </div>

            </div>
        </div>
        <!-- End Container -->
    </div>
</template>

<script>

export default {
    name: 'base-order-product-row',
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
    methods: {
        // Format price:
        formatPrice(value) {
            let val = (value/1).toFixed(0).replace('.', ',')
            return val.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".")
        },
    },
}
</script>

<style scoped>
#base-order-product-row #order-product-row-container {
    border-radius: 8px;
    background-color: #fff;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 6px 26px;
    margin: 12px 0;
    padding: 4px;
}

#base-order-product-row i.t-pointer:hover {
    color: rgb(233, 69, 96);
}

#base-order-product-row input, .t-readOnly {
    border: none;
    outline: none;
    font-style: italic;
    font-size: 14px;
    margin-left: 2px;
    margin-top: 4px;
    margin-bottom: 4px;
    padding: 4px 8px;
}

#base-order-product-row .input-inventory {
    width: 100px;
}


</style>