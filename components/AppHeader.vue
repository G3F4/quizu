<template>
  <header :class="$style.header">
    <h1 :class="$style.heading">
      <NuxtLink href="/">
        Quizu
      </NuxtLink>
    </h1>
    <ClientOnly>
      <AuthLogin />
    </ClientOnly>
  </header>
</template>

<style module>
.header {
  height: 50px;
  display: flex;
  align-items: center;
  padding: 8px;
  background-color: var(--color3);
}

.heading {
  font-size: 36px;
}
</style>