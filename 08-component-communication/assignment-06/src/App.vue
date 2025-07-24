<script>
export default {
  data() {
    return {
      users: [
        {
          id: 1,
          username: 'adolfo@soft42.com',
          age: 35,
        },
        {
          id: 2,
          username: 'sheila@soft42.com',
          age: 29,
        },
      ],
    };
  },
  methods: {
    addUser(username, age) {
      const newUserContact = {
        id: new Date().toISOString(),
        username: username,
        age: age,
      };

      this.users.push(newUserContact);
    },
  },
};
</script>

<template>
  <section>
    <header>
      <h1>Assignment 06</h1>
    </header>

    <main>
      <user-data @add-user="addUser"></user-data>

      <ul>
        <active-user
          v-for="user in users"
          :key="user.id"
          :id="user.id"
          :username="user.username"
          :age="user.age">
        </active-user>
      </ul>
    </main>
  </section>
</template>

<style>
@import url('https://fonts.googleapis.com/css2?family=Jost&display=swap');

* {
  box-sizing: border-box;
}

html {
  font-family: 'Jost', sans-serif;
}

body {
  margin: 0;
}

header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}

#app li,
#app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}

#app form div {
  margin: 1rem 0;
}

#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}

#app input {
  font: inherit;
  padding: 0.15rem;
}

#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}

#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}

#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
</style>
