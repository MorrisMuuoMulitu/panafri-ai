import { Input } from './input';

export default {
  title: 'UI/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'tel', 'url'],
    },
    placeholder: {
      control: 'text',
    },
    disabled: {
      control: 'boolean',
    },
    className: {
      control: 'text',
    },
    value: {
      control: 'text',
    },
  },
  args: {
    placeholder: 'Enter text...',
  },
};

export const Default = {
  args: {
    type: 'text',
  },
};

export const Email = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
};

export const Password = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
};

export const Disabled = {
  args: {
    disabled: true,
    placeholder: 'Disabled input',
  },
};

export const WithValue = {
  args: {
    value: 'Prefilled text',
  },
};

export const WithCustomClass = {
  args: {
    className: 'border-2 border-blue-500 focus:border-blue-700',
    placeholder: 'Custom styled input',
  },
};
