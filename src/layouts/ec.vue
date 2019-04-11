<template>
  <div>
    <nav class="navbar navbar-expand-md navbar-dark fixed-top bg-dark">
      xxxxx
    </nav>
    <main role="main">
      <nuxt />
    </main>

  
  </div>
</template>

<script>

export default {
  middleware: ['test'],

}
</script>



<style lang="scss">

.bd-placeholder-img {
  font-size: 1.125rem;
  text-anchor: middle;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}

@media (min-width: 768px) {
  .bd-placeholder-img-lg {
    font-size: 3.5rem;
  }
}

main {
  padding-top: 56px;
}

footer {
  border-top: 1px solid #e4e4e4;
  padding-top: 1rem;
}
</style>
