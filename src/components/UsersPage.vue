<template>
    <div class="user-page">
        <h1>Пользователи</h1>
        <div v-show="loading" class="loader-wrapper">
            <loader-base/>
        </div>
        <div class="user-page__content" v-show="!loading">
            <button @click="fetchUsers">Получить пользователей</button>
            <filter-base v-model="filterByWord"/>
            <section class="user-page__cards">
                <div v-for="user in filteredUsers" :key="user.id">
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
import FilterBase from '@/components/UI/FilterBase.vue';
import {filterUserByWord} from '@/utils/userFilter';

export default Vue.extend({
    name: 'UserPage',
    components: {FilterBase, UserCard, LoaderBase},
    data(): {
        users: User[],
        loading: boolean,
        filterByWord: string,
    } {
        return {
            users: [],
            loading: false,
            filterByWord: '',
        };
    },

    computed: {
        filteredUsers(): User[] {
            return this.users.filter((user: User) => filterUserByWord(user, this.filterByWord));
        }
    },

    methods: {
        async fetchUsers(): Promise<void> {
            this.loading = true;
            this.users = await fetchRandomAmountOfUsers();
            this.filterByWord = '';
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

    > * {
      margin-bottom: .5rem;
    }
  }

  &__cards {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1.5rem;
  }

  .loader-wrapper {
    position: absolute;
    top: 20%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>