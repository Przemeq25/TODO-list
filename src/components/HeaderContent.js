import { Flex, Heading, Paragraph } from '@theme-ui/components';
import React from 'react';

const HeaderContent = ({ edit }) => {
  return (
    <Flex sx={{ alignItems: 'center', flexDirection: 'column' }}>
      <Heading variant="title">{edit ? 'EDIT TO DO' : 'TO DO LIST'}</Heading>
      <Paragraph variant="subtitle">
        {edit ? 'Edit or remove this note' : 'Manage of your notes'}
      </Paragraph>
    </Flex>
  );
};

export default HeaderContent;
