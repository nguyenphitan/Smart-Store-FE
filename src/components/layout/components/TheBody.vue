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
                        <svg xmlns="http://www.w3.org/2000/svg" id="glyph" height="24" viewBox="0 0 64 64" width="24" class="injected-svg" data-src="/assets/images/icons/categories.svg" xmlns:xlink="http://www.w3.org/1999/xlink"><path d="m29 11v14a4 4 0 0 1 -4 4h-14a4 4 0 0 1 -4-4v-14a4 4 0 0 1 4-4h14a4 4 0 0 1 4 4zm24-4h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm-28 28h-14a4 4 0 0 0 -4 4v14a4 4 0 0 0 4 4h14a4 4 0 0 0 4-4v-14a4 4 0 0 0 -4-4zm21 0a11 11 0 1 0 11 11 11 11 0 0 0 -11-11z" fill="#E94560"></path></svg>
                        Top Categories
                    </h2>
                    <base-carousel-card 
                        :datas="topCategoryData" 
                        :status="topCategory"
                        :settings="topCategorySetting"
                    ></base-carousel-card>
                </div>
                <!-- End Top Categories -->

                <!-- Begin top rating -->
                <div class="t-w-80 top-rating">
                    <div class="center-title">
                        <!-- <i class="fa-solid fa-medal"></i> -->
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" class="injected-svg" data-src="/assets/images/icons/ranking-1.svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                            <path d="M1.99309 16.5377L1.49359 17.0365L5.70897 18.0092C5.77746 18.025 5.84014 18.0597 5.88987 18.1093C5.93959 18.159 5.97437 18.2216 5.99022 18.2901L6.96297 22.5062L7.46247 22.0063L6.43722 17.5622L1.99309 16.5377Z" fill="#FAB400"></path>
                            <path d="M11.9999 3.375C10.8133 3.375 9.65322 3.72689 8.66652 4.38618C7.67983 5.04547 6.91079 5.98254 6.45666 7.0789C6.00254 8.17526 5.88372 9.38166 6.11523 10.5455C6.34674 11.7094 6.91819 12.7785 7.7573 13.6176C8.59642 14.4568 9.66551 15.0282 10.8294 15.2597C11.9933 15.4912 13.1997 15.3724 14.296 14.9183C15.3924 14.4642 16.3295 13.6951 16.9888 12.7084C17.648 11.7217 17.9999 10.5617 17.9999 9.375C17.9983 7.78422 17.3656 6.25908 16.2407 5.13422C15.1159 4.00937 13.5907 3.37669 11.9999 3.375ZM14.2957 10.2626L14.9883 13.0343C15.0069 13.1087 15.0023 13.187 14.975 13.2587C14.9477 13.3303 14.8991 13.3919 14.8357 13.4351C14.7734 13.4772 14.7001 13.4997 14.6249 13.5C14.5466 13.5002 14.4703 13.4756 14.4067 13.4299L11.9999 11.7109L9.59282 13.4299C9.5304 13.4745 9.45578 13.499 9.37903 13.4999C9.30228 13.5008 9.2271 13.4781 9.16365 13.4349C9.10019 13.3918 9.05151 13.3302 9.02418 13.2584C8.99685 13.1867 8.99218 13.1083 9.01082 13.0339L9.70382 10.2622L7.63457 8.53725C7.57566 8.48782 7.53338 8.42147 7.51345 8.3472C7.49352 8.27294 7.4969 8.19434 7.52313 8.12205C7.54937 8.04977 7.59719 7.9873 7.66012 7.94311C7.72305 7.89892 7.79805 7.87514 7.87494 7.875H10.6042L11.6441 4.75612C11.6687 4.6811 11.7164 4.61577 11.7804 4.56946C11.8444 4.52315 11.9213 4.49822 12.0003 4.49822C12.0793 4.49822 12.1563 4.52315 12.2202 4.56946C12.2842 4.61577 12.3319 4.6811 12.3566 4.75612L13.3949 7.875H16.1249C16.202 7.87496 16.2772 7.89866 16.3403 7.94289C16.4035 7.98712 16.4514 8.04973 16.4777 8.12218C16.504 8.19464 16.5073 8.27343 16.4872 8.34783C16.4671 8.42224 16.4245 8.48864 16.3653 8.538L14.2957 10.2626Z" fill="#FAB400"></path>
                            <path d="M12.7692 8.36805L12.0001 6.0603L11.2306 8.36805C11.2058 8.44276 11.1581 8.50778 11.0943 8.55388C11.0305 8.59999 10.9538 8.62484 10.8751 8.62493H8.91046L10.3651 9.83655C10.4192 9.88175 10.4595 9.9413 10.4813 10.0084C10.5032 10.0754 10.5056 10.1473 10.4885 10.2157L9.98559 12.2276L11.7818 10.9447C11.8455 10.8992 11.9217 10.8748 11.9999 10.8748C12.0781 10.8748 12.1544 10.8992 12.218 10.9447L14.0142 12.2276L13.511 10.2157C13.4939 10.1472 13.4964 10.0754 13.5183 10.0083C13.5402 9.94124 13.5805 9.88171 13.6347 9.83655L15.089 8.62493H13.1251C13.0463 8.62492 12.9695 8.6001 12.9057 8.55399C12.8418 8.50788 12.794 8.44283 12.7692 8.36805Z" fill="#FAB400"></path>
                            <path d="M9.82497 17.6569C9.38171 17.8278 8.88992 17.8231 8.45002 17.6437C8.01011 17.4643 7.65527 17.1238 7.45797 16.6916C7.40527 16.574 7.32111 16.4733 7.21477 16.4005C7.10843 16.3277 6.98404 16.2857 6.85534 16.2791C6.3829 16.2539 5.9377 16.0501 5.60994 15.7089C5.28219 15.3677 5.0964 14.9147 5.09022 14.4416C5.08944 14.3123 5.05801 14.185 4.99849 14.0702C4.93897 13.9554 4.85307 13.8564 4.74784 13.7812L2.61859 15.9113L6.83397 16.884C6.90246 16.8998 6.96514 16.9344 7.01487 16.9841C7.06459 17.0338 7.09937 17.0964 7.11522 17.1649L8.08797 21.3806L11.253 18.2156C11.0438 18.1251 10.8532 17.9968 10.6905 17.8373C10.5801 17.7252 10.439 17.6483 10.285 17.6162C10.131 17.5841 9.97094 17.5982 9.82497 17.6569Z" fill="#FAB400"></path>
                            <path d="M14.2242 17.0588C14.489 17.1576 14.7814 17.152 15.0423 17.0432C15.3031 16.9344 15.5128 16.7304 15.6289 16.4727C15.752 16.1956 15.9523 15.9598 16.2059 15.7936C16.4595 15.6273 16.7556 15.5376 17.0588 15.5352C17.3415 15.5317 17.6123 15.4208 17.8162 15.2249C18.0201 15.0291 18.1419 14.763 18.1568 14.4807C18.1702 14.215 18.2566 13.9582 18.4064 13.7383C18.5563 13.5185 18.7638 13.3442 19.0062 13.2346C19.2643 13.1165 19.4677 12.9043 19.5748 12.6414C19.6819 12.3785 19.6847 12.0846 19.5825 11.8197C19.4722 11.5393 19.4461 11.2327 19.5076 10.9377C19.569 10.6426 19.7152 10.372 19.9283 10.1588C20.1281 9.95696 20.2433 9.68638 20.2503 9.40241C20.2572 9.11844 20.1555 8.84253 19.9658 8.63109C19.7874 8.43376 19.6668 8.1911 19.6172 7.92973C19.5677 7.66836 19.5911 7.3984 19.6849 7.14946C19.7837 6.88465 19.7781 6.59218 19.6693 6.33134C19.5604 6.0705 19.3565 5.86079 19.0988 5.74471C18.8218 5.6216 18.5861 5.42133 18.4198 5.16783C18.2536 4.91434 18.1638 4.61835 18.1613 4.31521C18.1575 4.03264 18.0465 3.76205 17.8507 3.55826C17.6549 3.35446 17.389 3.23269 17.1068 3.21759C16.8411 3.20414 16.5842 3.11777 16.3643 2.96794C16.1444 2.81811 15.97 2.61061 15.8603 2.36821C15.7421 2.11012 15.5299 1.9068 15.267 1.79971C15.0042 1.69261 14.7103 1.6898 14.4454 1.79184C14.165 1.90237 13.8584 1.92853 13.5633 1.8671C13.2682 1.80567 12.9975 1.65934 12.7845 1.44609C12.5796 1.25219 12.3101 1.14106 12.0281 1.13413C11.746 1.12721 11.4714 1.22498 11.2572 1.40859C11.06 1.58726 10.8173 1.70803 10.5559 1.75759C10.2945 1.80715 10.0244 1.78358 9.77554 1.68946C9.51073 1.59068 9.21826 1.59628 8.95742 1.70511C8.69657 1.81395 8.48686 2.01788 8.37079 2.27559C8.24768 2.55269 8.04737 2.78847 7.79379 2.95472C7.54022 3.12098 7.24412 3.21068 6.94092 3.21309C6.65822 3.2166 6.38744 3.32752 6.18353 3.52336C5.97962 3.71919 5.85784 3.98526 5.84292 4.26759C5.82932 4.5331 5.74287 4.78974 5.59304 5.00935C5.44322 5.22897 5.2358 5.40308 4.99354 5.51259C4.73529 5.63071 4.53186 5.84293 4.42474 6.10593C4.31763 6.36894 4.31492 6.6629 4.41717 6.92784C4.52747 7.20822 4.55351 7.51471 4.49209 7.80969C4.43067 8.10466 4.28447 8.37528 4.07142 8.58834C3.87175 8.79031 3.75669 9.06086 3.74973 9.34478C3.74276 9.62869 3.8444 9.90457 4.03392 10.1161C4.21236 10.3134 4.33299 10.5561 4.38254 10.8174C4.43209 11.0788 4.40865 11.3488 4.31479 11.5977C4.21601 11.8625 4.2216 12.155 4.33044 12.4158C4.43928 12.6767 4.64321 12.8864 4.90092 13.0025C5.17793 13.1256 5.41364 13.3259 5.57989 13.5793C5.74614 13.8328 5.83589 14.1288 5.83842 14.432C5.842 14.7146 5.95289 14.9853 6.14862 15.1893C6.34435 15.3932 6.61028 15.5151 6.89254 15.5303C7.15832 15.5436 7.4153 15.6299 7.63521 15.7798C7.85512 15.9296 8.02945 16.1372 8.13904 16.3797C8.25715 16.6378 8.46927 16.8411 8.73212 16.9481C8.99497 17.0551 9.28875 17.0579 9.55354 16.9557C9.73588 16.8855 9.92966 16.8498 10.125 16.8503C10.5346 16.8511 10.9272 17.014 11.217 17.3033C11.422 17.4972 11.6915 17.6082 11.9735 17.6152C12.2556 17.6221 12.5302 17.5244 12.7444 17.3408C12.9415 17.1626 13.1838 17.042 13.4447 16.9923C13.7057 16.9426 13.9754 16.9656 14.2242 17.0588ZM12 16.1251C10.665 16.1251 9.35997 15.7292 8.24994 14.9875C7.13991 14.2458 6.27475 13.1916 5.76385 11.9582C5.25296 10.7248 5.11929 9.3676 5.37974 8.05823C5.64019 6.74886 6.28307 5.54612 7.22707 4.60212C8.17107 3.65811 9.37381 3.01524 10.6832 2.75479C11.9926 2.49434 13.3498 2.62801 14.5832 3.1389C15.8166 3.64979 16.8708 4.51496 17.6125 5.62499C18.3542 6.73502 18.75 8.04006 18.75 9.37509C18.7481 11.1647 18.0363 12.8804 16.7708 14.1459C15.5054 15.4113 13.7896 16.1231 12 16.1251Z" fill="#FAB400"></path>
                            <path d="M17.1653 16.8838L21.3814 15.9111L19.3617 13.8921C19.3459 13.8996 19.3324 13.9105 19.3167 13.9176C19.1991 13.9705 19.0984 14.0547 19.0256 14.1611C18.9528 14.2675 18.9108 14.3919 18.9042 14.5206C18.8791 14.993 18.6752 15.4382 18.334 15.766C17.9928 16.0937 17.5397 16.2793 17.0667 16.2853C16.9064 16.2858 16.7497 16.3329 16.6158 16.421C16.4819 16.509 16.3765 16.6341 16.3125 16.7811C16.1179 17.2122 15.7667 17.5532 15.3301 17.7352C14.8935 17.9171 14.4041 17.9263 13.9609 17.761C13.8406 17.7157 13.7101 17.7044 13.5837 17.7283C13.4574 17.7523 13.3401 17.8105 13.2447 17.8967C13.0956 18.0282 12.9265 18.1349 12.7437 18.2128L15.9113 21.3808L16.8844 17.1647C16.9002 17.0963 16.9349 17.0337 16.9846 16.984C17.0343 16.9344 17.0969 16.8997 17.1653 16.8838Z" fill="#FAB400"></path>
                            <path d="M22.0064 16.5377L17.5623 17.5622L16.5374 22.0067L17.0373 22.5066L18.01 18.2905C18.0259 18.222 18.0607 18.1594 18.1104 18.1097C18.1601 18.06 18.2228 18.0254 18.2913 18.0096L22.5063 17.0365L22.0064 16.5377Z" fill="#FAB400"></path>
                        </svg>
                        Top Ratings
                    </div>
                    
                    <!-- Begin rating content -->
                    <div class="rating-content">
                        <!-- Begin rating left -->
                        <div class="rating-left">
                            <base-mini-card 
                                v-for="(item, key) in ratingData" 
                                :key="key"
                                :iconStar="item.iconStar"
                                :imgURL="item.imgURL"
                                :price="item.price"
                                :productName="item.productName"
                            ></base-mini-card>
                        </div>
                        <!-- End rating left -->

                        <!-- Begin rating right -->
                        <div class="rating-right">
                            <div class="rating-right-item">
                                <img src="@/assets/imgs/top-rating-5.webp" alt="top rating product">
                                <div class="rating-right-item-name">London Britches</div>
                            </div>
                            <div class="rating-right-item">
                                <img src="@/assets/imgs/top-rating-6.webp" alt="top rating product">
                                <div class="rating-right-item-name">Jim & Jago</div>
                            </div>
                        </div>
                        <!-- End rating right -->
                    </div>
                    <!-- End rating content -->

                </div>
                <!-- Begin top rating -->

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
                    <div id="product-category">
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
                            require('@/assets/imgs/carousel.png'), 
                            require('@/assets/imgs/carousel.png')],
            
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
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-3.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-2.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-1.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-3.webp')},
                {categoryName: 'Headphone', imgURL: require('@/assets/imgs/top-category-2.webp')},
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
                        })
                        .catch((reject) => {
                            console.log(reject);
                        });
                }
            }

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