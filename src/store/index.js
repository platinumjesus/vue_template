import Vue from 'vue';
import Vuex from 'vuex';

import ExampleStore from '@/store/modules/example.module';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    'songs': ExampleStore
  }
});
