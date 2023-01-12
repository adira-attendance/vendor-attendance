<script lang="ts" >
import formAbsen from "../assets/js/formAbsen.js";


export default formAbsen;
</script>
<template>
  <div>
    <button @click.native.prevent="logout">logout</button>
    <form id="absen" :title="namauser">
      <div class="Hour">
        <input type="text" readonly v-model="absen.hourIn"  />
        <input type="text" readonly v-model="absen.hourOut" />
      </div>
      <button @click.native.prevent="absens">Absen</button>
    </form>
  </div>
</template>