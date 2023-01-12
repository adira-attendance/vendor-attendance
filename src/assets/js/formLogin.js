import axios from 'axios';
import 'vue-toast-notification/dist/theme-default.css';


export default {
  
    name:'postloginToAd1access',
    // setup(){
    // onMounted(()=>{
    //   document.addEventListener('DOMContentLoaded', function () {
    //    if(this.$cookies.isKey('user')){
    //     this.$router.push({path:"/about"})
    //   }
    // });
    // })
    // },
    data(){
        return {
            form:{
                "login":'',
                "password": '',
                
        }
        }
    },
    created(){
       if(this.$cookies.isKey('user')){
        this.$router.push({path:"/about"})
      }
    },
    methods:{
         submitForm(){
           axios.post('http://localhost:9998/expenseModule/accounts/login',this.form,{
               headers: { 
                "Access-Control-Allow-Origin": '*',
                "Access-Control-Allow-Methods":'POST',
                "Content-type": 'application/json;charset=UTF-8',
                Accept:"*"
                }
           })
           .then((res)=>{
             console.log(res.data.object);
             if(res.status==200)
              this.$cookies.set('user',res.data.object)
              this.$router.push({path:"/about"})
             })
           .catch((res)=>{
             console.log(res)
               this.$toast.error('Ada kesalahan Mohon hubungi IT Had')
           })
           .finally()
        }
    },
    mounted(){
        
    }
}