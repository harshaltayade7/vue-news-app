<template>
  <div id="app">
    <news-header></news-header>
    <keep-alive>
      <router-view> </router-view>
    </keep-alive>
  </div>
</template>

<script>
import NewsHeader from "./views/NewsHeader.vue";
export default {
  components: {
    NewsHeader,
  },
  beforeMount() {
    this.$store.dispatch("updateNewsList");
  },
};
</script>
<style>
</style>
