<template>
  User Details for {{id}}
  <br>
  {{user}}
</template>

<script>
import {loadUser} from '@/services/users'

export default {
   props: ['id'],
    data: () => ({
        user: [],
        isLoading: false
    }),
   mounted(){
        this.isLoading = true
        this.loadUser()
    },
    methods: {
        loadUser(){
            loadUser(this.id).then(json => {
                this.user = json
                this.isLoading = false
            })
        }
    }
}
</script>

<style>

</style>