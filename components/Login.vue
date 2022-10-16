<script setup lang="ts">
import { useLogin } from '#imports';

const { isLogged, login, logout, ensureLogged, user } = useLogin();
await ensureLogged();
</script>

<template>
  <div>
    <button v-if="isLogged" @click="logout">Log out</button>
    <button v-else @click="login">Login</button>
    {{ user }}
  </div>
</template>
