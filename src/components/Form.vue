<script setup>
import { reactive } from "vue";

const props = defineProps({
  form: {}
})
const innerForm = reactive(props.form)
</script>

<template>
      <p class="field-description">Country</p>
      <input v-model="innerForm.country"/>
      <p class="field-description">name</p>
      <input v-model="innerForm.name"/>
</template>