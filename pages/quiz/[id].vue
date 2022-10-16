<script setup lang="ts">
import useQuizDetails from '~/composables/useQuizDetails';

const { load, details } = useQuizDetails();
await load();
</script>

<template>
  <div>
    {{ details }}
  </div>
</template>

<style module>

</style>
