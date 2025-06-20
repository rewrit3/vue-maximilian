const app = Vue.createApp({
  data() {
    return {
      counter: 0,
      name: "",
      lastName: "",
      // fullname: "",
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
  computed: {
    fullName() {
      if (this.name === "" || this.lastName === "") {
        return "";
      }

      return this.name + " " + this.lastName;
    },
  },
  watch: {
    counter(value) {
      if (value > 50) {
        const that = this;

        setTimeout(function () {
          that.counter = 0;
        }, 2000);
      }
    },
    // name(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = value + " " + this.lastName;
    //   }
    // },
    // lastName(value) {
    //   if (value === "") {
    //     this.fullname = "";
    //   } else {
    //     this.fullname = this.name + " " + value;
    //   }
    // },
  },
});

app.mount("#events");
