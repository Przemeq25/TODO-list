import { Box, Button, Flex, Paragraph, Textarea } from '@theme-ui/components';
import React from 'react';

const TodoCreator = ({ edit }) => {
  return (
    <Box>
      <Paragraph variant="small" sx={{ textAlign: 'right' }}>
        Characters: 0
      </Paragraph>
      <Textarea rows={2} placeholder="Add a note ..." />
      <Flex sx={{ justifyContent: 'flex-end', alignItems: 'center' }} mt={2}>
        <Button ml={3}>{edit ? 'Edit note' : 'Add note'}</Button>
      </Flex>
    </Box>
  );
};

export default TodoCreator;
