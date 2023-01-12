<script>

import formLogic from '../assets/js/formLogin.js'
export default formLogic;
</script>
<template>
  <div class="container">
    <form id="logins" >
      <label>NIK</label>
      <input type="text" id="login" v-model="form.login" placeholder="Nomor NIK" />
      <label>Password</label>
      <input type="Password" id="pass" v-model="form.password"  placeholder="Password" />
      <div class="button">
        <button  @click.native.prevent="submitForm">Login</button>
        <button>Forgot Password</button>
      </div>
    </form>
    

  </div>
</template>>