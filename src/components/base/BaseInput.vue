<template>
    <div v-on:keyup.enter="enterEvent" id="base-input">
        <!-- Base input -->
        <div id="input-container">
            <input @focus="resetBorderColor" :required="required" :type="inputType" :placeholder="inputPlaceholder">
            <div v-if="iconClass">
                <i :class="iconClass"></i>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "base-input",
    props: {
        inputType: {
            type: String,
            default: "text"
        },
        iconClass: {
            type: String,
            default: null
        },
        inputPlaceholder: {
            type: String,
            default: ""
        },
        required: {
            type: Boolean,
            default: false
        }
    },
    methods: {
        enterEvent() {
            this.$emit("enterEvent");
        },

        // reset border color:
        resetBorderColor(e) {
            e.target.style.border = '1px solid rgb(218, 225, 231)';
        }
    }
}
</script>

<style scoped>
@import url('../../styles/base/input.css');
</style>