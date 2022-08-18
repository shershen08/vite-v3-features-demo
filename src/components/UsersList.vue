<template>
  <h1>UsersList</h1>

  <!-- <div v-if="isLoading">
    ...loading
  </div>
  <div v-else> -->
    <UserItem v-for="user in users" :key="user.id" :user="user"/>
  <!-- </div> -->
</template>

<script>
import UserItem from '@/components/UserItem.vue'

// COMP -> STORE -> SERVICE -> 

export default {
    name: 'UsersList',
    components: {
        UserItem
    },
    data: () => ({
        // users: [],
        isLoading: false
    }),
    // mounted, created, updated <---- lifeCycle events on component
    mounted(){
 
        // this.loadUsers()
        this.$store.dispatch('loadUsers')
    },
    computed: {
        users(){
            return this.$store.state.users
        }
    },
    methods: {
        // loadUsers(){
        //    loadUsers().then(json => {
        //         this.users = json
        //         this.isLoading = false
        //     })
        // }
    }
}
</script>

<style>

</style>