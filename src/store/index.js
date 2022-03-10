import Vue from "vue";
import Vuex from "vuex";
import bookMarkModule from "./bookmark/index";
import filterModule from "./filter/index";

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    bookmark: bookMarkModule,
    filter: filterModule,
  }
});
