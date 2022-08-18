<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
const users = [{
  name: 'Mike'
}, {
  name: 'Vasya'
},
{name: 'Masha'}]
const callback = (data) => {
  console.log('I am called from child!', data)
}
const store = useStore()
const countValue = computed(() => store.state.count)
</script>

<template>
  <header>
    {{countValue}}
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    <div class="wrapper">
      <!-- v-on === @ -->
      <!-- <HelloWorld @countChange="callback"
                  @styleChange="callback"
                  msg="You did it!"
                  :users="users" isSuccess/> -->
      <!-- <HelloWorld @countChange="callback" msg="No you don't" /> -->
      <!-- <HelloWorld @countChange="callback"/> -->

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/login">login</RouterLink>
        <!-- <a href="/login">anchor for login</a> -->
      </nav>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
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

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
