<template>
  <div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">{{user.name}}</h5>
    <p class="card-text">{{user.email}}</p>
    
    <!-- HTML -->
    <!-- <a :href="`/user-details/${user.id}`" class="btn btn-primary">открыть</a> -->

    <router-link :to="{
        name: 'userdetails',
        params: {
            id: user.id
        }
    }">открыть</router-link>
  </div>
</div>
</template>

<script>
export default {
    props: {
        user: {
            type: Object
        }
    }
}
</script>

<style>

</style>