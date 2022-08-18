<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

import TheWelcome from '@/components/TheWelcome.vue'
import UsersList from '@/components/UsersList.vue'
const username = ref('')

const store = useStore()
const countValue = computed(() => store.state.count)

</script>

<template>
  <main>
    <UsersList/>
    <!-- count: {{countValue}}
    
    <input v-model="username" v-focus="7"/> -->
  </main>
</template>
