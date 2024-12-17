<template>
    <div id="the-body">
        <!-- The body -->
        <div id="the-body-container">
            <!-- Begin carousel -->
            <base-carousel :data="carouselData"></base-carousel>
            <!-- End carousel -->
            <!-- Begin top body -->
            <div id="body-top">
                <div class="body-top-wrapper t-w-80">
                    <!-- Begin navbar -->
                    <!-- <the-navbar :data="listCategory"></the-navbar> -->
                    <!-- End navbar -->

                    
                </div>
            </div>
            <!-- End top body -->

            <!-- Begin body center -->
            <div id="body-center">
                <!-- About Us -->
                <div id="t-about-us">
                    <div id="t-about-us-container">
                        <div class="t-about-1">
                            <div class="t-about1-left">
                                <div class="t-left-child">
                                    <h3 class="t-text-center">NỘI THẤT TINH TẾ</h3>
                                    <p class="t-text-center">
                                        Với kinh nghiệm hơn 25 năm trong hoàn thiện nội thất. 
                                        Furniture mang đến giải pháp toàn diện trong bao gồm thiết kế, 
                                        trang trí và cung cấp nội thất trọn gói. 
                                        Sở hữu đội ngũ chuyên nghiệp và hệ thống 10 cửa hàng, 
                                        Furniture là lựa chọn cho không gian tinh tế và hiện đại.
                                    </p>
                                    <router-link :to="{ name: 'aboutUs'}" class="t-title t-hover-red">
                                        <base-button :buttonName="'Xem thêm'"></base-button>
                                    </router-link>
                                    
                                </div>
                            </div>
                            <div class="t-about1-right">

                            </div>
                        </div>
                    </div>
                </div>
                <!-- End about Us -->

                <!-- Begin Flash Deal -->
                <div class="t-w-80 flash-deal">
                    <h2 id="flash-deal" class="center-title flash-deal-title"> 
                        <!-- <i class="fa-solid fa-bolt"></i> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/light.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                        <path d="M19.0765 9.48063H12.1242L15.5905 0L5 14.5194H11.9522L8.48592 24L19.0765 9.48063Z" fill="#D23F57"></path>
                        </svg>
                        Flash Deals
                    </h2>
                    <base-carousel-discount 
                        :productDiscounts="productDiscounts"
                        :settings="productSetting"
                    ></base-carousel-discount>
                </div>
                <!-- End Flash Deal -->

                <!-- Corner of inspiration -->
                <div id="t-inspiration">
                    <div id="t-inspiration-container">
                        <h3 class="t-text-center">GÓC CẢM HỨNG</h3>
                        <div class="t-inspiration-1">
                            <div class="t-inspiration1-left">
                                <div class="t-bg-img-left"></div>
                                <h4 class="t-text-center t-top-16">Khám Phá Không Gian Thảo Điền</h4>
                                <p class="t-text-center">Nhà Thảo Điền mang đến một không gian sống hiện đại, tinh tế và đầy cảm hứng.</p>
                            </div>
                            <div class="t-inspiration1-right">
                                <div class="t-bg-img-right"></div>
                                <h4 class="t-text-center t-top-16">Ghế Sofa Cho Không Gian Nhỏ</h4>
                                <p class="t-text-center">Ghế sofa là thực sự cần thiết cho không gian phòng khách trở nên sang trọng và tinh tế.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <!-- End corner of inspiration -->

                <!-- Begin show all product -->
                <div id="show-products">
                    <div id="list-product">
                        <h3 style="font-weight: bold;">Products</h3>
                        <!-- Filter & search -->
                        <div id="t-product-category" style="top: 124px; left: 0; display: flex; justify-content: center;">
                            <input @change="searchProductByName" style="width: 50%;" id="search-product" type="text" name="search-product" placeholder="Enter name..."/>
                            <select @change="filterByCategory" class="t-select-filter-category" name="category" id="" style="width: 266px; height: 40px; padding: 0.35rem 8px; margin: 1rem 0.1rem; border-radius: 8px; border: 1px solid #dfdede; background-color: rgb(246, 249, 252);">
                                <option value="0">All</option>
                                <option 
                                    class="t-category-option"
                                    v-for="(item, index) in listCategory" 
                                    :key="index"
                                    :value="item.id"
                                >{{ item.name }}</option>
                            </select>
                        </div>
                        <!-- Begin render list product -->
                        <base-list-product
                            :products="listProducts"
                            :totalPage="productPageable.totalPages"
                            @goToPage="goToPage"
                        ></base-list-product>
                        <!-- End render list product -->
                    </div>

                </div>
                <!-- End show all product -->

            </div>
            <!-- End body center -->
        </div>
        <!-- End the body -->

        <br><br><br><br><br>

    </div>
