<template>
  <div class="home">
    <home-page msg="Домашняя страница"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import HomePage from '@/components/HomePage.vue'; // @ is an alias to /src

export default Vue.extend({
  name: 'HomeView',
  components: {
      HomePage,
  },
});
</script>

<style lang="scss">
.home{
  height: 100%;
}
</style>
