<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    
    <div class="wrapper">
      <nav>
        <RouterLink to="/">VueRouter+Pinia</RouterLink>
        <RouterLink to="/vista-uno">Vista 1</RouterLink>
        <RouterLink to="/vista-dos">Vista 2</RouterLink>
        <RouterLink to="/product-view">Product Detail</RouterLink>
      </nav>
    </div>
  </header>

  <div class="router-view">
    <RouterView />
  </div>
</template>

<style scoped>

.router-view {
  padding: 0 var(--section-gap);
  margin: 9rem auto;
  display: flex;
  place-items: center;
  flex-direction: column;

}

header {
  line-height: 1.5;
  max-height: 100vh;
  text-align: center;

}

nav {
  padding: 2rem;
  font-size: 1.5rem;
}


nav a {
  color: var(--color-text);
  text-decoration: none;
}

nav a.router-link-exact-active {
  color: darkblue;
  text-decoration: underline;
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

</style>
