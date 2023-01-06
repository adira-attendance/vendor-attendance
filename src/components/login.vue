<script setup lang="ts">
import login from "./formLogin.vue";
import logo from "../assets/logo-ADMF-background-putih.png";
import foot from "./footer.vue";
</script>

<template >
  <div>
    <div>
      <img :src="logo" class="logo"/>
      <div class="here">
        <login />
      </div>
      <foot/>
    </div>
  </div>
</template>
