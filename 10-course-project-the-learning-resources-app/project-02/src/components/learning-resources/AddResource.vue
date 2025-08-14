<template>
  <base-card>
    <form @submit.prevent="submitData">
      <div class="form-control">
        <label for="title">Title</label>
        <input ref="titleInput" name="title" id="title" type="text" />
      </div>

      <div class="form-control">
        <label for="description">Description</label>
        <textarea
          ref="descriptionInput"
          name="description"
          id="description"
          rows="3"
        ></textarea>
      </div>

      <div class="form-control">
        <label for="link">Link</label>
        <input ref="linkInput" name="link" id="link" type="url" />
      </div>

      <div>
        <base-button type="submit">Add Resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
export default {
  inject: ['addResource'],
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDescription = this.$refs.descriptionInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      this.addResource(enteredTitle, enteredDescription, enteredUrl);
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
