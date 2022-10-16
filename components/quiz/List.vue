<script setup lang="ts">
import { useQuizList } from '#imports';

const { load, list } = useQuizList();
await load();
</script>

<template>
  <div>
    <ul :class="$style.list">
      <li v-for="i in list" :key="i.id">
        <NuxtLink :href="`/quiz/${i.id}`" :class="$style.quizLink">
          {{ i.name }}
        </NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style module>
.list {
  list-style: none;
}

.quizLink {
  color: darkslategrey;
}
</style>
