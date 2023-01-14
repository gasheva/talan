<template>
    <div>
        <label>
            <input type="text" v-model="">
        </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
    name: 'FilterBase',
    props: {
        initialValue: {
            type: String,
            default: '',
        }
    },

    data() {
        return {
            value: '',
        };
    },
});
</script>

<style scoped>

</style>