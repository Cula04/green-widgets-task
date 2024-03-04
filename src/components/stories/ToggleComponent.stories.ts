import type { Meta, StoryObj } from '@storybook/vue3';
import ToggleComponent from '../ToggleComponent.vue';

const meta: Meta = {
  title: 'Components/ToggleComponent',
  component: ToggleComponent, 
  argTypes: {
    id: { control: 'number' },
    title: { control: 'text' },
    active: { control: 'boolean' },
    setFunction: { action: 'setFunction' }, 
  },
  args: { 
    id: 1,
    title: 'Toggle Switch',
    active: false,
    setFunction: () => {}, 
  }, 
};

export default meta;

type Story = StoryObj<typeof meta>;


export const Active: Story = {
  args: { active: true }, // Args for the story
};

export const Inactive: Story = {
  args: { active: false }, // Args for the story
};