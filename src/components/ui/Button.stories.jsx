import { fn } from 'storybook/test';
import { Button } from './button';

export default {
  title: 'UI/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
    disabled: {
      control: 'boolean',
    },
    asChild: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
  },
  args: {
    onClick: fn(),
    children: 'Button',
  },
};

export const Default = {
  args: {
    variant: 'default',
  },
};

export const Destructive = {
  args: {
    variant: 'destructive',
  },
};

export const Outline = {
  args: {
    variant: 'outline',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
  },
};

export const Ghost = {
  args: {
    variant: 'ghost',
  },
};

export const Link = {
  args: {
    variant: 'link',
  },
};

export const Small = {
  args: {
    size: 'sm',
  },
};

export const Large = {
  args: {
    size: 'lg',
  },
};

export const Icon = {
  args: {
    size: 'icon',
    children: '🔍',
  },
};

export const Disabled = {
  args: {
    disabled: true,
  },
};

export const WithCustomClass = {
  args: {
    className: 'bg-purple-500 hover:bg-purple-600 text-white',
  },
};
