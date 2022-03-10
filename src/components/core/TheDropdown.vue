<template>
  <select :value="selected" @change="onChangeSelection">
    <option
      :selected="selected"
      v-for="option in options"
      :value="option.id"
      :key="option.id"
    >
      {{ option.value }}
    </option>
  </select>
</template>

<script>
export default {
  props: ["options", "selected"],
  methods: {
    onChangeSelection({ target }) {
      this.$emit("change", target.value);
    },
  },
};
</script>

<style scoped>
select {
  width: 25%;
  margin-right: 20px;
  font-size: 16px;
  border-radius: 4px;
  height: 38px;
  text-align: center;
  cursor: pointer;
}
option {
  cursor: pointer;
}
</style>