<template>
  <div id="header-wrapper">
    <div class="heading">News Search</div>
    <span id="top-news" @click="showTopNews">
      <router-link to="/" :class="{ active: isTopNewsActive }">
        Top News
      </router-link>
    </span>
    <span id="bookmarks" @click="showBookmarks">
      <router-link to="/bookmarks" :class="{ active: !isTopNewsActive }">
        Bookmarks
      </router-link>
    </span>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isTopNewsActive: true,
    };
  },
  methods: {
    showTopNews() {
      this.isTopNewsActive = true;
    },
    showBookmarks() {
      this.isTopNewsActive = false;
    },
  },
};
</script>
<style scoped >
.heading {
  margin-left: 15%;
  color: red;
  font-size: 25px;
  font-weight: 800;
}
#header-wrapper a {
  list-style: none;
  text-decoration: none;
  color: #7b6f6f;
  padding: 0 4px 0 4px;
}
#header-wrapper a:hover {
  border: 1px solid #2c2020;
}
#header-wrapper {
  height: 60px;
  background: #e0d5da;
  display: flex;
  align-items: center;
}

#top-news {
  right: 25%;
}
#bookmarks {
  right: 5%;
}
#top-news,
#bookmarks {
  font-size: 18px;
  cursor: pointer;
  float: right;
  position: absolute;
  color: rgb(177, 149, 149);
  font-weight: 600;
}
#header-wrapper .active {
  color: #311d1d;
  border: 1px solid #2c2020;
}
@media only screen and (max-width: 600px) {
  .heading,
  #top-news,
  #bookmarks {
    position: initial;
    float: left;
    width: 100%;
    margin-left: 20px;
    margin-top: 10px;
    
  }

  #header-wrapper {
    display: inline-block;
    width: 100%;
    height: 100%;
    padding-bottom: 10px;
  }
}
</style>