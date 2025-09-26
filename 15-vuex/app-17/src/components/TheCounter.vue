<script>
export default {
  computed: {
    counter() {
      return this.$store.state.counter;
    },
  },
};
</script>

<template>
  <h3>{{ counter }}</h3>
</template>
