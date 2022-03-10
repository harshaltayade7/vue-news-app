export default {
  updateBookmark(state, payload) {
    state.bookmarks = [...payload];
  },
};
