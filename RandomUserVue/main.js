const App = {
    data: function(){
        return{
            mensaje: 'Hola Vue. Js',
            muestra:false,
            nombre:""
        }
    },
    methods:{
        cambiarMuestra: async function(){
            this.muestra= !this.muestra
        },
        randomuser: async function(){
            let n=""
            await  await axios.get('https://randomuser.me/api/')
            .then(function(response){
                console.log(response.data.results[0].name.last)
                n = response.data.results[0].name.last
            });
            this.nombre=n
        }
    }
};
Vue.createApp(App).mount("#app")