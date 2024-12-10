<template>
    <div id="the-body">
        <!-- The body -->
        <div id="the-body-container">
            <!-- Begin top body -->
            <div id="body-top">
                <div class="body-top-wrapper t-w-80">
                    <!-- Begin navbar -->
                    <!-- <the-navbar :data="listCategory"></the-navbar> -->
                    <!-- End navbar -->

                    <!-- Begin carousel -->
                    <base-carousel :data="carouselData"></base-carousel>
                    <!-- End carousel -->
                </div>
            </div>
            <!-- End top body -->

            <!-- Begin body center -->
            <div id="body-center">
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

                <!-- Begin Top Categories -->
                <div class="t-w-80 top-category">
                    <h2 class="center-title top-category-title"> 
                        <!-- <i class="fa-solid fa-list"></i> -->
                        <svg xmlns="http://www.w3.org/2000/svg" id="glyph" height="24" viewBox="0 0 64 64" width="24" class="injected-svg" data-src="/assets/images/icons/categories.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m29 11v14a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4-4v-14a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm24-4h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm-28 28h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm21 0a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z" fill="#e94560"></path></svg>
                        Top Categories
                    </h2>
                    <base-carousel-card 
                        :datas="topCategoryData" 
                        :status="topCategory"
                        :settings="topCategorySetting"
                    ></base-carousel-card>
                </div>
                <!-- End Top Categories -->

                <!-- Begin New Arrivals -->
                <div class="t-w-80 new-arrivals">
                    <div class="center-title">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/new-product-1.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <g clip-path="url(#clip0-65)">
                            <path d="M22.9347 12.001L24 10.1003L22.3995 8.62199L22.8254 6.48519L20.8463 5.57376L20.5911 3.40991L18.4273 3.15468L17.5158 1.17562L15.379 1.60157L13.9006 0.000976562L12 1.0663L10.0994 0.000976562L8.62106 1.60152L6.48427 1.17557L5.57283 3.15463L3.40898 3.40987L3.15375 5.57371L1.17469 6.48515L1.60064 8.62194L0 10.1003L1.06533 12.0009L0 13.9016L1.60055 15.3799L1.17459 17.5167L3.15366 18.4281L3.40889 20.592L5.57273 20.8472L6.48417 22.8263L8.62097 22.4003L10.0993 24.0009L11.9999 22.9356L13.9005 24.0009L15.3788 22.4003L17.5156 22.8263L18.4271 20.8472L20.5909 20.592L20.8462 18.4281L22.8252 17.5167L22.3993 15.3799L23.9998 13.9016L22.9347 12.001ZM8.62936 14.0641H7.61878L5.78016 11.7887V14.0641H4.50881V9.43504H5.49984L7.35802 11.7887V9.43504H8.62936V14.0641ZM12.7238 14.0641H9.42483V9.43504H12.6652V10.5434H10.6962V11.1954H12.3783V12.2255H10.6962V12.9557H12.7239V14.0641H12.7238ZM18.0765 14.0641H17.0203L16.3618 12.408L15.7098 14.0641H14.6536L12.8411 9.43504H14.2168L15.2209 12.6102L15.5403 11.6453L14.7905 9.43504H15.9576L16.3618 10.8629L16.7726 9.43504H17.9397L17.1768 11.6453L17.5094 12.6102L18.507 9.43504H19.8891L18.0765 14.0641Z" fill="#68C944"></path>
                            </g>
                            <defs>
                            <clipPath id="clip0-65">
                            <rect width="24" height="24" fill="white"></rect>
                            </clipPath>
                            </defs>                                 
                        </svg>
                        New Arrivals
                    </div>

                    <!-- Begin new arrivals content -->
                    <div class="new-arrivals-content t-flex t-justify-between">
                        <base-mini-card
                            v-for="(product, key) in newProducts"
                            :key="key"
                            :imgURL="require('@/assets/imgs/' + product.photos)"
                            :price="product.price"
                            :productName="product.name"
                            :productId="product.id"
                        ></base-mini-card>
                    </div>
                    <!-- End new arrivals content -->
                </div>
                <!-- End New Arrivals -->

                <!-- Begin casousel discout -->
                <!-- <div id="discount-product">
                    <div class="t-w-80 flash-deal">
                        <h2 class="center-title flash-deal-title"> 
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/light.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M19.0765 9.48063H12.1242L15.5905 0L5 14.5194H11.9522L8.48592 24L19.0765 9.48063Z" fill="#D23F57"></path>
                            </svg>
                            Flash Deals
                        </h2>
                        <base-carousel-card 
                            :datas="flashDealData" 
                            :status="productCard"
                            :settings="productSetting"
                        ></base-carousel-card>
                    </div>
                </div> -->
                <!-- End casousel discout -->


                <!-- Begin show all product -->
                <div id="show-products">
                    <!-- Left -->
                    <div id="product-category" style="position: sticky; top: 124px; left: 0; z-index: 2;">
                        <div class="category-container">
                            <div class="phone-nav" style="padding: 0 16px;">
                                <base-category-card
                                    @filterByCategory="filterByCategory"
                                    :cardName="'All'"
                                    :extendIcon="false"
                                    :categoryId="0"
                                ></base-category-card>
                                <base-category-card
                                    @filterByCategory="filterByCategory"
                                    v-for="(item, key) in listCategory"
                                    :key="key"
                                    :cardName="item.name"
                                    :iconClassLeft="item.iconClassLeft"
                                    :extendIcon="false"
                                    :categoryId="item.id"
                                    :imgSrc="item.imgSrc"
                                ></base-category-card>
                                <div>
                                    <input @change="searchProductByName" id="search-product" type="text" name="search-product" placeholder="Enter name..."/>
                                </div>
                            </div>

                        </div>
                    </div>

                    <!-- Right -->
                    <div id="list-product">
                        <h3 style="font-weight: bold;">Products</h3>
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
import BaseCarouselCard from '../../base/BaseCarouselCard.vue'
import BaseMiniCard from '../../base/BaseMiniCard.vue'
import BaseCategoryCard from '@/components/base/BaseCategoryCard.vue'
import BaseListProduct from '@/components/base/BaseListProduct.vue'
import BaseCarouselDiscount from '@/components/base/BaseCarouselDiscount.vue'
import axios from 'axios'

export default {
    name: 'the-body',
    components: {
        // TheNavbar,
        BaseCarousel,
        BaseCarouselCard,
        BaseMiniCard,
        BaseCategoryCard,
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
            carouselData: [require('@/assets/imgs/carousel.png'), 
                            require('@/assets/imgs/11.Netgear2020.png'), 
                            require('@/assets/imgs/10.SonyPS4.png')],
            
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
        filterByCategory(e, categoryId) {
            console.log(e.target);
            this.activeCategoryFilter(e, categoryId);

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