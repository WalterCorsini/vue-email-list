const {createApp} = Vue;

createApp({
    data(){
        return{
            arrayMail: [],
        }
    },
    created(){
        for(i=0; i<10; i++){
        axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
        .then((rndMail) =>{
            this.arrayMail.push(rndMail.data.response);
            console.log("email random", this.arrayMail);
        })
    }
    }
}).mount("#app");