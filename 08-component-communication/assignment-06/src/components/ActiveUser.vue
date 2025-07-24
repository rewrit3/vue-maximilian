<script>
export default {
  props: {
    id: {
      type: Number,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
  },
};
</script>

<template>
  <ul>
    <li>
      <h2>Username: {{ username }}</h2>
      <h2>Age: {{ age }}</h2>
    </li>
  </ul>
</template>

<style></style>
