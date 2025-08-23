import { Badge } from './badge';

export default {
  title: 'UI/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'outline'],
    },
    className: {
      control: 'text',
    },
  },
  args: {
    children: 'Badge',
  },
};

export const Default = {
  args: {
    variant: 'default',
  },
};

export const Secondary = {
  args: {
    variant: 'secondary',
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
