import { ComponentMeta, ComponentStory } from '@storybook/react';

import UiButton from './UiButton';

export default {
    title: 'Ui-Kit/UiButton',
    component: UiButton,
} as ComponentMeta<typeof UiButton>;

const Template: ComponentStory<typeof UiButton> = (args) => <UiButton {...args} />;

export const Button = Template.bind({});

Button.args = {
    content: 'Купить',
};