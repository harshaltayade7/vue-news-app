<template>
  <div id="news-detail-wrapper">
    <img :src="selectedNews.urlToImage" class="image" />
    <h4>{{ selectedNews.title }}</h4>
    <h5>{{ selectedNews.source.name }}</h5>
    <p>
      {{ selectedNews.description }}
    </p>
    <p>
      {{ selectedNews.content }}
    </p>
  </div>
</template>

<script>
export default {
  props: ["news"],
  computed: {
    selectedNews() {
      const publishedAt = this.$route.query.id;
      const newsData = this.$store.getters.getFilteredNewsList;
      const selectedNews = newsData.find(
        (news) => news.publishedAt === publishedAt
      );
      return selectedNews;
    },
  },
};
</script>

<style scoped>
#news-detail-wrapper {
  padding: 20px;
}
img {
  object-fit: contain;
}
</style>