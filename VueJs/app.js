const app = Vue.createApp(
    {
        data (){
            return{
                team:"manchester united",
                player:"martial",
                age:27,
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