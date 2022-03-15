<template>
  <div class="row">
    <div class="col-md-12">
      <h1>Contact</h1>
      <peta />
    </div>
    <div class="col-md-12">
      <fromcontact />
    </div>
  </div>
</template>

<script>
import peta from '../components/Peta.vue'
import fromcontact from '../components/fromcontact.vue'
export default{
    components: {
      peta,
      fromcontact,
    }
  }
</script>



