<script setup lang="ts">
import {storeToRefs} from "pinia";
import {useTestStore} from "~/store/testStore";

const store = useTestStore()
const {data, scalarData} = storeToRefs(store)
</script>

<template>
  {{data}}
  {{scalarData}}
  <FormKit label="Deep" v-model="data.deep.test.name" :floating-label="true"></FormKit>
  <FormKit label="scalar" v-model="scalarData"></FormKit>
</template>

<style scoped>

</style>