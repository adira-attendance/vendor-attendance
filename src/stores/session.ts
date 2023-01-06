import { defineStore } from 'pinia'

export const useUserStore = defineStore('user',{
    state:()=>({
      login:'',
      name:''
    }),
    actions:{
      setUser(user){
        this.login=user.login
        this.name=user.name
      },
      printUser(){
        console.log(this.user)
      },
      checkLogin(){
        if(!this.login){
          this.$router.push({path:"/"})
        }
      }
    }
})
