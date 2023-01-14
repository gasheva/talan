<template>
    <div>
        <label>
            Фильтр:
            <input type="text" :value="value" @input="updateValue">
        </label>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';

const debounce = require('lodash.debounce');

export default Vue.extend({
    name: 'FilterBase',
    props: {
        value: {
            type: String,
        }
    },

    methods: {
        updateValue: debounce(function (this: any, event: any) {
            const updatedValue = event.target.value.trim();
            if (this.value !== updatedValue) {
                this.$emit('input', updatedValue);

            }
        }, 1000)
    }
});
</script>

<style scoped>

</style>