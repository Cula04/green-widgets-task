import { WidgetBackgroundColors, WidgetColors, widgetColorValues } from '@/types/widget-colors.enum';
import type { Meta, StoryObj } from '@storybook/vue3';
import ColorsComponent from '../ColorsComponent.vue';

const meta: Meta = {
  title: 'Components/ColorsComponent',
  component: ColorsComponent,
  argTypes: {
    title: { control: 'text' },
    selectedColor: { control: 'select', options: widgetColorValues },
    colors: { control: 'array' },
    backgroundColors: { control: 'array' },
  },
  args: {
    title: 'Select Color',
    selectedColor: WidgetColors.blue,
    colors: Object.values(WidgetColors),
    backgroundColors: Object.values(WidgetBackgroundColors),
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Select Color',
    selectedColor: WidgetColors.beige,
    colors: Object.values(WidgetColors),
    backgroundColors: Object.values(WidgetBackgroundColors),
  },
};
