<template>
    <div class="container">
                <!-- Carousel Wrapper -->
                <div id="multi-item-example" class="carousel slide carousel-multi-item" data-ride="carousel">

                    <!--Controls-->
                    <div class="controls-top">
                        <a class="btn-floating t-floating-prev" href="#multi-item-example" data-slide="prev">
                            <i class="fas fa-chevron-left"></i>
                        </a>
                        <a class="btn-floating t-floating-next" href="#multi-item-example" data-slide="next">
                            <i class="fas fa-chevron-right"></i>
                        </a>
                    </div>
                    <!--/.Controls-->

                    <!--Indicators-->
                    <ol class="carousel-indicators">
                        <li data-target="#multi-item-example" data-slide-to="0" class="active"></li>
                        <li data-target="#multi-item-example" data-slide-to="1"></li>
                    </ol>
                    <!--/.Indicators-->

                    <!--Slides-->
                    <div class="carousel-inner" role="listbox">
                        <div :class="key == 0 ? 'carousel-item active' : 'carousel-item'"
                            v-for="(data, key) in datas" :key="key"
                        >
                            <div 
                                class="col-md-3" style="float:left"
                                v-for="(item, index) in data" :key="index" 
                            >
                                <base-card 
                                    v-if="status == productStatus"
                                    :categoryName="item.categoryName" 
                                    :imgURL="item.imgURL"
                                    :inventory="item.inventory"
                                    :price="item.price"
                                    :productName="item.productName"
                                ></base-card>
                            </div>
                        </div>
                    </div>
                    <!--/.Slides-->

                </div>
                <!-- End Carousel Wrapper -->

            </div>
</template>

<script>
export default {

}
</script>

<style>

</style>