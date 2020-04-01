// CONFIG
Vue.config.productionTip = false
// CORE
import Vue from 'vue/dist/vue.js';
import VueRouter from 'vue-router';
// COMPONENTS
import Todo from './views/Todo.vue';
import Login from './views/Login.vue';
import Signup from './views/Signup.vue';
// STYLES
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue';
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap-vue/dist/bootstrap-vue.css';
// USE
Vue.use(VueRouter);
Vue.use(BootstrapVue);
Vue.use(IconsPlugin);
// ROUTES
const routes = [
  { path: '/', component: Todo },
  { path: '/login', component: Login },
  { path: '/signup', component: Signup }
];
// ROUTER INSTANCE
const router = new VueRouter({ mode: 'history', routes });
// INSTANCE
new Vue({
  router
}).$mount('#app')