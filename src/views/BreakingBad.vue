<template>
  <div class="breakingBad">
    <div class="displayCharacter" v-show="showCharacter">
      <h1>Breaking Bad: Learn about the characters</h1>
      <form v-on:submit.prevent="findName">
        <p>
          Search the characters by name
          <input type="text" v-model="name" placeholder="Jesse" />
          <button type="submit">Search</button>
        </p>
        <p
          class="error"
          v-show="showError"
        >A character doesn't have that name. Please try Walter, Jesse, or Saul.</p>
      </form>

      <!--<div class="displayCharacter">
    <div class="character" v-for="item in results.character" :key="item.name">
    <img:src="item.imageUrl" :alt="item.name"> 

     <div> Set:  {{item.set}} </div>
      <!--  v-bind to apply images from results 

      </div>-->

      <ul v-if="results && results.length > 0" class="results">
        <li v-for="item of results" :key="item.name">
          <p>
            <strong>{{item.name}}</strong>
          </p>
          <p>{{item.occupation}}</p>
          <p>{{item.status}}</p>
          <p>{{item.nickname}}</p>
          <p>{{item.portrayed}}</p>
          <p>{{item.category}}</p>
        </li>
      </ul>

      <!--<div v-else-if="results && results.length == 0" class="no-results">
      <h2>A character does not have that name</h2>
      <p>Please try "Walter", "Saul" or "Jesse"</p>
    </div>

    <ul v-if="errors && errors.length > 0" class="errors">
      <li v-for="error of errors" :key="error">{{error.message}}</li>
      </ul>-->
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
          this.errors.push(error);
        });
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

.results li {
  display: inline-block;
  margin: 10px;
  border: solid 1px #333;
  padding: 0.5rem;
  width: 200px;
  min-height: 100px;
  color: #fff;
  background: rgba(0, 0, 0, 0.7);
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