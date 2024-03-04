<template>
  <div class="mt-4 text-green-800">
    <label class="flex items-center cursor-pointer">
      <span>{{ props.title }}</span>
      <!-- Tooltip Icon -->

      <div class="relative">
        <svg
          @mouseover="showInfo = true"
          @mouseleave="hideInfoAfterDelay()"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-4 h-4 mb-3"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
          />
        </svg>
        <!-- Info Window -->
        <div
          v-show="showInfo"
          class="absolute top-0 left-0 p-2 mt-8 bg-gray-100 rounded-lg shadow-lg w-40 z-50"
          @mouseover="cancelHide"
          @mouseleave="hideInfoAfterDelay"
        >
          <p class="text-xs text-gray-600">{{ props.infoText }}</p>
          <p class="text-xs text-center mt-2">{{ props.linkText }}</p>
        </div>
      </div>

      <div
        class="ml-auto w-6 h-6 border-2 border-gray-400 rounded-md flex justify-center items-center relative overflow-hidden hover:ring-4 hover:ring-gray-300 hover:ring-opacity-70"
        :class="{ 'bg-green-800': linked }"
      >
        <svg
          v-if="linked"
          class="w-5 h-5 text-white"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M5 13l4 4L19 7"
          ></path>
        </svg>
      </div>
      <input type="checkbox" class="opacity-0 absolute -z-10 w-0 h-0" v-model="linkedStateModel" />
    </label>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue';

const props = defineProps<{
  id: number
  title: string
  infoText: string
  linkText: string
  linked: boolean
  setFunction: (newValue: boolean) => void
}>()

const linked = ref<boolean>(props.linked)
const showInfo = ref<boolean>(false)

let timeoutId: NodeJS.Timeout
const hideInfoAfterDelay = () => {
  timeoutId = setTimeout(() => {
    showInfo.value = false
  }, 200)
}
const cancelHide = () => {
  clearTimeout(timeoutId)
}

const linkedStateModel = computed({
  get: () => linked.value,
  set: (newValue: boolean) => {
    linked.value = newValue
    props.setFunction(newValue)
  }
})
</script>
