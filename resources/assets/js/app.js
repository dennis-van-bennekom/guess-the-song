import Vue from 'vue';
import Vuex from 'vuex';

require('./bootstrap');

import store from './store';
window.store = store;

Vue.component('example', require('./components/Example.vue'));

const app = new Vue({
    el: '#app'
});
