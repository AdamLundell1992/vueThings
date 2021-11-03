<template>
  <div id="app">
     <div class="navbar" id="nav">
       <router-link to="/start"></router-link>
      <ul>
        <li><router-link to="/vueEvents">Vue-Events</router-link></li>
        <li><router-link to="/vueData">Vue-Data</router-link></li>
        <li><router-link to="/vueWatchers">Vue-Watchers</router-link></li>
      </ul>
    </div>
    <router-view />
  </div>
  
</template>

<script>


export default {
  name: 'App',
  components: {
    
  }
}
</script>

<style>
@import "~bulma/css/bulma.css";

.navbar {
  font-size: 2rem;
  background-color: black !important;
}
.navbar ul {
  display: flex;
  flex-direction: row;
  list-style-type: none;
  margin: 0;
  padding: 0;
  gap: 2rem;
}
.navbar ul li {
  cursor: pointer;
  padding: 0.5;
  flex: auto;
  text-align: center;
  color: white;
}
.navbar ul li:hover {
  background-color: rgb(218, 25, 25);
  color: white;
}
</style>