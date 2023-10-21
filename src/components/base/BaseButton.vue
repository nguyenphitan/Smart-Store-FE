<template>
    <div @click="onClickEvent" id="base-button">
        <!-- Base button -->
        <div id="button-container">
            <button :type="buttonType">
                <div class="button-icon" v-if="iconClass">
                    <i :class="iconClass"></i>
                </div>
                <div>{{buttonName}}</div>
            </button>
        </div>
    </div>
</template>

<script>
export default {
    name: "base-button",
    props: {
        buttonName: {
            type: String,
            default: "Click"
        },
        iconClass: {
            type: String,
            default: null
        }, 
        buttonType: {
            type: String,
            default: "button"
        }
    },
    methods: {
        onClickEvent(e) {
            this.$emit('onClickEvent', e);
        }
    },
}
</script>

<style scoped>
@import url('../../styles/base/button.css');
</style>