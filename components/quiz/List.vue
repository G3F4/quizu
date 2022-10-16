<script setup lang="ts">
import { useQuizList } from '#imports';

const { load, list } = useQuizList();
await load();
</script>

<template>
  <div>
    {{ list }}
  </div>
</template>
