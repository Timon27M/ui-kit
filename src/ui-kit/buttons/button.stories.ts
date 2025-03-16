import type { Meta, StoryObj } from '@storybook/react';
import { fn } from '@storybook/test';

import Button from './button';

const meta = {
    title: "ui-kit/button",
    component: Button,
    parameters: {
        // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
        layout: 'centered',
        docs: {
            description: {
              component: 'Компонент кнопки с поддержкой вариантов оформления, цветов и размеров. Использует SCSS-модули и эффекты box-shadow.',
            },
          },
      },
      tags: ['autodocs'],
      argTypes: {
        variant: {
            control: 'select',
            options:['primary', "secondary"],
            description: 'variant исполнения анимации'
        },
        color: {
            control: 'select',
            options:['white', 'black', "blue"]
        },
        size: {
            control: 'select',
            options:['large', 'medium', "small", undefined]
        }
      },
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        variant: "primary",
        color: "white",
        size: undefined,
        onClick: fn(),
        text: "Кнопка",
    }
}
export const Secondary: Story = {
    args: {
        variant: "secondary", 
        color: "white",
        size: undefined,
        onClick: fn(),
        text: "Кнопка",
    }
}