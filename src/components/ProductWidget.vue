<template>
  <div class="container mx-auto w-3/4 mb-12">
    <WidgetHeader
      :productQuantity="productQuantity"
      :action="widget.action"
      :backgroundColor="WidgetBackgroundColors[widget.selectedColor as keyof typeof WidgetBackgroundColors]"
      :textColor="WidgetTextColors[widget.selectedColor as keyof typeof WidgetTextColors]"
      :fillColor="WidgetFillColors[widget.selectedColor as keyof typeof WidgetFillColors]"
    />

    <CheckBoxComponent
      :id="widget.id"
      :title="'Link to Public Profile'"
      :linked="widget.linked"
      :infoText="'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.'"
      :linkText="'View Public Profile'"
      :setFunction="
        (newValue: boolean) => {
          store.dispatch(WidgetActions.setLinked, { id: widget.id, linked: newValue })
        }
      "
    />

    <ColorsComponent
      :id="widget.id"
      :title="'Badge color'"
      :colors="widgetColorValues"
      :selectedColor="widget.selectedColor"
      :backgroundColors="Object.values(WidgetBackgroundColors)"
      :setFunction="
        (newValue: string) => {
          store.dispatch(WidgetActions.setSelectedColor, { id: widget.id, selectedColor: newValue })
        }
      "
    />

    <ToggleComponent
      :id="widget.id"
      title="Active Badge"
      :active="widget.active"
      :setFunction="
        (newValue: boolean) => {
          store.dispatch(WidgetActions.setActive, { id: widget.id, active: !widget.active })
        }
      "
    />
  </div>
</template>

<script setup lang="ts">
import CheckBoxComponent from '@/components/CheckBoxComponent.vue'
import ColorsComponent from '@/components/ColorsComponent.vue'
import ToggleComponent from '@/components/ToggleComponent.vue'
import WidgetHeader from '@/components/WidgetHeader.vue'
import { widgetStoreKey } from '@/store'
import { WidgetActions } from '@/types/widget-actions.enum'
import { WidgetBackgroundColors, WidgetFillColors, WidgetTextColors, widgetColorValues } from '@/types/widget-colors.enum'
import type { WidgetProductType } from '@/types/widget-product-type.enum'
import { WidgetProductType as WidgetProductTypeValue } from '@/types/widget-product-type.enum'
import type { Widget } from '@/types/widget.type'
import { ref, watchEffect } from 'vue'
import { useStore } from 'vuex'

const props = defineProps<{
  widgetId: number
}>()

const store = useStore(widgetStoreKey)

const widget = ref<Widget>({} as Widget)
const productQuantity = ref<string>('')

const createProductQuantity = (amount: number, type: WidgetProductType) => {
  switch (type) {
    case WidgetProductTypeValue.CARBON:
      return `${amount}kgs of ${type}`
    case WidgetProductTypeValue.TREES:
    case WidgetProductTypeValue.PLASTIC_BOTTLES:
    default:
      return `${amount} ${type}`
  }
}

// Fetch initial widget data from the Vuex store
const fetchData = async () => {
  widget.value = store.state.widgets.find((widget) => widget.id === props.widgetId) as Widget
  productQuantity.value = createProductQuantity(widget.value.amount, widget.value.type)
}

watchEffect(() => {
  fetchData()
})
</script>
