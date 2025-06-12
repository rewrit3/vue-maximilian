const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      firstUserInputData: "",
      secondUserInputData: "",
    };
  },
  methods: {
    showAlert() {
      alert("Show Alert!");
    },
    handleFirstUserInput(event) {
      this.firstUserInputData = event.target.value;
    },
    handleSecondUserInput(event) {
      this.secondUserInputData = event.target.value;
    },
  },
});

app.mount("#assignment");
