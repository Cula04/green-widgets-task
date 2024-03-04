import { WidgetActions } from '@/types/widget-actions.enum'
import { WidgetColors } from '@/types/widget-colors.enum'
import { WidgetMutations } from '@/types/widget-mutations.enum'
import type { Widget } from '@/types/widget.type'
import type { InjectionKey } from 'vue'
import { Store, createStore, type ActionContext } from 'vuex'
import type { RootState } from '../types/widget-root-state.type'

export const widgetStoreKey: InjectionKey<Store<RootState>> = Symbol()

const state: RootState = {
  widgets: []
}

const mutations = {
  [WidgetMutations.SET_WIDGETS](state: RootState, widgets: Widget[]) {
    state.widgets = widgets
  },
  [WidgetMutations.UPDATE_WIDGET](
    state: RootState,
    payload: { id: number; active?: boolean; linked?: boolean; selectedColor?: WidgetColors }
  ) {
    const widgetIndex = state.widgets.findIndex((widget) => widget.id === payload.id)
    if (widgetIndex === -1) return
    if (payload.active !== undefined) {
      state.widgets.forEach((widget) => {
        widget.active = false
      })
    }
    state.widgets[widgetIndex] = { ...state.widgets[widgetIndex], ...payload }
  }
}

const actions = {
  async [WidgetActions.fetchWidgetsAction](context: ActionContext<RootState, RootState>) {
    const widgets = await fetchWidgets()
    context.commit(WidgetMutations.SET_WIDGETS, widgets)
  },
  async [WidgetActions.setActive](
    context: ActionContext<RootState, RootState>,
    payload: { id: number; active: boolean }
  ) {
    context.commit(WidgetMutations.UPDATE_WIDGET, { id: payload.id, active: payload.active })
  },
  async [WidgetActions.setLinked](
    context: ActionContext<RootState, RootState>,
    payload: { id: number; linked: boolean }
  ) {
    context.commit(WidgetMutations.UPDATE_WIDGET, { id: payload.id, linked: payload.linked })
  },
  async [WidgetActions.setSelectedColor](
    context: ActionContext<RootState, RootState>,
    payload: { id: number; selectedColor: string }
  ) {
    context.commit(WidgetMutations.UPDATE_WIDGET, {
      id: payload.id,
      selectedColor: payload.selectedColor
    })
  }
}

const fetchWidgets = async (): Promise<Widget[]> => {
  const response = await fetch('https://api.mocki.io/v2/016d11e8/product-widgets')
  const data: Widget[] = await response.json()
  return data
}

export const widgetStore = createStore<RootState>({
  state,
  actions,
  mutations
})
