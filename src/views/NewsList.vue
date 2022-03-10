<template>
  <section>
    <news-filter></news-filter>
    <div class="news-list-wrapper" v-if="!isLoading">
      <span v-if="isNewsDataFound"
        >No news record found for the filter you applied, please check with
        other filter. Showing previously loaded news.
      </span>
      <div class="list">
        <card-content
          v-for="news in getFilteredNewsList"
          :key="news.publishedAt"
          :news="news"
        ></card-content>
      </div>
      <the-button btnClass="loadMore" @clicked="navigatePage(false)" :isVisible="true">Back page</the-button>
      <the-button btnClass="loadMore" @clicked="navigatePage(true)" :isVisible="true">Next page</the-button>
    </div>
    <p v-else>Loading content...</p>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import NewsFilter from "../components/news-filter/NewsFilter.vue";
import CardContent from "../components/cardContent/CardContent.vue";
import TheButton from "../components/core/TheButton.vue";

export default {
  data() {
    return {
      bookmarkTick: false,
    };
  },
  components: { CardContent, NewsFilter, TheButton },
  computed: {
    ...mapGetters(['getFilteredNewsList','isLoading','isNewsDataFound']),
  },
  methods: {
    ...mapActions(['loadMore','previousPage']),
    navigatePage(isForward) {
      isForward ? this.loadMore(): this.previousPage()
      window.scrollTo(0, 0);
    }
  },
};
</script>
<style scoped>
button {
  margin-right: 10px;
}
.loadMore {
  width: 100px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
}
.news-list-wrapper {
  background: rgb(253 246 246);
  justify-content: center;
  text-align: center;
}
.list {
  height: auto;
  padding: 20px 40px 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>