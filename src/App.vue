<script setup lang="ts">
import ProductWidget from '@/components/ProductWidget.vue'
import { widgetStoreKey } from '@/store'
import { onMounted, ref } from 'vue'
import { useStore } from 'vuex'

const widgetStore = useStore(widgetStoreKey)
const widgetIds = ref<number[]>([])
const widgetKeys = ref<string[]>([])

// Fetch initial widget data from the Vuex store
onMounted(async () => {
  await widgetStore.dispatch('fetchWidgetsAction')
  widgetIds.value = widgetStore.state.widgets.map((widget) => widget.id)
})
</script>

<template>
  <div id="app">
    <div class="container mt-3 mx-auto p-4 bg-dirtyWhite shadow-lg rounded-lg">
      <h1 class="text-3xl text-left mb-4">Per Product Widgets</h1>
      <hr class="border-t border-gray-700 my-4" />
      <div class="grid grid-cols-1 md:grid-cols-3 gap-4 justify-center">
        <ProductWidget
          v-for="(widgetId, index) in widgetIds"
          :key="widgetKeys[index]"
          :widgetId="widgetId"
        />
      </div>
    </div>
  </div>
</template>

<style scoped></style>
