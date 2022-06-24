import { createApp } from 'vue'
import App from './App.vue'

import { createRouter, createWebHashHistory } from 'vue-router';
import Home from './page/home.vue'
import RestaurantID from './page/Restaurant.vue'

const routes = [
    { path: '/', component: Home},
    { name: 'RestaurantID', path: '/restaurant/:name', component: RestaurantID},
]

const router = createRouter({
    history: createWebHashHistory(),
    routes,
});

const VueApp = createApp(App)

VueApp.use(router)

VueApp.mount('#app');
