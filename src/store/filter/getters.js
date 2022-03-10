export default {
  getCountry(state) {
    return state.currentFilter.country;
  },
  getCategory(state) {
    return state.currentFilter.category;
  },
  getFilteredNewsList(state) {
    return state.newsList;
  },
  isLoading(state) {
    return state.isLoading;
  },
  isNewsDataFound(state) {
    return state.notFound;
  },
};
