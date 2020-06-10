<template>
  <div>
    <div class="messages">
      <message-container v-bind:messages="messages"> </message-container>
    </div>

    <div class="search">

      <h1>Breaking Bad: Learn about the characters</h1>
      <form v-on:submit.prevent="getCharacter">
        <p>Search for a character <input
            type="text"
            v-model="characterName"
            placeholder="Saul"
          >

          <button type="submit">Go</button></p>

      </form>

       <!--<router-link to="/BoosterPack">Try the Booster Pack Simulator</router-link> -->

      <loading-spinner v-if="showLoading"></loading-spinner>

      <div class="displayCharacter" >

        <div
          class="Character"
          v-for="character in results.character"
          :key="character.id"
        >
          <img 
            :src="character.imageUrl"
            :alt="character.name"
          >
            <div> Set:  {{character.set}} </div>
          <!-- i need to v-bind to apply images from results -->

        </div>

      </div>

    </div>

    <div
      class="no-results"
      v-if="results.character < 1"
    >
      <!-- set to < 1 to avoid inital page load error results === 0  -->
      <h2>A character wasn't found</h2>
      <p>Please try Jesse, Saul or Walter</p>
    </div>

  </div>
</template>

<script>
import axios from "axios";
import loadingSpinner from "@/components/loadingSpinner.vue";
// Note: vue2-animate is added using the require statement because it is a CSS file
require("vue2-animate/dist/vue2-animate.min.css"); 

import MessageContainer from "@/components/MessageContainer.vue";
export default {
  name: "cardSearch",
 
  components: {
    "loading-spinner": loadingSpinner,
    "message-container": MessageContainer
  },
  data() {
    return {
      results: [],
      showLoading: false,
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
    getCharacter: function() {
      this.showLoading = true;
      this.results = [];
      if (this.cardName !== "") {
        // check if search has any text
        axios
          .get("https://www.breakingbadapi.com/api/characters", {
            params: {
              name: this.characterName
            }
          })
          .then(response => {
            this.results = response.data;
            this.showLoading = false;
    
          })
          .catch(error => {
            this.messages.push({
              type: "error",
              text: error.message
            });
            this.showLoading = false;
          });
      } else {
        // to notify user that input box is 'EMPTY'
        this.results.cards = 0;
        this.showLoading = false;
      }
    }
  }
};
</script>


<style scoped>
.Cards {
  display: inline-block;
  margin: 10px;
}
.Cards img{
  width: 250px;
}
.Cards:hover img {
  /* https://w3bits.com/css-image-hover-zoom/ */
  transition: transform 0.5s ease;
  transform: scale(1.5);
  display: inline-block;  /* inline-block is key to keep uniform for each card with set name*/
  margin: 10px;
}
</style>