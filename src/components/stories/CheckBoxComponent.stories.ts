import type { Meta, StoryObj } from '@storybook/vue3';
import CheckBoxComponent from '../CheckBoxComponent.vue';

const meta: Meta = {
  title: 'Components/CheckBoxComponent', 
  component: CheckBoxComponent, 
  argTypes: {
    title: { control: 'text' },
    infoText: { control: 'text' },
    linkText: { control: 'text' },
    linked: { control: 'boolean' },
  },
  args: {
    title: 'Link to Public Profile',
    infoText: 'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.', 
    linkText: 'View Public Profile', 
    linked: true, 
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Checked: Story = {
  args: {
    title: 'Link to Public Profile',
    infoText: 'This widget links directly to your public profile so that you can easily share your impact with your customers. Turn it off here if you do not want the badge to link to it.',
    linkText: 'View Public Profile',
    linked: true,
  },
};

export const NotChecked: Story = {
  args: {
    title: 'Some title',
    infoText: 'Info text about this checkbox.',
    linkText: 'Some external link',
    linked: false,
  },
};