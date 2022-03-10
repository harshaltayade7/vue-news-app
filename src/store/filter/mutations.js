export default {
  applyFilter(state, payload) {
    state.currentFilter = payload;
  },
  loadMore(state) {
    state.page += 1;
  },
  previousPage(state) {
    if(state.page !== 0) {
      state.page -=1;
    }
  },
  updateFilter(state, payload) {
    state.currentFilter[payload.type] = payload.value;
  },
  updateNewsList(state, payload) {
    state.newsList = [...payload];
  },
  setLoading(state, bool) {
    state.isLoading = bool;
  },
  notFound(state, bool) {
    state.notFound = bool;
  },
};
