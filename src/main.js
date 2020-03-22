import Vue from 'vue';
import App from '@/App.vue';
import store from '@/store';
import router from '@/router';
import VueLogger from 'vuejs-logger';

const isProduction = process.env.NODE_ENV === 'production';

Vue.config.productionTip = false;

const loggerOptions = {
  isEnabled: true,
  logLevel: isProduction ? 'error' : 'debug',
  stringifyArguments: false,
  showLogLevel: true,
  showMethodName: false,
  separator: '➡',
  showConsoleColors: true
};

Vue.use(VueLogger, loggerOptions);

new Vue({
  store,
  router,
  render: h => h(App)
}).$mount('#app')
