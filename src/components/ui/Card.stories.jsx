import { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent, CardAction } from './card';
import { Button } from './button';

export default {
  title: 'UI/Card',
  component: Card,
  subcomponents: {
    CardHeader,
    CardFooter,
    CardTitle,
    CardDescription,
    CardContent,
    CardAction,
  },
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    className: {
      control: 'text',
    },
  },
};

export const Default = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Card Title</CardTitle>
      <CardDescription>This is a description of the card content.</CardDescription>
    </CardHeader>
    <CardContent>
      <p>This is the main content area of the card. You can put any content here.</p>
    </CardContent>
    <CardFooter>
      <Button variant="outline">Cancel</Button>
      <Button>Save</Button>
    </CardFooter>
  </Card>
);

export const WithAction = () => (
  <Card className="w-[350px]">
    <CardHeader>
      <CardTitle>Project Dashboard</CardTitle>
      <CardDescription>Manage your project settings</CardDescription>
      <CardAction>
        <Button variant="ghost" size="icon">⚙️</Button>
      </CardAction>
    </CardHeader>
    <CardContent>
      <p>Project statistics and overview content goes here.</p>
    </CardContent>
  </Card>
);

export const Minimal = () => (
  <Card className="w-[300px]">
    <CardContent className="p-6">
      <p className="text-center">Simple card with just content</p>
    </CardContent>
  </Card>
);

export const WithCustomStyles = () => (
  <Card className="w-[350px] bg-gradient-to-br from-blue-50 to-indigo-100 border-blue-200">
    <CardHeader>
      <CardTitle className="text-blue-900">Premium Feature</CardTitle>
      <CardDescription className="text-blue-700">Access exclusive content</CardDescription>
    </CardHeader>
    <CardContent>
      <p className="text-blue-800">This card has custom gradient background and colored text.</p>
    </CardContent>
    <CardFooter>
      <Button className="bg-blue-600 hover:bg-blue-700">Upgrade Now</Button>
    </CardFooter>
  </Card>
);
