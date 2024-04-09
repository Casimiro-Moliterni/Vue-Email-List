const { createApp } = Vue

  createApp({
    data() {
      return {
      singleEmail:[],
      }
    },
    methods:{
    
       
    },
    mounted(){
        for(let i = 0 ; i < 10 ; i++){
        axios.get('https://flynn.boolean.careers/exercises/api/random/mail')
        .then((response) => {
            
            Email = response.data.response;
            this.singleEmail.push(Email);
            console.log(this.singleEmail)
        });
    }
    }
  }).mount('#app')