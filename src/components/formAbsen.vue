<script lang="ts">

export default{
    name:'absen',
    data(){
        return {
            form:{
                "hourIn":'',
                "HourOut": ''
        }
        }
    },mounted(){
        console.log(this.$user)
    }
    ,methods:{
        absen(){
            
        }
    }
}
</script>
<template>
    <form @submit="absen">

    </form>
</template>