<script setup>
import {computed, ref} from 'vue'
import {useStore} from 'vuex'

import TheWelcome from '@/components/TheWelcome.vue'
const username = ref('')

const store = useStore()
const countValue = computed(() => store.state.count)

</script>

<template>
  <main>
    count: {{countValue}}
    
    <input v-model="username" v-focus="7"/>
  </main>
</template>
