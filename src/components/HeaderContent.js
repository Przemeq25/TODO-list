import { Flex, Heading, Paragraph } from '@theme-ui/components';
import React from 'react';

const HeaderContent = () => {
  return (
    <Flex sx={{ alignItems: 'center', flexDirection: 'column' }} mb={4}>
      <Heading variant="title">TO DO LIST</Heading>
      <Paragraph variant="subtitle">Manage of your notes</Paragraph>
    </Flex>
  );
};

export default HeaderContent;