</template>

<script>
// import TheNavbar from '../../layout/components/TheNavbar.vue'
import BaseCarousel from '../../base/BaseCarousel.vue'
// import BaseCarouselCard from '../../base/BaseCarouselCard.vue'
// import BaseMiniCard from '../../base/BaseMiniCard.vue'
// import BaseCategoryCard from '@/components/base/BaseCategoryCard.vue'
import BaseListProduct from '@/components/base/BaseListProduct.vue'
import BaseCarouselDiscount from '@/components/base/BaseCarouselDiscount.vue'
import BaseButton from '@/components/base/BaseButton.vue'
import axios from 'axios'

export default {
    name: 'the-body',
    components: {
        // TheNavbar,
        BaseCarousel,
        BaseButton,
        // BaseCarouselCard,
        // BaseMiniCard,
        // BaseCategoryCard,
        BaseListProduct,
        BaseCarouselDiscount,
    },
    mounted () {
        window.scrollTo(0, 0)
    },
    data() {
        return {
            // List all product
            listProducts: [],

            // product pageable
            productPageable: {},

            // List of product discounts
            productDiscounts: [],

            // List of new products
            newProducts: [],

            // Banner data
            carouselData: [require('@/assets/imgs/banner2.jpg'), 
                            require('@/assets/imgs/banner3.jpg'), 
                            require('@/assets/imgs/banner1.jpg')],
            
            // Show carousel product card
            productCard: 'product-card',
            // Show carousel base top category
            topCategory: 'top-category',
            
            productSetting: { // Setting for carousel
                "dots": true,
                "infinite": true,
                "initialSlide": 2,
                "speed": 500,
                "slidesToShow": 4,
                "slidesToScroll": 1,
                "swipeToSlide": true
            },

            // Top category data
            topCategoryData: [
                {categoryName: 'Glass', imgURL: require('@/assets/imgs/top-category-3.webp')},
                {categoryName: 'Watch', imgURL: require('@/assets/imgs/top-category-2.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-1.webp')},
                {categoryName: 'Glass', imgURL: require('@/assets/imgs/top-category-3.webp')},
                {categoryName: 'Watch', imgURL: require('@/assets/imgs/top-category-2.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-1.webp')}
            ],
            topCategorySetting: { // Setting for carousel
                "dots": true,
                "infinite": true,
                "initialSlide": 2,
                "speed": 500,
                "slidesToShow": 3,
                "slidesToScroll": 1,
                "swipeToSlide": true
            },

            // Top rating data
            ratingData: [
                {iconStar: true, imgURL: require('@/assets/imgs/top-rating-1.webp'), price: 8990000, productName: 'Camera'},
                {iconStar: true, imgURL: require('@/assets/imgs/top-rating-2.webp'), price: 199000, productName: 'Shoe'},
                {iconStar: true, imgURL: require('@/assets/imgs/top-rating-3.webp'), price: 5990000, productName: 'Phone'},
                {iconStar: true, imgURL: require('@/assets/imgs/top-rating-4.webp'), price: 99000, productName: 'Watch'},
            ],

            // List category
            listCategory: [],

        }
    },

    beforeCreate() {
        let role = localStorage.getItem('role');
        if(role == "ADMIN") {
            window.location.href = '/#/admin';
            return;
        }


        let me = this;

        // Get all product discount
        axios
            .get("http://localhost:8080/api/v1/products/discounts")
            .then((response) => {
                console.log('Get all product discount success!');
                console.log(response.data);
                me.productDiscounts = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all product discount

        // Get all product
        axios
            .get("http://localhost:8080/api/v1/products")
            .then((response) => {
                console.log('Get all product success!');
                console.log(response.data);
                me.productPageable = response.data;
                me.listProducts = response.data.content;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all product
        
        // Get all category
        axios
            .get("http://localhost:8080/api/v1/category")
            .then((response) => {
                console.log('Get all category success!');
                console.log(response.data);
                me.listCategory = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get all category

        // Get new products
        axios
            .get("http://localhost:8080/api/v1/products/new")
            .then((response) => {
                console.log('Get new products success!');
                console.log(response.data);
                me.newProducts = response.data;
            })
            .catch((reject) => {
                console.log(reject);
            });
        // End get new products

    },

    watch: {
        listProducts: {
            deep: true
        }
    },

    methods: {
        // active category filter:
        activeCategoryFilter(e, categoryId) {
            this.clearCategoryOtherActive();
            if(e.target.classList.contains("category-card-container")) {
                e.target.classList.add("category-active");
                e.target.setAttribute("t-categoryId", categoryId);
            } else if(e.target.parentElement.classList.contains("category-card-container")) {
                e.target.parentElement.classList.add("category-active");
                e.target.parentElement.setAttribute("t-categoryId", categoryId);
            } else if(e.target.parentElement.parentElement.classList.contains("category-card-container")) {
                e.target.parentElement.parentElement.classList.add("category-active");
                e.target.parentElement.parentElement.setAttribute("t-categoryId", categoryId);
            }
        },

        // Clear category other active:
        clearCategoryOtherActive() {
            let categories = document.querySelectorAll("#the-body .category-active");
            for(let category of categories) {
                category.classList.remove("category-active");
                category.removeAttribute("t-categoryId");
            }
        },

        // Filter by category:
        filterByCategory(e) {
            console.log(e.target);
            let categoryId = e.target.value;

            // clear input search:
            document.querySelector("#show-products #search-product").value = '';

            let me = this;

            // All category:
            if(categoryId == 0) {
                axios
                    .get(`http://localhost:8080/api/v1/products`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            }
            else {
                axios
                    .get(`http://localhost:8080/api/v1/products?categoryId=${categoryId}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        },

        // Search product:
        searchProductByName(e) {
            let me = this;
            console.log(e.target);

            let categoryFilter = document.querySelector("#the-body .category-active");
            let searchText = e.target.value;
            console.log(searchText);
            if(searchText == '') {
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?categoryId=${categoryId}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                        
                } else {
                    // Get all product
                    axios
                        .get(`http://localhost:8080/api/v1/products`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }

            }
            else {
                // Search product (like)
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?categoryId=${categoryId}&search=${searchText}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                        
                } else {
                    axios
                        .get(`http://localhost:8080/api/v1/products?search=${searchText}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }
            }

        },

        // scroll to list product top:
        scrollToListProduct() {
            let productDiv = document.querySelector("#the-body #list-product");
            productDiv.scrollIntoView({behavior: 'smooth'});
        },

        // Go to page:
        goToPage(page) {
            console.log(page);
            let me = this;

            let categoryFilter = document.querySelector("#the-body .category-active");
            let searchText = document.querySelector("#show-products #search-product").value;
            
            if(searchText != '') {
                if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                    let categoryId = categoryFilter.getAttribute("t-categoryId");

                    axios
                        .get(`http://localhost:8080/api/v1/products?categoryId=${categoryId}&search=${searchText}&page=${page-1}`)
                        .then((response) => {
                            me.productPageable = response.data;
                            me.listProducts = response.data.content;
                            me.scrollToListProduct();
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });

                } else {
                    axios
                    .get(`http://localhost:8080/api/v1/products?search=${searchText}&page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
                }
                    
            } else if(categoryFilter != null && categoryFilter.getAttribute("t-categoryId") != 0) {
                let categoryId = categoryFilter.getAttribute("t-categoryId");

                axios
                    .get(`http://localhost:8080/api/v1/products?categoryId=${categoryId}&page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });

            } else {
                axios
                    .get(`http://localhost:8080/api/v1/products?page=${page-1}`)
                    .then((response) => {
                        me.productPageable = response.data;
                        me.listProducts = response.data.content;
                        me.scrollToListProduct();
                    })
                    .catch((reject) => {
                        console.log(reject);
                    });
            }

        },


    },

}
</script>

<style scoped>
@import url('../../../styles/layout/body.css');
</style>