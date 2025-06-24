const app = Vue.createApp({
  data() {
    return {
      enteredTaskValue: '',
      tasks: [],
      tasksIsVisible: true,
    };
  },
  computed: {
    // tasksClasses() {
    //   return {
    //     visible: this.tasksIsVisible,
    //     hidden: !this.tasksIsVisible,
    //   };
    // },
    buttonCaption() {
      return this.tasksIsVisible ? 'Esconder Lista' : 'Mostrar Lista';
    },
  },
  methods: {
    addTask() {
      this.tasks.push(this.enteredTaskValue);
    },
    toggleTasksVisibility() {
      this.tasksIsVisible = !this.tasksIsVisible;
    },
  },
});

app.mount('#assignment');
