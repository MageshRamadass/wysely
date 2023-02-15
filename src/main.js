import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import { initializeApp } from "firebase/app";

// console.log("apikey",process.env, process.env.API_KEY)
const firebaseConfig = {
  apiKey: process.env.VUE_APP_API_KEY,
  authDomain: "wysely-n.firebaseapp.com",
  projectId: "wysely-n",
  storageBucket: "wysely-n.appspot.com",
  messagingSenderId: "156226456197",
  appId: "1:156226456197:web:53f81c2d41eda27980b7ec"
};

initializeApp(firebaseConfig);
Vue.config.productionTip = false

new Vue({
   created: function() {
    console.log('apikey2',process.env.development.VUE_APP_API_KEY)
  },
  
 mounted(){
  console.log('apikey3',process.env.development.VUE_APP_API_KEY)
  },


    
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
