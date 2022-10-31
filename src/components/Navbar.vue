<template>
  <div class="container ms-2">
    <div class="row gap-2 mt-2">
      <div class="col-1">
        <RouterLink :to="{ name: 'Home' }">
          <!-- <span class="text-center fw-bold border border-1 rounded gradwr">mvg1989</span> -->
          <div class="col-12 fs-4 text-center fw-bold border border-1 rounded gradwr">mvg1989</div>
        </RouterLink>
      </div>
      <div class="col-1">
        <RouterLink :to="{ name: 'Home' }">
          <!-- <span class="btn btn-primary"> Home</span> -->
          <div class="col-12 btn btn-primary">Home</div>
        </RouterLink>
      </div>
      <div class="col-1">
        <RouterLink :to="{ name: 'Business' }">
          <div class="col-12 btn btn-primary">Business</div>
        </RouterLink>
      </div>
      <div class="col-1">
        <RouterLink :to="{ name: 'Contact' }">
          <div class="col-12 btn btn-primary">Contact</div>
        </RouterLink>
      </div>
      <div class="col-1">
        <RouterLink :to="{ name: 'Aboutus' }">
          <div class="col-12 btn btn-primary">Aboutus</div>
        </RouterLink>
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
