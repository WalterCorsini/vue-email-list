const { createApp } = Vue;

createApp({
  data() {
    return {
      isLoading:false,
      arrayMail: [],
    };
  },
  created() {
    this.createdEmails();
  },
  methods: {
      createdEmails: function () {
        this.isLoading=true;
          for (i = 0; i < 10; i++) {
              axios.get("https://flynn.boolean.careers/exercises/api/random/mail")
              .then((rndMail) => {
                  this.arrayMail.push(rndMail.data.response);
                  this.isLoading=false;
                });
              }
        },
    },
}).mount("#app");
