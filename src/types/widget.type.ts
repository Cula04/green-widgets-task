import type { WidgetColors } from './widget-colors.enum'
import type { WidgetProductType } from './widget-product-type.enum'

export interface Widget {
  id: number
  type: WidgetProductType
  amount: number
  action: string
  active: boolean
  linked: boolean
  selectedColor: WidgetColors
}
