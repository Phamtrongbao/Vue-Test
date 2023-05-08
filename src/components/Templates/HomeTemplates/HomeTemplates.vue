<template lang="">
  <div>
    <Header />
    <main>
      <router-view></router-view>
    </main>
    <Footer />
  </div>
</template>
<script>
import Header from "../Header/Header.vue";
import Footer from "../Footer/Footer.vue";
export default {
  components: {
    Header,
    Footer,
  },
};
</script>
<style lang=""></style>
