<template>
  <div :class="$style.defaultLayout">
    <AppHeader />
    <slot />
  </div>
</template>

<style module>
.defaultLayout {
  height: 100vh;
  background-color: var(--color5);
}
</style>
