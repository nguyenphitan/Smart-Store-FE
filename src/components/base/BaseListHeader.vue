<template>
    <div id="list-header">
        <!-- Base list using for header -->
        <!-- Not list using for product, item, ... -->
        <div id="list-header-container">
            <!-- List overlay -->
            <div class="list-header">
                <div
                    class="list-header-item" 
                    v-for="(item, index) in data" 
                    :key="index"
                >{{item}}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'base-list-header',
    props: {
        data: {
            type: Array,
            default: new Array()
        }
    }
}
</script>

<style scoped>
@import url('../../styles/base/listHeader.css');
</style>