import Vue from 'vue'
import App from './App.vue'
import 'popper.js';
import BootstrapVue from 'bootstrap-vue';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

Vue.use(BootstrapVue);

Vue.config.productionTip = false

delete L.Icon.Default.prototype._getIconUrl  
// eslint-disable-next-line  
L.Icon.Default.mergeOptions({  
  iconRetinaUrl: require('leaflet/dist/images/marker-icon-2x.png'),  
  iconUrl: require('leaflet/dist/images/marker-icon.png'),  
  shadowUrl: require('leaflet/dist/images/marker-shadow.png')  
})

new Vue({
  render: h => h(App),
}).$mount('#app')
