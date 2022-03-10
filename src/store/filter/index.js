import actions from "./actions";
import getters from "./getters";
import mutations from "./mutations";

const filterModule = {
  state: {
    currentFilter: {
      country: "US",
      category: "health",
      q: "",
      sortBy: "publishedAt",
    },
    page: 1,
    pageSize: 12,
    isLoading: false,
    notFound: false,
    newsList: [],
  },
  mutations,
  actions,
  getters,
};

export default filterModule;
