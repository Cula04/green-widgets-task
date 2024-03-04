<template>
  <div class="flex items-center justify-between mt-4 text-green-800">
    <span>{{ props.title }}</span>
    <div class="relative">
      <label :for="'toggle-' + props.id" class="flex items-center cursor-pointer">
        <div
          class="w-12 h-6 rounded-full bg-gray-400 shadow-inner"
          :class="{ 'bg-green-800': props.active }"
        >
          <input
            type="checkbox"
            :id="'toggle-' + props.id"
            class="hidden"
            v-model="activeStateModel"
          />
          <div
            class="absolute w-6 h-6 rounded-full bg-white shadow-md toggle-indicator hover:ring-4 hover:ring-gray-300 hover:ring-opacity-70"
            :class="{ 'transform translate-x-full': props.active }"
          ></div>
        </div>
      </label>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

const props = defineProps<{
  id: number
  title: string
  active: boolean
  setFunction: (newValue: boolean) => void
}>()

const active = ref<boolean>(props.active)

const activeStateModel = computed({
  get: () => active.value,
  set: (newValue: boolean) => {
    active.value = newValue
    props.setFunction(newValue)
  }
})
</script>
