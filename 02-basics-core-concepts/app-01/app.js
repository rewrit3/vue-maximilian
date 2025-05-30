const app = Vue.createApp({
  data() {
    return {
      courseGoal: "Learn Vue!",
      vueLink: "https://vuejs.org",
    };
  },
});

app.mount("user-goal");
