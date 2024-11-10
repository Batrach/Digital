import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; 
import store from './store'// Импортируйте роутер
import './assets/main.scss'; // Импортируйте SCSS файл
// import 'swiper/scss';
// import 'swiper/scss/navigation';
// import 'swiper/scss/pagination'

const app = createApp(App);
app.use(router);
app.use(store); // Используйте роутер
app.mount('#app');