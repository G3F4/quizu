<script setup lang="ts">
import { useLogin } from '#imports';

await useLogin().handleCallback();
</script>

<template>
  <div>Loading auth...</div>
</template>
