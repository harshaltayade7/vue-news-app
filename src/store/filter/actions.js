export default {
  updateNewsList(context) {
    const { currentFilter, pageSize, page } = context.state;
    const { newsList } = context.rootState;
    const apiKey = "73d8f68c830e43659da79b16b4c0e1af";

    const newSearchParams = {
      country: currentFilter.country,
      category: currentFilter.category,
      q: currentFilter.q,
    };

    let searchType = "";
    searchType = newSearchParams.q == "" ? "top-headlines" : "everything";

    if (searchType === "everything") {
      delete newSearchParams.country;
      delete newSearchParams.category;
    } else {
      delete newSearchParams.q;
    }
    newSearchParams.pageSize = pageSize;
    newSearchParams.page = page;
    newSearchParams.apiKey = apiKey;

    const queryParams = new URLSearchParams(newSearchParams);

    const urlStrings = [
      `https://newsapi.org/v2/${searchType}?`,
      queryParams.toString(),
    ];
    const url = urlStrings.join("");

    context.commit("setLoading", true);
    fetch(url)
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        return res.json();
      })
      .then((data) => {
        context.commit("setLoading", false);
        if (data.articles && data.articles.length > 0) {
          context.commit("updateNewsList", data.articles);
          context.commit("notFound", false);
        } else {
          context.commit("updateNewsList", newsList);
          context.commit("notFound", true);
        }
      })
      .catch((error) => {
        console.log(error)
      }); 
  },
  applyFilter(context) {
    context.dispatch("updateNewsList");
  },
  updateFilter(context, payload) {
    context.commit("updateFilter", payload);
  },
  loadMore({ commit, dispatch }) {
    commit("loadMore");
    dispatch("updateNewsList");
  },
  previousPage({commit, dispatch}) {
    commit("previousPage");
    dispatch("updateNewsList");
  }
};
