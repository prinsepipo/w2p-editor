import { createApp } from 'vue';

import store from './store';

import App from './App.vue';

import './styles/main.scss';


const app = createApp(App);

app.use(store);
app.mount('#app');
