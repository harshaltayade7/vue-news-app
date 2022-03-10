<template>
  <section>
    <div class="content">
      <card-content
        v-for="news in bookmarks"
        :key="news.publishedAt"
        :news="news"
        :bookmarkView="true"
      ></card-content>
      <p v-if="bookMarkFound">No bookmark found</p>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
import CardContent from "../components/cardContent/CardContent.vue";
export default {
  components: {
    CardContent,
  },
  computed: {
     ...mapGetters(['bookmarks']),
    bookMarkFound() {
      return this.bookmarks.length == 0;
    }
  },
};
</script>

<style scoped>
.content {
  height: auto;
  padding: 20px 40px 20px 40px;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  text-align: center;
}
</style>