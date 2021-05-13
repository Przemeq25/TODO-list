import {
  Box,
  Checkbox,
  Flex,
  IconButton,
  Paragraph,
} from '@theme-ui/components';
import { ReactComponent as DeleteIcon } from '../assets/delete.svg';
import { ReactComponent as EditIcon } from '../assets/edit.svg';
import React from 'react';

const TodoItem = () => {
  return (
    <Box mb={2} p={3} bg="muted" variant="radii">
      <Flex sx={{ alignItems: 'center' }}>
        <Box mr={3}>
          <Checkbox />
        </Box>
        <Paragraph
          variant="hidden"
          sx={{
            flex: 1,
            pr: 4,
            //color: completed && 'gray',
            //textDecoration: completed && 'line-through',
          }}
        >
          {
            //Some text here
          }
        </Paragraph>
        <Box>
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Flex>
    </Box>
  );
};

export default TodoItem;
