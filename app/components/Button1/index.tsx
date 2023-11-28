// pages/index.js

import { Button, TextInput } from '@mantine/core';

const Button1 = () => {
  return (
    <div style={{ textAlign: 'center', padding: '50px' }}>
      <h1>Welcome to My Next.js App with Mantine!</h1>
      <TextInput
        placeholder="Enter your name"
        style={{ marginTop: '20px', width: '300px' }}
      />
      <Button
        variant="outline"
        color="blue"
        style={{ marginTop: '20px' }}
      >
        Click me
      </Button>
    </div>
  );
};

export default Button1;
