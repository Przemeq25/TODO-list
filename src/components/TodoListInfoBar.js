import React from 'react';
import { Box, Flex, Input, Paragraph, Switch } from 'theme-ui';

const TodoListInfoBar = () => {
  return (
    <Box
      py={3}
      sx={{
        px: [3, 2, 2],
      }}
    >
      <Flex sx={{ flexDirection: ['row', 'column'], alignItems: 'center' }}>
        <Flex
          sx={{
            alignItems: 'center',
            flex: 1,
          }}
        >
          <Paragraph variant="small" mr={3}>
            Completed: 10
          </Paragraph>
          <Paragraph variant="small">Uncompleted: 2</Paragraph>
        </Flex>

        <Flex
          sx={{
            justifyContent: 'flex-end',
            alignItems: 'center',
            flex: 2,
            mt: [0, 3],
          }}
        >
          <Paragraph htmlFor="hide-completed" variant="small">
            Hide completed
          </Paragraph>
          <Box mx={2}>
            <Switch id="hide-completed" />
          </Box>
          <Box>
            <Input placeholder="Search..." />
          </Box>
        </Flex>
      </Flex>
    </Box>
  );
};

export default TodoListInfoBar;
