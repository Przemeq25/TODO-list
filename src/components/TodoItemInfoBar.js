import { Box, Checkbox, Divider, Flex, Paragraph } from '@theme-ui/components';
import React from 'react';

const TodoItemInfoBar = () => {
  return (
    <>
      <Box py={3} px={3}>
        <Flex
          sx={{
            justifyContent: 'space-between',
            alignItems: 'center',
            flexDirection: ['row', 'row', 'column'],
          }}
        >
          <Flex>
            <Paragraph variant="small" mr={3}>
              Created at: 2020-12-02 21:00
            </Paragraph>
            <Paragraph variant="small" mr={3}>
              Last update: 2020-12-02 21:00
            </Paragraph>
          </Flex>
          <Flex
            sx={{
              justifyContent: 'flex-end',
              alignItems: 'center',
              mt: [0, 0, 2],
            }}
          >
            <Paragraph htmlFor="hide-completed" variant="small" mr={1}>
              Check to complete
            </Paragraph>
            <Checkbox />
          </Flex>
        </Flex>
      </Box>
      <Divider mx={3} />
    </>
  );
};

export default TodoItemInfoBar;
