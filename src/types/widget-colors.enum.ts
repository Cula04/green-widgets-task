export enum WidgetColors {
  blue = 'blue',
  green = 'green',
  beige = 'beige',
  white = 'white',
  black = 'black'
}

export type WidgetColorType = (typeof WidgetColors)[keyof typeof WidgetColors]
export const widgetColorValues = Object.values(WidgetColors)

export enum WidgetBackgroundColors {
  blue = 'bg-blue-700',
  green = 'bg-green-800',
  beige = 'bg-orange-100',
  white = 'bg-white',
  black = 'bg-black'
}

export enum WidgetFillColors {
  blue = 'fill-white',
  green = 'fill-white',
  beige = 'fill-green-800',
  white = 'fill-green-800',
  black = 'fill-white'
}

export enum WidgetTextColors {
  blue = 'text-white',
  green = 'text-white',
  beige = 'text-green-800',
  white = 'text-green-800',
  black = 'text-white'
}
