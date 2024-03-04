import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import { widgetStore, widgetStoreKey } from './store'

createApp(App).use(widgetStore, widgetStoreKey).mount('#app')
