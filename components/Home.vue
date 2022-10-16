<script setup lang="ts">
import { useLogin } from '#imports';

const { isLogged } = useLogin();
</script>

<template>
  <div v-if="isLogged">
    <QuizList />
  </div>
</template>
