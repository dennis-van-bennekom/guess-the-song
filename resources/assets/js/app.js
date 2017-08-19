require('./bootstrap');

import Vue from 'vue';
import VueRouter from 'vue-router';
import router from './router';

Vue.use(VueRouter);

Vue.component('Start', require('./components/ChooseCategory.vue'));

const app = new Vue({
    router
}).$mount('#app');
