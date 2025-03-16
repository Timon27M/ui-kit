import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Input from './input';

const meta = {
    title: "ui-kit/input",
    component: Input,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
      },
      tags: ['autodocs'],
      argTypes: {
        variant: {
            control: 'select',
            options:['primary', "secondary"]
        },
        color: {
            control: 'select',
            options:['white', 'black']
        },
        sizeInput: {
            control: 'select',
            options:['large', 'medium', "small", undefined]
        }
      },
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        color: "white",
        sizeInput: undefined,
        onChange: fn()
    }
}
export const Secondary: Story = {
    args: {
        variant: "secondary", 
        color: "white",
        sizeInput: undefined,
        onChange: fn()
    }
}