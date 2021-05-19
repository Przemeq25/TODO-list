import { Button, Flex, Heading, Paragraph } from '@theme-ui/components';
import React from 'react';
import { useHistory } from 'react-router';

const NotFound = () => {
  const history = useHistory();
  return (
    <Flex
      sx={{
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        flexDirection: 'column',
      }}
    >
      <Heading sx={{ fontSize: 5, fontWeight: 'bold' }}>404</Heading>
      <Paragraph>Page not found</Paragraph>
      <Button onClick={() => history.push('/')} sx={{ mt: 3 }}>
        Home page
      </Button>
    </Flex>
  );
};

export default NotFound;
