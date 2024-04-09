const { createApp } = Vue

  createApp({
    data() {
      return {
        message: 'Hello Vue!'
      }
    },
    methods:{
     generetaApi(){
        axios.get('https://flynn.boolean.careers/exercises/api/array/integers?min=1&max=10&items=4')
        .then((response) => {
            console.log(response.data.success);
        });
     }
    },
    mounted(){
       console.log(this.generetaApi())
    }
  }).mount('#app')