import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const bookMarkModule = {
  state: {
    bookmarks: [],
  },
  mutations,
  actions,
  getters
};

export default bookMarkModule;
