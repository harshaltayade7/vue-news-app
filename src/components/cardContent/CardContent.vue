<template>
  <div class="news-card">
    <img :src="news.urlToImage" class="image" />
    <h4>{{ news.title }}</h4>
    <h5>{{ news.source.name }}</h5>
    <p>
      {{ news.description }}
    </p>
    <router-link :to="'/news-detail?id=' + news.publishedAt">
      <the-button
        btnClass="goto"
        :isVisible="!bookmarkView"
      >
        Go to Page
      </the-button>
    </router-link>
    <the-button
      btnClass="bookmark"
      :isActive="isFoundInBookmarkData"
      :isVisible="!bookmarkView"
      @clicked="bookMark(news)"
    >
      BookMark
    </the-button>
    <the-button
      btnClass="bookmark"
      :isActive="isFoundInBookmarkData"
      :isVisible="bookmarkView"
      @clicked="removeBookmark(news)"
    >
      Remove Bookmark
    </the-button>
  </div>
</template>
<script lang="ts">
import { mapGetters, mapActions } from "vuex";
import TheButton from "../../components/core/TheButton.vue";
export default {
  components: {
    TheButton,
  },
  props: ["news", "bookmarkView"],
  computed: {
    ...mapGetters(['bookmarks']),
    isFoundInBookmarkData() {
      return this.bookmarks.indexOf(this.news) >= 0; 
    },
  },
  methods: {
    ...mapActions(['updateBookmark']),
    bookMark(news) {
      this.isFoundInBookmarkData
        ? this.removeBookmark(news)
        : this.addBookmark(news);
    },
    addBookmark(news) {
      const availableBookmark = [...this.bookmarks];
      availableBookmark.push(news);
      this.updateBookmark(availableBookmark);
    },
    removeBookmark(news) {
      const availableBookmark = [...this.bookmarks];
      availableBookmark.splice(availableBookmark.indexOf(news), 1);
        this.updateBookmark(availableBookmark);
    },
  },
};
</script>

<style>
h5 {
  color: rosybrown;
}
img {
  width: 100%;
  height: 250px;
  object-fit: cover;
}
.news-card {
  background: white;
  width: 350px;
  height: fit-content;
  margin-right: 20px;
  margin-bottom: 10px;
  text-align: left;
  border: 2px solid #f1e6e6;
}
.news-card :not(img, a) {
  margin: 10px;
}
</style>