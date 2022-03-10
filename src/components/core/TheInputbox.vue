<template>
  <input type="textarea" @change="onchange" />
</template>
<script>
export default {
  methods: {
    onchange({ target }) {
      this.$emit("onchange", target.value);
    },
  },
};
</script>
<style scoped>
input {
  border: none;
  width: 200px;
  font-size: 16px;
  height: 35px;
  padding-left: 10px;
  border-radius: 4px;
  margin-right: 20px;
}
</style>