<template>
  <div class="quote">
    <h1 style="color:dark blue">Breaking Bad Quotes</h1>

    <form v-on:click="findQuote">
      <p>
        <button type="submit">Get a random quote</button>
      </p>
    </form>

    <div class="results-container">
      <spinner v-if="showSpinner"></spinner>
      <ul v-if="results && results.length > 0" class="results">
        <li v-for="item of results" :key="item">
          <p class="styles">{{item.quote}}</p>
          <p>{{item.author}}</p>
          <p>{{item.series}}</p>
        </li>
      </ul>
    </div>
    
  </div>
</template>

<script>
import axios from "axios";
require('vue2-animate/dist/vue2-animate.min.css');
import CubeSpinner from "@/components/CubeSpinner";
export default {
  name: "Quote",
  data() {
    return {
      results: null,
      errors: [],
      quote: "",
      author: "",
      series: ""
    };
  },
  name: "NameSearch",
  components: {
    spinner: CubeSpinner
  },

  methods: {
    findQuote: function() {
      this.ShowSpinner = true;
      this.results = null;

      axios
        .get("https://www.breakingbadapi.com/api/quote/random", {
          params: {}
        })
        .then(response => {
          this.showSpinner = false;
          this.results = response.data;
        })
        .catch(error => {
          this.showSpinner = false;
          this.errors.push(error);
        });
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote,
.series {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-size: 1.4rem;
  color: rgb(16, 5, 114);
}

.styles {
  font-size: 1.5 rem;
  color: rgb(16, 5, 114);
  font-style: italic;
}

input {
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
  background: #e01346;
  padding: 0.5rem;
  font-weight: 300;
  color: white;
  border: none;
  cursor: pointer;
  font-size: 1.4rem;
}
h1,
h2 {
  font-weight: normal;
}
ul.errors {
  list-style-type: none;
}
.errors li {
  border: 1px solid red;
  color: blueviolet;
  padding: 0.5rem;
  margin: 10px 0;
}
a {
  color: rgb(16, 5, 114);
}
</style>
© 2020 GitHub, Inc.
Terms
Privacy
Security
Status
Help
Contact GitHub
Pricing
API
Training
Blog
About
