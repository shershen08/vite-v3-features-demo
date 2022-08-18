<template>
  <h1>login form here</h1>
  haredcoded:
  <RouterLink to="/user/mike">login as mike</RouterLink>
  <br>
  <RouterLink :to="{name: 'user', params: { id: 'Alise'}}">login as Alise</RouterLink>
  <br>
  <br>
  <RouterLink :to="{name: 'user', params: { id: username}}">login as {{username}}</RouterLink>
 <br>



<button @click="asyncIncrement">asyncIncrement</button>

  <br>
  <br>
      <input v-model="counterValue"/>
  <button @click="setValue">setValue</button>
  
  <br>
  <br>
  <button @click="changeCount">+1</button>
<br>
  <input v-model="username" v-focus="5"/>
  <!-- 1) find element -> 2) focus() -->

  <button @click="login" ref="button">login as {{username}}</button>
</template>

<script>
import { locStub } from '@vue/compiler-core'

export default {
    data: () => ({
        username: 'Alise',
        counterValue: 0,
        // $fff: 'fff'
    }),
    methods: {
        // M -> commit
        // A -> dispatch

        asyncIncrement(){
            this.$store.dispatch('asyncIncrement')
            
            // window.data = 42
            // locStub.setValue('count', 42)

        },
        setValue(){
            this.$store.commit('setValue', this.counterValue)
        },
        changeCount(){
            this.$store.commit('increment')
        },  
        login(){
            // validate form

            // api call validate password
            this.$router.push({
                name: 'user',
                params: { 
                        id: this.username
                    }
        })
        },
    },
    //  this.$refs: {}
    mounted(){
  }
}
</script>

<style scoped>
    input {
        outline: none;
        background: gainsboro;
    }
    input:focus {
       border: 2px #fc0 solid;
    }
</style>