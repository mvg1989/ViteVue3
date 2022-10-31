<template>
  <div class="container">
    <div class="row">
      <div class="col-lg-1 text-center fw-bold border border-1 rounded-pill gradwr">
        <span>mvg1989 Productions</span>
      </div>
      <div class="col-lg-1 btn btn-primary">
        <RouterLink :to="{ name: 'Home' }">Home</RouterLink>
      </div>
      <div class="col-lg-1 btn btn-primary">
        <RouterLink :to="{ name: 'Business' }">Business</RouterLink>
      </div>
      <div class="col-lg-1 btn btn-primary">
        <RouterLink :to="{ name: 'Contact' }">Contact</RouterLink>
      </div>
      <div class="col-lg-1 btn btn-primary">
        <RouterLink :to="{ name: 'Aboutus' }">Aboutus</RouterLink>
      </div>
    </div>
  </div>
</template>

<script setup>

</script>

<style language="sass" scoped>
.container {
  height: 10vh;
}

.gradwr {
  background: linear-gradient(to right, white, #0d6efd);
}

a {
  text-decoration: none;
  color: white;
}

a:hover {
  text-decoration: none;
  color: white;
}
</style>
