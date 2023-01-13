<template>
  <div class="users">
    <users-page/>
  </div>
</template>
<script>
import UsersPage from '@/components/UsersPage.vue';
export default {
    components: {UsersPage}
};
</script>

<style lang="scss">
.users{
  height: 100%;
}
</style>