<template>
    <div id="base-carousel">
        <!-- Base carousel -->
        <div id="carousel-container">
            <div id="myCarousel" class="carousel slide border" data-ride="carousel">
                <!-- Indicators -->
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" 
                        :class="key == 0 ? 'active' : ''"
                        :data-slide-to="key" 
                        v-for="(item, key) in data" :key="key"
                    ></li>
                </ol>
                <div :class="key == 0 ? 'carousel-item active' : 'carousel-item'" 
                    v-for="(item, key) in data" :key="key">
                    <div class="row align-items-center t-between">
                        <!-- <div class="col-md-8 py-2 sale-info">
                            <h1 class="carousel-title">50% Off For Your First Shopping</h1>
                            <p class="carousel-description"> {{carouselDescription}} </p>
                            <base-button class="carousel-btn" :buttonName="buttonName"></base-button>
                        </div> -->
                        <!-- class="col-md-4" -->
                        <div>
                            <img style="width: 100%;" class="d-block img-fluid" v-bind:src="item" alt="banner image">
                        </div>
                    </div>
                </div>
                <!-- Controls -->
                <!-- <a class="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="sr-only">Previous</span>
                </a>
                <a class="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a> -->
            </div>

           
            
        </div>
    </div>
</template>

<script>
// import BaseButton from './BaseButton.vue'

export default {
    name: 'base-carousel',
    props: {
        data: {
            type: Array,
            default: new Array()
        },
        carouselDescription: {
            type: String,
            default: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis lobortis consequat eu, quam etiam at quis ut convallis.'
        }
    },
    components: {
        // BaseButton,
    },
    data() {
        return {
            buttonName: 'Visit Collections',
        }
    },

}
</script>

<style scoped>
@import url('../../styles/base/carousel.css');
</style>