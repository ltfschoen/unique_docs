import {defineClientConfig} from '@vuepress/client'
import {useInitProvider} from 'unique_api_vue'
import Vue from 'vue'

import Toast from 'vue-toastification'
import 'vue-toastification/dist/index.css'

const delay = (ms: number) => new Promise(resolve => setTimeout(resolve, ms))

export default defineClientConfig({
  enhance({app}) {
    app.use(Toast, {
      transition: "Vue-Toastification__fade",
      maxToasts: 10,
      newestOnTop: true,
    })
  },
  async setup() {
    if (typeof window !== 'undefined') {
      window.global = window;

      useInitProvider({
        substrateNodeWsUrl: 'wss://quartz.api.onfinality.io/public-ws',
        substrateAutoconnect: false,
        initEthereumExtension: false,
        connectToPolkadotExtensionsAs: 'Unique Network Docs',
      })
    }
  }
})
