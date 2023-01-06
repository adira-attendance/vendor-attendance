<script>
import axios from 'axios';
import {RouterLink,useLink} from 'vue-router'
import 'vue-toast-notification/dist/theme-default.css';
// import { throws } from 'assert';
// import { isError } from 'util';
import {useUserStore} from ''
export default {
    name:'postloginToAd1access',
    data(){
        return {
            form:{
                "login":'',
                "password": ''
        }
        }
    },
    mounted(){
      if(this.$user.login){
        this.$router.push({path:"/about"})  
      }
    },
    methods:{
         submitForm(){
           axios.post('http://localhost:9998/expenseModule/accounts/login/',this.form,{
               headers: { 
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods":'POST',
                "Content-type": 'application/json;charset=UTF-8',
                Accept:"*"
                }
           })
           .then((res)=>{
             console.log(res);
             if(res.status==200)
            //  this.$user={...res.data.object}
            //  console.log( this.$user)
              this.$router.push({path:"/about"})
             })
           .catch((res)=>{
             console.log(res)
               this.$toast.error('Ada kesalahan')
           })
           .finally()
        }
    },
    mounted(){
        
    }
}
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