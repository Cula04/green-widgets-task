<template>
  <div class="mt-4 text-green-800">
    <label class="flex items-center cursor-pointer">
      <span>{{ props.title }}</span>
      <div class="ml-auto flex">
        <template v-for="(color, colorIndex) in props.colors" :key="colorIndex">
          <input
            type="radio"
            :id="'color-' + color + '-' + props.id"
            :value="color"
            v-model="selectedColorStateModel"
            class="hidden"
          />
          <label
            :for="'color-' + color + '-' + props.id"
            :class="[
              'w-5 h-5 border border-gray-400 rounded-sm ml-2 cursor-pointer transition-all duration-300 ease-in-out brightness-100 hover:brightness-200',
              backgroundColors[colorIndex],
              { 'border-[3px]': selectedColor === color }
            ]"
          ></label>
        </template>
      </div>
    </label>
  </div>
</template>

<script setup lang="ts">
import type { WidgetBackgroundColors, WidgetColorType } from '@/types/widget-colors.enum'
import { computed, ref } from 'vue'

const props = defineProps<{
  id: number
  title: string
  selectedColor: WidgetColorType
  colors: WidgetColorType[]
  backgroundColors: WidgetBackgroundColors[]
  setFunction: (newValue: WidgetColorType) => void
}>()

const selectedColor = ref<WidgetColorType>(props.selectedColor)

const selectedColorStateModel = computed<WidgetColorType>({
  get: () => selectedColor.value,
  set: (newValue: WidgetColorType) => {
    selectedColor.value = newValue
    props.setFunction(newValue)
  }
})
</script>
