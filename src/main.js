import { createApp } from 'vue'; // Vue 3 の場合

import App from './App.vue';
import store from './store';

createApp(App).use(store).mount('#app');
