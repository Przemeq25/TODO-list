import React from 'react';
import { Box, Container } from 'theme-ui';
import HeaderWrapper from '../components/HeaderWrapper';
import TodoCreator from '../components/TodoCreator';
import TodoItemInfoBox from '../components/TodoItemInfoBox';

const TodoItemPage = () => {
  return (
    <Container>
      <HeaderWrapper edit />
      <TodoItemInfoBox />
      <Box mx={3}>
        <TodoCreator edit />
      </Box>
    </Container>
  );
};

export default TodoItemPage;
