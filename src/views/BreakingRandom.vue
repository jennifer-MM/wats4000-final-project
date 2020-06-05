<template>
  <div class="quote">
    <h1>Breaking Bad Quotes</h1>
    <form v-on:submit.prevent="findQuote">
      <p>
        <button type="submit">Get a random quote</button>
      </p>
    </form>
  </div>
</template>

<script>
import axios from 'axios';
export default {
  name: 'Quote',
  data () {
    return {
      results: null,
      errors: [],
      quote:'',
      author:'',
      series:''
    }
  },
 methods: {
    findQuote: function(){
      axios.get('https://www.breakingbadapi.com/api/quote/random', {
        params: {}
      })
      .then(response => {
      this.results = response.data;
    })
    .catch(error => {
      this.errors.push(error);
    });
  }
 }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.quote {
  font-size: 1.4rem;
  color: #42b983;
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
