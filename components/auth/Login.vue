<script setup lang="ts">
import { useLogin } from '#imports';

const { isLogged, login, logout, ensureLogged, user } = useLogin();
await ensureLogged();
</script>

<template>
  <div :class="$style.login">
    <div :class="$style.info">
      <button v-if="isLogged" @click="logout">Log out</button>
      <button v-else @click="login">Login</button>
      <div v-if="isLogged">{{ user.name }}</div>
    </div>
    <img v-if="isLogged" :src="user.picture" :class="$style.avatar" />
  </div>
</template>

<style module>
.login {
  display: flex;
  align-items: center;
  margin-left: auto;
  gap: 8px;
}

.info {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.avatar {
  width: 50px;
  height: 50px;
  border-radius: 25px;
}
</style>
