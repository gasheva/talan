import Vue from 'vue';
import App from './App.vue';
import router from './router';

import fullNameFilter from './filters/fullName';
import {dateToLocale} from './filters/birth';

import './styles/index.scss';

Vue.config.productionTip = false;

Vue.filter('fullName', fullNameFilter);
Vue.filter('dateLocale', dateToLocale);

new Vue({
    router,
    render: h => h(App)
}).$mount('#app');
