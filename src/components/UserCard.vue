<template functional>
    <article class="card">
        <div class="card__avatar avatar">
            <img class="avatar__image" :src="props.user.avatar" alt="avatar">
        </div>

        <div class="card__info">
            <h4 class="card__text card__name--name">
                {{ props.user.firstName | fullName(props.user.lastName) }}</h4>
            <div class="card__text card__text--birth">
                День рождения: {{ props.user.dateOfBirth | dateLocale($options.getLocale()) }}
            </div>
            <div class="card__text card__text--phone">
                Номер: {{ props.user.phoneNumber }}
            </div>
        </div>
    </article>
</template>

<script lang="ts">
import {User} from '@/interfaces/User';
import {PropType} from 'vue';
import {Locale} from '@/filters/birth';

export default {
    name: 'UserCard',

    props: {
        user: {
            type: Object as PropType<User>,
            required: true,
        }
    },

    getLocale() {
        return Locale.RU;
    }
};
</script>

<style lang="scss" scoped>
.card {
  display: flex;
  width: 450px;
  height: 200px;
  border: 1px solid black;

  &__text {
    white-space: nowrap;

    &--name {

    }

    &--birth {
      text-align: left;
    }

    &--phone {
      text-align: left;
    }
  }

  &__avatar {

  }

  .avatar {
    width: 150px;
    height: 150px;

    &__image {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}
</style>