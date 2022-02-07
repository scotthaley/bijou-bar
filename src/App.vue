<template>
  <div id="app">
    <h1>Drinks</h1>
    <div class="section" v-for="section in sections" :key="section">
      <h2>{{ section }}</h2>
      <div class="drink" v-for="drink in drinks(section)" :key="drink.name">
        <img :src="drink.image"/>
        <div class="right">
          <div class="name">
            {{drink.name}}
          </div>
          <div class="description">
            {{drink.description}}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { db } from './db'

export default {
  name: 'App',
  data() {
    return {
      menu: [],
    }
  },
  computed: {
    sections: function() {
      return [...new Set(this.menu.map(m => m.section))]
    }
  },
  methods: {
    drinks: function(section) {
      return this.menu.filter(m => m.section === section)
    }
  },

  firestore: {
    menu: db.collection('Menu'),
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
.section {
  max-width: 800px;
  margin: 0 auto;
}
.drink {
  display: flex;
  margin-bottom: 30px;
  padding: 15px;
  background-color: #f8f8f8;
  border-radius: 8px;
}
.drink img {
  width: 100px;
  margin-right: 30px;
}
.drink .name {
  font-size: 24px;
}
.drink .right {
  flex-grow: 1;
  text-align: left;
}
</style>
