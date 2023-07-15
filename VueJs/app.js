const app = Vue.createApp(
    {
        data (){
            return{
                team:"manchester united",
                player:"martial",
                age:27,
                showData:true,
                link:"https://www.google.com/"
            }
        },
        methods: {
            IncreaseAge(){
                this.age++
            }
        },
    }
);
app.mount('#app');