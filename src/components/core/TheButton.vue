<template>
  <button
    @click="onBtnClick"
    :class="{active:isActive, bookmark: btnClass == 'bookmark'}"
    v-if="isVisible"
  >
  <slot>
  </slot>
  </button>
</template>
<script>
export default {
  props: ["btnClass", "isActive", "isVisible"],
  methods: {
    onBtnClick() {
      this.$emit("clicked");
    },
  },
};
</script>
<style scoped>
button {
  cursor: pointer;
}
.bookmark {
  float: right;
}
.active {
  background: black;
  color: white;
}
</style>