const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
    };
  },
  methods: {
    setName(event) {
      this.name = event.target.value;
    },
    outputFullname() {
      if (this.name === "") {
        return "";
      }

      return this.name + " " + "Cruz";
    },
    add(num) {
      this.counter = this.counter + num;
    },
    reduce(num) {
      this.counter = this.counter - num;
    },
    resetInput() {
      this.name = "";
    },
  },
});

app.mount("#events");
