<template>
  <section>
    <div id="filter-wrapper">
      <the-dropdown
        :options="countryList"
        @change="updateCountry"
        :selected="getCountry"
      ></the-dropdown>
      <the-dropdown
        :options="newsType"
        @change="updateNewsType"
        :selected="getCategory"
      ></the-dropdown>
      <the-inputbox @onchange="updateSearchKeyword"></the-inputbox>
      <the-button @clicked="applyFilter" :isVisible="true"
        >Apply Filter</the-button
      >
    </div>
  </section>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
import TheDropdown from "../core/TheDropdown.vue";
import TheInputbox from "../core/TheInputbox.vue";
import CountryList from "../../data/CountryList.json";
import TheButton from "../core/TheButton.vue";

export default {
  components: {
    TheDropdown,
    TheInputbox,
    TheButton,
  },
  computed: {
    ...mapGetters(["getCountry", "getCategory"]),
  },
  data() {
    return {
      isTopNewsActive: true,
      countryList: CountryList,
      keyword: "",
      filterSelection: {
        country: "",
        category: "",
        keyword: "",
      },
      newsType: [
        {
          id: "technology",
          value: "Technology",
        },
        {
          id: "movies",
          value: "Movies",
        },
        {
          id: "general",
          value: "General",
        },
        {
          id: "health",
          value: "Health",
        },
      ],
    };
  },
  methods: {
    ...mapActions(["updateFilter", "applyFilter"]),
    showTopNews() {
      this.isTopNewsActive = true;
    },
    showBookmarks() {
      this.isTopNewsActive = false;
    },
    updateCountry(countryCode) {
      this.updateFilter({
        type: "country",
        value: countryCode.toLowerCase(),
      });
    },
    updateNewsType(category) {
      this.updateFilter({
        type: "category",
        value: category,
      });
    },
    updateSearchKeyword(keyword) {
      this.updateFilter({ type: "q", value: keyword });
    },
  },
};
</script>
<style scoped>
#filter-wrapper {
  height: 80px;
  background: rgb(236 234 230);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
}
button {
  width: fit-content;
  height: fit-content;
  font-weight: 800;
  cursor: pointer;
  margin: 0;
  padding: 8px;
}
@media only screen and (max-width: 600px) {
  #filter-wrapper {
    display: block;
    height: 100%;
    padding-bottom: 10px;
  }
  select,
  input,
  button {
    width: 80%;
    margin-left: 20px;
    margin-top: 10px;
  }
  input {
    padding: 0;
  }
}
</style>