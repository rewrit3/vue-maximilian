<script>
export default {
  props: ['name', 'phoneNumber', 'emailAddress', 'isFavorite'],
  data() {
    return {
      detailsAreVisible: false,
      friendIsFavorite: this.isFavorite,
      friend: {
        id: 'manuel',
        name: 'Manuel Lorenz',
        phone: '0123 45678 90',
        email: 'manuel@localhost.com',
      },
    };
  },
  methods: {
    toggleDetails() {
      this.detailsAreVisible = !this.detailsAreVisible;
    },
    toggleFavorite() {
      if (this.friendIsFavorite === '1') {
        this.friendIsFavorite = '0';
      } else {
        this.friendIsFavorite = '1';
      }
    },
  },
};
</script>

<template>
  <li>
    <h2>{{ name }} {{ friendIsFavorite === '1' ? '(Favorite)' : '' }}</h2>

    <button @click="toggleDetails" style="margin-right: 1rem">
      {{ detailsAreVisible ? 'Hide' : 'Show' }} Details
    </button>
    <button @click="toggleFavorite">Toggle Favorite</button>

    <ul v-if="detailsAreVisible">
      <li><strong>Phone:</strong> {{ phoneNumber }}</li>
      <li><strong>Email:</strong> {{ emailAddress }}</li>
    </ul>
  </li>
</template>
