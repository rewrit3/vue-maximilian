const app = Vue.createApp({
  data() {
    return {
      number: 0,
    };
  },
  methods: {
    add(num) {
      this.number = this.number + num;
    },
  },
  computed: {
    checkExactNumber() {
      console.log(this.number);

      if (this.number == 0) {
        return 0;
      } else if (this.number > 0 && this.number < 37) {
        return "Not there yet.";
      } else if (this.number > 37) {
        return "Too much!";
      } else {
        return 37;
      }
    },
  },
  watch: {
    checkExactNumber(newValue) {
      if (newValue == 37) {
        console.log("The number has reached 37. Resetting in 5 seconds...");

        setTimeout(() => {
          this.number = 0;

          console.log("Number reset to 0.");
        }, 5000);
      }
    },
  },
});

app.mount("#assignment");
