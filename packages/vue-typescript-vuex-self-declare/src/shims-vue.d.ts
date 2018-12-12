import Vue from 'vue'
import * as Vuex from 'vuex'
import * as Store from './store/'

declare module 'vue/types/vue' {
  interface Vue {
    $store: Vuex.Store<any> // Store が any になっているのでこの部分は妥協する
    $state: Store.State // State はこうすることによって型定義が守られる
  }
}
