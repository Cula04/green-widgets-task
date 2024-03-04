import { WidgetBackgroundColors, WidgetFillColors, WidgetTextColors } from '@/types/widget-colors.enum';
import type { Meta, StoryObj } from '@storybook/vue3';
import WidgetHeader from '../WidgetHeader.vue';

const meta: Meta = {
  title: 'Components/WidgetHeader', 
  component: WidgetHeader, 
  argTypes: {
    productQuantity: { control: 'text' },
    action: { control: 'text' },
    backgroundColor: { control: 'select', options: Object.values(WidgetBackgroundColors) },
    fillColor: { control: 'select', options: Object.values(WidgetFillColors) },
    textColor: { control: 'select', options: Object.values(WidgetTextColors) },
  },
  args: {
    productQuantity: '10',
    action: 'is in stock',
    backgroundColor: WidgetBackgroundColors.blue,
    fillColor: WidgetFillColors.blue,
    textColor: WidgetTextColors.blue,
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const BlueVersion: Story = {
  args: {
    productQuantity: '100 plastic bottles',
    action: 'collects',
    backgroundColor: WidgetBackgroundColors.blue,
    fillColor: WidgetFillColors.blue,
    textColor: WidgetTextColors.blue,
  },
};

export const GreenVersion: Story = {
  args: {
    productQuantity: '20 trees',
    action: 'plants',
    backgroundColor: WidgetBackgroundColors.green,
    fillColor: WidgetFillColors.green,
    textColor: WidgetTextColors.green,
  },
};

export const BeigeVersion: Story = {
  args: {
    productQuantity: '5',
    action: 'is nearly sold out',
    backgroundColor: WidgetBackgroundColors.beige,
    fillColor: WidgetFillColors.beige,
    textColor: WidgetTextColors.beige,
  },
};

export const WhiteVersion: Story = {
  args: {
    productQuantity: '0',
    action: 'is out of stock',
    backgroundColor: WidgetBackgroundColors.white,
    fillColor: WidgetFillColors.white,
    textColor: WidgetTextColors.white,
  },
};

export const BlackVersion: Story = {
  args: {
    productQuantity: '1000',
    action: 'is in stock',
    backgroundColor: WidgetBackgroundColors.black,
    fillColor: WidgetFillColors.black,
    textColor: WidgetTextColors.black,
  },
};