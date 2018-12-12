import Vue from 'vue'
import * as Store from './store/'

declare module 'vue/types/vue' {
  interface Vue {
    $store: Store.AppStore
  }
}
