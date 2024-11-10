<template>
  <div id="app">
    <Header />
    <div class="content">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from './components/Header.vue';
import Footer from './components/Footer.vue';

export default defineComponent({
  components: {
    Header,
    Footer
  }
});
</script>

<style lang="scss">
html,
body {
  height: 100%;
  /* Устанавливаем высоту для html и body */
  margin: 0;
  /* Убираем отступы */
  font-family: 'Montserrat', sans-serif;


}


.no-scroll {
  overflow: hidden;
}

#app {
  display: flex;
  flex-direction: column;
  /* Располагаем элементы в колонку */
  min-height: 100vh;
  /* Минимальная высота 100% от высоты окна */
  width: 100%;
  padding-bottom: 24px;
}

.content {
  flex: 1;
  /* Позволяет контенту занимать оставшееся пространство */
}

.container-content {
  width: 100%;
  max-width: 1200px;
}
</style>