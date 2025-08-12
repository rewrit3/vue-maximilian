<template>
  <ul>
    <li v-for="resource in storedResources" :key="resource.id">
      {{ resource }}
    </li>
  </ul>
</template>

<script>
export default {
  data() {
    return {
      storedResources: [
        {
          id: 'official-guide',
          title: 'Official Guide',
          description: 'The Official Vue.js documentation',
          link: 'https://vuejs.org',
        },
        {
          id: 'google',
          title: 'Google',
          description: 'Learn to Google.',
          link: 'https://google.com',
        },
      ],
    };
  },
};
</script>
