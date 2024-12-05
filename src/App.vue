<template>
  <div>
    <AppNav />
    <AppFooter />
  </div>
</template>

<script>
import AppFooter from './components/AppFooter.vue';// importando o footer
import AppNav from './components/AppNav.vue'; // importando a barra de navegação

export default {
  components: {
    AppFooter,
    AppNav, 
  },
};
</script>
