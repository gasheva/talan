<template>
    <div class="user-page">
        <h1>Пользователи</h1>
        <div v-show="loading" class="loader-wrapper">
            <loader-base/>
        </div>
        <div class="user-page__content" v-show="!loading">
            <button @click="fetchUsers">Получить пользователей</button>
            <section class="user-page__cards">
                <div v-for="user in users" :key="user.id">
                    <user-card :user="user"/>
                </div>
            </section>
        </div>
    </div>
</template>

<script lang="ts">
import Vue from 'vue';
import {fetchRandomAmountOfUsers} from '@/services';
import {User} from '@/interfaces/User.js';
import LoaderBase from '@/components/UI/LoaderBase.vue';
import UserCard from '@/components/UserCard.vue';

export default Vue.extend({
    name: 'PeoplePage',
    components: {UserCard, LoaderBase},
    data(): {
        users: User[],
        loading: boolean,
    } {
        return {
            users: [],
            loading: false,
        };
    },

    methods: {
        async fetchUsers(): Promise<void> {
            this.loading = true;
            this.users = await fetchRandomAmountOfUsers();
            this.loading = false;
        }
    }
});
</script>

<style lang="scss" scoped>
.user-page {
  position: relative;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__content {
    width: 100%;
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
    margin-top: 1rem;
  }

  .loader-wrapper {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>