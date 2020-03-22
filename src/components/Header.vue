<template>
  <header>
    <nav class="nav">
      <router-link class="link" to="/">Home</router-link>
      <router-link class="link" to="/about">About</router-link>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
.nav {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  max-width: 280px;
  margin-left: auto;
  margin-right: auto;
  .link {
    text-align: center;
    text-transform: uppercase;
    color: #111111;
    font-weight: 700;
    &:focus {
      color: #878e88;
    }
  }
}
</style>