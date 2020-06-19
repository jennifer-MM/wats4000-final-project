<template>
  <div class="breakingBad">
    <h1>Breaking Bad: Learn about the characters</h1>

    <div class="displayCharacter">
      <form v-on:submit.prevent="findName">
        <p>
          Search the characters by first name
          <input type="text" v-model="name" />
          <button type="submit">Search</button>
        </p>
      </form>

      <ul v-if="results && results.length > 0" class="results">
        <li v-for="item in results" :key="item.name">
          <p>
            <strong>Name: {{item.name}}</strong>
          </p>
          <img class="image" v-bind:src="item.img" v-bind:alt="item.alt" />
          <ul class="occupation-list">
            <li v-for="occupation in item.occupations" :key="occupation">{{ occupation }}</li>
          </ul>
          <p>Alive or dead: {{item.status}}</p>
          <p>Nickname: {{item.nickname}}</p>
          <p>Portrayed by: {{item.portrayed}}</p>
          <p>Show series: {{item.category}}</p>
        </li>
      </ul>

      <div v-else-if="results && results.length == 0" class="no-results">
        <h2>A character does not have that name</h2>
        <p>Please try "Walter", "Saul" or "Jesse"</p>
      </div>

      <div v-else-if="errors && errors.length === 0" class="errors">
        <h2>Please enter a character's name</h2>
        <li v-for="error of errors" :key="error">{{error.message}}</li>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "breakingBad",
  data() {
    return {
      results: null,
      errors: [],
      phrase: "",
      name: "",
      occupation: "",
      img: "",
      status: "",
      nickname: "",
      protrayed: "",
      category: ""
    };

  },
  methods: {
    findName: function() {
      axios
        .get("https://www.breakingbadapi.com/api/characters", {
          params: {
            name: this.name
          }
        })
        .then(response => {
         this.results = response.data;
        })
        .catch(error => {
          this.showError = true;
          //this.errors.push(error);
        //if (!this.name) {
          //this.errors.push('Name required.');
        //}
        });
    },
    getCharacter: function() {
      this.results = null;
      this.showLoading = true;

      let cacheLabel = "findName_" + this.result;
      let cacheExpiry = 15 * 60 * 1000;

      if (this.$ls.get(cacheLabel)) {
        console.log("Cached query detected.");
        this.results = this.$ls.get(cacheLabel);
        this.showLoading = false;
      } else {
        console.log("No cache available. Making API request.");
        API.get("find", {
          params: {
            q: this.query
          }
        }).then(response => {
          this.$ls.set(cacheLabel, response.data, cacheExpiry);
          console.log("New query has been cached as: " + cacheLabel);
          this.results = response.data;
          this.showLoading = false;
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.breakingBad {
  font-size: 1.4rem;
}
input[type="text"] {
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: 1px solid #333;
  width: 300px;
  font-size: 1.4rem;
  color: #2c3e50;
  font-weight: 300;
  background: rgba(0, 0, 0, 0.02);
  padding: 0.5rem;
}
.image {
  width: 300px;
  border-width: 5px;
  border-style: solid;
  border-color: black;
}
.displayCharacter {
  display: inline-block;
  margin: 10px;
  width: 250px;
  padding: 0.5rem;
  font-family: Arial, Helvetica, sans-serif;
  color: black;
}
.results li {
  display: inline-block;
  margin: 10px;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: black;
}
button {
  background: #333;
  padding: 0.5rem;
  font-weight: 300;
  color: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}
ul.results {
  list-style-type: none;
  padding: 0;
}

ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: red;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: #42b983;
}
</style>